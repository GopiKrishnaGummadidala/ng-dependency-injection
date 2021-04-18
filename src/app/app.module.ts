import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Self } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoggerService } from "src/services/logger.service";
import { ParentDirective } from "./directives/parent.directive";
import { ChildDirective } from "./directives/child.directive";

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
