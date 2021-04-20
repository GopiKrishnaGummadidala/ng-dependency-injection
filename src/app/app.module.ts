import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Self } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoggerService } from "src/services/logger.service";
import { ParentDirective } from "./directives/parent.directive";
import { ChildDirective } from "./directives/child.directive";
import { APP_CONFIG } from "src/services/config-token";

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
