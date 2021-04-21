import { EngageReporterService } from "./engage-reporter.service";
import { BrowserReporterService } from "./browser-reporter.service";
import { REPORTERS } from "./reporter.token";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Self } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoggerService } from "src/services/logger.service";
import { ParentDirective } from "./directives/parent.directive";
import { ChildDirective } from "./directives/child.directive";
import { APP_CONFIG } from "src/services/config-token";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngageReporterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
