import { CharacterCommand } from "./characterCommand";
import { SystemCommand } from "./systemCommand";
import { BackgroundCommand } from "./backgroundCommand";
import { MessageCommand } from "./messageCommand";

export type Command =
  | CharacterCommand
  | SystemCommand
  | BackgroundCommand
  | MessageCommand;

export interface Scenario {
  environment: Environment;
  commandList: Command[];
  configs: {
    character: CharacterConfig[];
    background: BackgroundConfig[];
    message: MessageConfig[];
  };
}

export interface Environment {
  width: number;
  height: number;
}

export interface CharacterConfig {
  id: string;
  width: number;
  height: number;
  images: {
    default: string;
    [s: string]: string;
  };
}

export interface BackgroundConfig {
  id: string;
  image: string;
}

export interface MessageConfig {
  id: string;
  width: number;
  height: number;
  top: number;
  left: number;
  padding: [number, number, number, number];
  image?: string;
}
