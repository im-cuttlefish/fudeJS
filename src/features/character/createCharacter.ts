import { scenario } from "features/global/store";
import { Character } from "./types";
import { Sprite } from "pixi.js";

export const createCharacter = (id: string, image: string): Character => {
  const { character } = scenario.getState()!.configs;
  const config = character.find(x => x.id === id);

  if (!config) {
    throw new Error(`Character Error: character "${id}" is not defined.`);
  }

  const sprite = Sprite.from(config.images[image]);
  return { config, id, sprite };
};
