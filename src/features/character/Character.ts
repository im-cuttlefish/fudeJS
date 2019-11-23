import anime from "animejs";
import { Sprite, Container } from "pixi.js";
import { CharacterConfig } from "types";

interface Point {
  x: number;
  y: number;
}

export class Character {
  public id: string;
  public view: Container;

  constructor(private config: CharacterConfig, image = "default") {
    const sprite = Sprite.from(config.images[image]);
    this.id = config.id;
    this.view = new Container();
    this.view.alpha = 0;
    this.view.addChild(sprite);
  }

  fadeIn = (duration = 1000) =>
    new Promise(resolve => {
      const { view: container } = this;
      container.alpha = 0;
      anime({
        targets: this.view,
        alpha: 1,
        duration,
        easing: "linear",
        complete: () => resolve()
      });
    });

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
}
