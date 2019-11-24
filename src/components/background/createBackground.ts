import { scenario } from "features/loader/store";
import { Sprite } from "pixi.js";

export const createBackground = (id: string) => {
  const { background } = scenario.getState()!.configs;
  const config = background.find(x => x.id === id);

  if (!config) {
    throw new Error(`Background Error: background "${id}" is not defined`);
  }

  return Sprite.from(config.image);
};
