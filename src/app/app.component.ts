import { LoggerService } from "./../services/logger.service";
import { Component, Optional, Self, SkipSelf } from "@angular/core";
import { ExperimentalLoggerService } from "src/services/experimental-logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }],
})
export class AppComponent {
  title = "ng-dependency-injection";

  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = "App Component";
      this.logger.logMessage("constructor init");
    }
  }
}
