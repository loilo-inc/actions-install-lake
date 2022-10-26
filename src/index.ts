import * as core from "@actions/core";
import * as io from "@actions/io";
import { installLake } from "./install";

async function main() {
  const version = core.getInput("lake-version");
  try {
    if (!(await io.which("lake", false))) {
      await installLake(version);
    }
  } catch (e) {
    core.setFailed(e.message);
  }
}

if (require.main === module) {
  main();
}
