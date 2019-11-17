import { update } from "./events";
import { combine } from "effector";
import { scenario } from "../global/store";
import { systemDomain } from "./domain";

const commandList = scenario.map(store => (store && store.commandList) || []);

const current = systemDomain
  .store(0)
  .reset(commandList.updates)
  .on(update, index => {
    const list = commandList.getState();

    if (index + 1 > list.length) {
      console.error("Engine stopped: There is no command anymore.");
      return;
    }

    return index + 1;
  });

export const currentCommand = combine(
  commandList,
  current,
  (commandList, current) => commandList[current]
);
