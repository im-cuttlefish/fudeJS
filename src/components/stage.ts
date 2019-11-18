import { Container } from "pixi.js";
import { backgroundRoot } from "features/background";
import { characterRoot } from "features/character";

const root = new Container();

root.addChild(backgroundRoot);
root.addChild(characterRoot);

export { root };
