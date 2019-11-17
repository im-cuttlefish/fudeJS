export interface CommandBase {
  type: "system" | "form" | "character" | "background" | "message" | "sound";
  command: string;
  [key: string]: unknown;
}
