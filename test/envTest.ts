import { assert, assertEquals } from "asserts";
import { isDev, basePath } from "../src/utils/env.ts";

Deno.test("is dev env", () => {
  assert(isDev);
});

Deno.test("dev env base path is cwd", () => {
  assertEquals(basePath, Deno.cwd());
});
