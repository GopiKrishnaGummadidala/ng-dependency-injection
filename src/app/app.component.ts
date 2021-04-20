import { APP_CONFIG } from "./../services/config-token";
import { LoggerService } from "./../services/logger.service";
import {
  Component,
  Inject,
  Injector,
  Optional,
  Self,
  SkipSelf,
} from "@angular/core";
import { ExperimentalLoggerService } from "src/services/experimental-logger.service";
import { legacyLogger } from "src/services/logger-legacy";
import { AppConfig } from "src/services/config-token";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    {
      provide: LoggerService,
      useFactory: (injector: Injector) => {
        return injector.get(APP_CONFIG).experimentalEnabled
          ? injector.get(ExperimentalLoggerService)
          : injector.get(LoggerService);
      },
      deps: [Injector],
    },
  ],
})
export class AppComponent {
  title = "ng-dependency-injection";

  constructor(
    private logger: LoggerService,
    private experimentallogger: ExperimentalLoggerService,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    if (this.logger) {
      console.log("app config", this.appConfig);
      this.logger.prefix = "App Component";
      this.logger.logMessage("constructor init");
      console.log(
        "is same instance: ",
        this.logger === this.experimentallogger
      );
    }
  }
}
