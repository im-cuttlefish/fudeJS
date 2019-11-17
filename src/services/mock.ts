import body from "assets/taro/body.png";
import smile from "assets/taro/body.copy.png";
import school from "assets/school/school.jpg";
import blue from "assets/message/message.png";
import {
  Command,
  CharacterConfig,
  Scenario,
  Environment,
  BackgroundConfig,
  MessageConfig
} from "types";

const environment: Environment = {
  width: 1000,
  height: 600
};

const commandList: Command[] = [
  {
    type: "character",
    command: "add-character",
    id: "taro",
    image: "default"
  },
  {
    type: "background",
    command: "set-background",
    id: "school"
  },
  {
    type: "character",
    command: "add-character",
    id: "hanako",
    image: "default"
  },
  {
    type: "character",
    command: "change-image",
    id: "hanako",
    image: "smile"
  },
  {
    type: "character",
    command: "remove-character",
    id: "taro"
  }
];

const character: CharacterConfig[] = [
  {
    id: "taro",
    width: 313,
    height: 510,
    images: { default: body, smile }
  },
  {
    id: "hanako",
    width: 313,
    height: 510,
    images: { default: body, smile }
  }
];

const background: BackgroundConfig[] = [
  {
    id: "school",
    image: school
  }
];

const message: MessageConfig[] = [
  {
    id: "speech",
    width: 800,
    height: 220,
    top: 100,
    left: 100,
    image: blue,
    padding: [10, 10, 10, 10]
  }
];

export const mock: Scenario = {
  environment,
  commandList,
  configs: { character, background, message }
};
