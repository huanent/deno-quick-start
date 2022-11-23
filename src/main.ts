import { basePath, isDev } from "./utils/env.ts";
import { delay } from "./utils/lang.ts";
import { getLogger } from "./utils/logging.ts"

await delay(100);
const logger = getLogger();
logger.info(`Is dev environment: ${isDev}`);
logger.info(`Base path is: ${basePath}`);
await delay(500);
Deno.exit();
