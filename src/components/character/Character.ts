import anime from "animejs";
import { Sprite, Container, DisplayObject } from "pixi.js";
import { CharacterConfig } from "types";
import { screenHeight } from "config.json";

interface Point {
  x: number;
  y: number;
}

const fade = (flag: "in" | "out", sprite: DisplayObject, duration = 1000) => {
  sprite.alpha = flag === "in" ? 0 : 1;

  return new Promise(resolve => {
    anime({
      targets: sprite,
      alpha: 1,
      direction: flag === "in" ? "normal" : "reverse",
      duration,
      easing: "linear",
      complete: () => resolve()
    });
  });
};

export class Character {
  public id: string;
  public view: Container;

  constructor(private config: CharacterConfig, image = "default") {
    this.id = config.id;
    this.view = new Container();

    const sprite = Sprite.from(config.images[image]);
    sprite.alpha = 0;
    sprite.anchor.set(0.5, 1);
    sprite.y = screenHeight;

    this.view.addChild(sprite);
  }

  fadeIn = (duration = 1000) => {
    const sprite = this.view.children[0];
    return fade("in", sprite, duration);
  };

  moveTo = (
    { x = this.view.x, y = this.view.y }: Partial<Point>,
    duration = 1000
  ) =>
    new Promise(resolve => {
      anime({
        targets: this.view,
        x,
        y,
        easing: "linear",
        duration,
        complete: () => resolve()
      });
    });

  changeImage = async (image: string) => {
    const prev = this.view.children[0];
    const next = Sprite.from(this.config.images[image]);
    next.anchor.set(0.5, 1);
    next.y = screenHeight;

    const remove = fade("out", prev, 1000);
    const add = fade("in", next, 1000);

    this.view.addChild(next);

    await Promise.all([remove, add]);
    this.view.removeChild(prev);
    return;
  };
}
