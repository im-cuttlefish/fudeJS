import { Container } from "pixi.js";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { Character } from "./Character";
import { getConfig } from "./getConfig";
import { screenWidth } from "config.json";

export const characterRoot = new Container();

const characterEvent = currentCommand.updates.filterMap(payload => {
  if (payload.type === "character") return payload;
});

const characters: Character[] = [];

characterEvent.watch(async payload => {
  switch (payload.command) {
    case "add-character": {
      const { id, image } = payload;
      const { length } = characters;
      const config = getConfig(id);
      const character = new Character(config, image);
      const x = (screenWidth * (length + 1)) / (length + 2);

      character.moveTo({ x }, 0);
      characters.push(character);
      characterRoot.addChild(character.view);

      const fadein = character.fadeIn();
      const moveTo = characters.map((character, index, { length }) =>
        character.moveTo({ x: ((index + 1) * screenWidth) / (length + 1) })
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
      const character = characters.find(x => x.id === id);

      if (!character) {
        console.error(`Character Error: "${id}" is not added.`);
        return;
      }

      character.changeImage(image);
    }
  }
});
