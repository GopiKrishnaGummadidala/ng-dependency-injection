import { LoggerService } from "./../services/logger.service";
import { Component, Optional, Self } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [LoggerService],
})
export class AppComponent {
  title = "ng-dependency-injection";

  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.logMessage("constructor init");
    }
  }
}
