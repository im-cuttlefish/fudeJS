import { mock } from "./mock";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getScenario = async (_url: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mock;
};
