import { config } from "dotenv";
import { dirname } from "path";

await config({ export: true });

export const isDev = Deno.env.get("DENO_ENV") == "development";
export const basePath = isDev ? Deno.cwd() : dirname(Deno.execPath());
