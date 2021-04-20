import { ILogger } from "./ilogger";
import { Inject, Injectable, Optional } from "@angular/core";
import { AppConfig, APP_CONFIG } from "./config-token";

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
