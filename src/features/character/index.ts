import anime from "animejs";
import { Container } from "pixi.js";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { createCharacter } from "./createCharacter";
import { Character } from "./types";

export const characterRoot = new Container();

const characters: Character[] = [];

const characterEvent = currentCommand.updates.filterMap(payload => {
  if (payload.type === "character") return payload;
});

characterEvent.watch(payload => {
  switch (payload.command) {
    case "add-character": {
      const { id, image } = payload;
      const character = createCharacter(id, image);
      const { sprite } = character;
      characters.push(character);
      characterRoot.addChild(sprite);

      const { length } = characters;
      sprite.alpha = 0;
      sprite.x = (500 * length) / (length + 1);

      anime({
        targets: sprite,
        alpha: 1,
        easing: "linear",
        duration: 1000,
        complete: () => update()
      });

      characters.forEach(({ sprite }, index) => {
        anime({
          targets: sprite,
          x: ((index + 1) * 500) / (length + 1),
          easing: "linear",
          duration: 1000
        });
      });
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

      case "change-image": {
        const { id, image } = payload;
        const exists = state.some(x => x.config.id === id);

        if (!exists) {
          console.error(`Character Error: "${id}" is not added.`);
          return;
        }

        setTimeout(update);

        return state.map(x => {
          if (x.config.id !== id) {
            return x;
          }

          x.usedImage = image;
          return x;
        });
      }
      */
  }
});
