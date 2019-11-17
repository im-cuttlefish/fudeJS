import { Sprite } from "pixi.js";
import { CharacterConfig } from "types";

export interface Character {
  id: string;
  config: CharacterConfig;
  sprite: Sprite;
}
