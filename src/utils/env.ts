import { dirname } from "path";

export const isDev = Deno.env.get("DENO_ENV") == "development";
export const basePath = isDev ? Deno.cwd() : dirname(Deno.execPath());
