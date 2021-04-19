export interface ILogger {
  prefix: string;
  logMessage: (msg: string) => void;
}
