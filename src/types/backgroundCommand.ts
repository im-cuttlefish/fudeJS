import { CommandBase } from "./commandBase";

export interface SetBackground extends CommandBase {
  type: "background";
  command: "set-background";
  id: string;
}

export type BackgroundCommand = SetBackground;
