import { Container } from "pixi.js";
import { backgroundRoot } from "components/background";
import { characterRoot } from "components/character";

const root = new Container();

root.addChild(backgroundRoot);
root.addChild(characterRoot);

export { root };
