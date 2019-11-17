import { getScenario } from "services/getScenario";
import { globalDomain } from "./domain";

export const loadScenario = globalDomain.effect("load-scenario", {
  handler: getScenario
});

loadScenario.fail.watch(({ error }) => {
  console.error(`Loading has failed: ${error.message}`);
});
