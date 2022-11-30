import * as log from "log";
import { join } from "path"
import { ensureDirSync } from "fs"
import { basePath } from "./env.ts"

const logDir = join(basePath, "logs");
const logPath = join(logDir, "log.txt");
ensureDirSync(logDir)

const fileHandler = new log.handlers.RotatingFileHandler("INFO", {
  filename: logPath,
  formatter: "{levelName} {loggerName} {datetime} {msg}",
  maxBytes: 1024 * 1024 * 1,
  maxBackupCount: 100
})

log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    file: fileHandler
  },
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
    system: {
      level: "INFO",
      handlers: ["console", "file"],
    }
  },
});

export const getLogger = log.getLogger
export const flushLog = () => fileHandler.flush()
export const systemLogger = getLogger("system")