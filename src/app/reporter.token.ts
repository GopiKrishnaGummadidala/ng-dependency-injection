import { Reporter } from "./reporter";
import { InjectionToken } from "@angular/core";

export const REPORTERS = new InjectionToken<Reporter>("reporters");
