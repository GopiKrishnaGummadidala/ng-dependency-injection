import { ILogger } from "./ilogger";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService implements ILogger {
  prefix = "root";
  constructor() {}

  logMessage(msg): void {
    console.log(`${this.prefix} ${msg}`);
  }
}
