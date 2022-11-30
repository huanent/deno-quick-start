import { basePath, isDev } from "./utils/env.ts";
import { delay } from "./utils/lang.ts";
import { systemLogger, flushLog } from "./utils/logging.ts"

await delay(100);
systemLogger.info(`Is dev environment: ${isDev}`);
systemLogger.info(`Base path is: ${basePath}`);
flushLog();
Deno.exit();
