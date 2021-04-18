import { Injectable } from "@angular/core";

export class LoggerService {
  constructor() {}

  logMessage(msg): void {
    console.log(msg);
  }
}
