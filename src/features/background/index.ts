import anime from "animejs";
import { Container, Sprite } from "pixi.js";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { scenario } from "features/global/store";

export const backgroundRoot = new Container();

const backgroundEvent = currentCommand.updates.filterMap(payload => {
  if (payload.type === "background") return payload;
});

backgroundEvent.watch(payload => {
  switch (payload.command) {
    case "set-background": {
      const { id } = payload;
      const { background } = scenario.getState()!.configs;
      const config = background.find(x => x.id === id);

      if (!config) {
        throw new Error(`Background Error: background "${id}" is not defined`);
      }

      const prev = backgroundRoot.children[0];
      const sprite = Sprite.from(config.image);
      backgroundRoot.addChild(sprite);

      sprite.alpha = 0;
      anime({
        targets: sprite,
        alpha: 1,
        easing: "linear",
        duration: 1000,
        complete: () => {
          if (prev) {
            backgroundRoot.removeChild(prev);
          }

          update();
        }
      });
    }
  }
});
