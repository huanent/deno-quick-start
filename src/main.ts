import { basePath, isDev } from "./utils/env.ts";
import { delay } from "./utils/lang.ts";

await delay(100);
console.log(`is dev environment: ${isDev}`);
console.log(`Base path is: ${basePath}`);
Deno.exit();
