import { LoggerService } from "./../services/logger.service";
import { Component, Optional, Self, SkipSelf } from "@angular/core";
import { ExperimentalLoggerService } from "src/services/experimental-logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    { provide: LoggerService, useExisting: ExperimentalLoggerService },
  ],
})
export class AppComponent {
  title = "ng-dependency-injection";

  constructor(
    private logger: LoggerService,
    private experimentallogger: ExperimentalLoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = "App Component";
      this.logger.logMessage("constructor init");
      console.log(
        "is same instance: ",
        this.logger === this.experimentallogger
      );
    }
  }
}
