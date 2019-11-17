import { CommandBase } from "./commandBase";

interface AddCharacter extends CommandBase {
  type: "character";
  command: "add-character";
  id: string;
  image: string;
}

interface RemoveCharacter extends CommandBase {
  type: "character";
  command: "remove-character";
  id: string;
}

interface ChangeImage extends CommandBase {
  type: "character";
  command: "change-image";
  id: string;
  image: string;
}

export type CharacterCommand = AddCharacter | RemoveCharacter | ChangeImage;
