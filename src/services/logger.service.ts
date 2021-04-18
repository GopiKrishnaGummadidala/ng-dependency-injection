import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  prefix = "root";
  constructor() {}

  logMessage(msg): void {
    console.log(`${this.prefix} ${msg}`);
  }
}
