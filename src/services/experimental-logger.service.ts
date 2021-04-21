import { REPORTERS } from "./../app/reporter.token";
import { ILogger } from "./ilogger";
import { Inject, Injectable, Optional } from "@angular/core";
import { AppConfig, APP_CONFIG } from "./config-token";
import { HttpClient } from "@angular/common/http";
import { Reporter } from "src/app/reporter";

@Injectable({
  providedIn: "root",
})
export class ExperimentalLoggerService implements ILogger {
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}
  prefix = "root";
  logMessage(msg: string): void {
    this.reporters.forEach((r) => r.report());
    console.log(`${this.prefix} (experimental): ${msg}`);
  }
}
