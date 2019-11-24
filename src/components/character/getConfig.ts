import { scenario } from "features/loader/store";

export const getConfig = (id: string) => {
  const { configs } = scenario.getState()!;
  const config = configs.character.find(x => x.id === id);

  if (!config) {
    throw new Error(`Character Error: "${id}" does not exist.`);
  }

  return config;
};
