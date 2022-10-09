import { join, dirname } from "path";

export const isDev = (() => {
  try {
    Deno.statSync(join(Deno.cwd(), "deno.jsonc"));
    return true;
  } catch {
    return false;
  }
})();

export const basePath = (() => {
  if (isDev) return Deno.cwd();
  return dirname(Deno.execPath());
})();
