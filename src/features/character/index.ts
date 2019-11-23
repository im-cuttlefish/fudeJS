import { Container } from "pixi.js";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { Character } from "./Character";
import { scenario } from "features/global/store";

export const characterRoot = new Container();

const characterEvent = currentCommand.updates.filterMap(payload => {
  if (payload.type === "character") return payload;
});

const characters: Character[] = [];

const getConfig = (id: string) => {
  const { configs } = scenario.getState()!;
  return configs.character.find(x => x.id === id)!;
};

characterEvent.watch(async payload => {
  switch (payload.command) {
    case "add-character": {
      const { id, image } = payload;
      const config = getConfig(id);
      const character = new Character(config, image);

      character.moveTo({ x: 250 }, 0);
      characters.push(character);
      characterRoot.addChild(character.view);

      const { length } = characters;

      const fadein = character.fadeIn();
      const moveTo = characters.map((character, index) =>
        character.moveTo({ x: ((index + 1) * 500) / (length + 1) })
      );

      await Promise.all([fadein, ...moveTo]);
      update();

      return;
    }
    /*
      case "remove-character": {
        const { id } = payload;
        const exists = state.some(x => x.config.id === id);

        if (!exists) {
          console.error(`Character Error: "${id}" is not added.`);
          return;
        }

        setTimeout(update);

        return state.filter(x => x.config.id !== id);
      }
    */

    case "change-image": {
      const { id, image } = payload;
      const config = getConfig(id);
      const prev = characters.find(x => x.id === id);

      if (!prev) {
        console.error(`Character Error: "${id}" is not added.`);
        return;
      }

      const next = new Character(config, image);
    }
  }
});
