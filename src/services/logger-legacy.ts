import { ILogger } from "./ilogger";

export const legacyLogger: ILogger = {
  prefix: "legacy root",
  logMessage(msg: string): void {
    console.log(`${this.prefix} (legacy): ${msg}`);
  },
};
