import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor() {}

  logMessage(msg): void {
    console.log(msg);
  }
}
