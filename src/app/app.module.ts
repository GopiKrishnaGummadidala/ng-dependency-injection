import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Self } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoggerService } from "src/services/logger.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.logMessage("constructor init");
    }
  }
}
