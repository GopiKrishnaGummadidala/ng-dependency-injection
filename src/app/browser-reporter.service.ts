import { Reporter } from "./reporter";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BrowserReporterService implements Reporter {
  constructor() {}
  report(): void {
    console.log("BrowserReporter");
  }
}
