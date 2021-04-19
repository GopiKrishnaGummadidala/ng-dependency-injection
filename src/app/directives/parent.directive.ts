import { Directive, Self } from "@angular/core";
import { LoggerService } from "src/services/logger.service";

@Directive({
  selector: "[appParent]",
})
export class ParentDirective {
  constructor() {}
}
