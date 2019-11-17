import { loadScenario } from "./events";
import { LoadingState } from "./types";
import { Scenario } from "types";
import { globalDomain } from "./domain";

export const scenario = globalDomain
  .store<Scenario | null>(null)
  .on(loadScenario.done, (_, { result }) => result)
  .on(loadScenario.fail, () => null);

export const loading = globalDomain
  .store<LoadingState>("loading")
  .on(loadScenario.done, () => "succeed")
  .on(loadScenario.fail, () => "failed")
  .reset(loadScenario.pending);
