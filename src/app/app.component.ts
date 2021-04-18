import { LoggerService } from "./../services/logger.service";
import { Component, Optional, Self, SkipSelf } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [LoggerService],
})
export class AppComponent {
  title = "ng-dependency-injection";

  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = "App Component";
      this.logger.logMessage("constructor init");
    }
    if (this.parentLogger) {
      this.logger.logMessage("constructor init");
    }
  }
}
