import { CommandBase } from "./commandBase";

interface WriteOn extends CommandBase {
  type: "message";
  command: "write-on";
  id: string;
  content: string;
}

interface Erase extends CommandBase {
  type: "message";
  command: "erase";
  id: string;
}

interface Hide extends CommandBase {
  type: "message";
  command: "hide";
  id: string;
}

export type MessageCommand = WriteOn | Erase | Hide;
