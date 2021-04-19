import { LoggerService } from "./../../services/logger.service";
import { Directive, Host, Optional } from "@angular/core";

@Directive({
  selector: "[appChild]",
})
export class ChildDirective {
  constructor(private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = "Child Directive";
      this.logger.logMessage("constructor init");
    }
  }
}
