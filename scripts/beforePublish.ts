import { basePath } from "../src/utils/env.ts";
import { copySync, emptyDirSync } from "fs";
import { join } from "path";

const distPath = join(basePath, "dist");
emptyDirSync(distPath);
// const dataPath = join(basePath, "data");
// copySync(dataPath, join(basePath, "dist", "data"));