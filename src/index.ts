import { Application } from "pixi.js";
import { loadScenario } from "features/loader/events";
import { root } from "components/app";
import { screenWidth, screenHeight } from "./config.json";

const app = new Application({
  backgroundColor: 0x00aaaa,
  width: screenWidth,
  height: screenHeight
});

const { view, stage } = app;

document.getElementById("pixi")!.appendChild(view);
stage.addChild(root);
loadScenario("");
