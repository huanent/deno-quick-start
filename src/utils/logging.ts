import * as log from "log";
import { join } from "path"
import { basePath } from "./env.ts"


log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: join(basePath, "log.txt"),
      formatter: "{levelName} {loggerName} {datetime} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    }
  },
});

export function getLogger(name?: string) {
  return log.getLogger(name);
}