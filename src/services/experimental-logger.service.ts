import { ILogger } from "./ilogger";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExperimentalLoggerService implements ILogger {
  constructor() {}
  prefix = "root";
  logMessage(msg: string): void {
    console.log(`${this.prefix} (experimental): ${msg}`);
  }
}
