import { CommandBase } from "./commandBase";

interface RegisterID extends CommandBase {
  type: "system";
  command: "register-id";
}

export type SystemCommand = RegisterID;
