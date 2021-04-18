import { Directive, Self } from "@angular/core";
import { LoggerService } from "src/services/logger.service";

@Directive({
  selector: "[appParent]",
  providers: [LoggerService],
})
export class ParentDirective {
  constructor(@Self() private logger: LoggerService) {
    if (this.logger) {
      this.logger.prefix = "Parent Directive";
    }
  }
}
