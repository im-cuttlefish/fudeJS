import { Container } from "pixi.js";
import { characterRoot } from "features/character";

const root = new Container();

root.addChild(characterRoot);

export { root };
