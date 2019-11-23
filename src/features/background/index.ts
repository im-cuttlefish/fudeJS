import anime from "animejs";
import { Container } from "pixi.js";
import { currentCommand } from "features/system/store";
import { update } from "features/system/events";
import { createBackground } from "./createBackground";

export const backgroundRoot = new Container();

const backgroundEvent = currentCommand.updates.filterMap(payload => {
  if (payload.type === "background") return payload;
});

backgroundEvent.watch(payload => {
  switch (payload.command) {
    case "set-background": {
      const { id } = payload;
      const prev = backgroundRoot.children[0];
      const sprite = createBackground(id);
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
