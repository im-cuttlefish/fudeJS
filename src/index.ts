import { root } from "components/stage";
import { Application } from "pixi.js";
import { loadScenario } from "features/global/events";

const app = new Application({
  backgroundColor: 0x00aaaa
});

const { view, stage } = app;

document.getElementById("pixi")!.appendChild(view);
stage.addChild(root);
loadScenario("");
