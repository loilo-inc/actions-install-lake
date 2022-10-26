import * as tc from "@actions/tool-cache";
import * as core from "@actions/core";

export async function installLake(version: string) {
  console.log("Installing lake...");
  const url = `https://loilo-public.s3-us-west-2.amazonaws.com/oss/ladylake/${version}/ladylake_linux_amd64.zip`;
  const zip = await tc.downloadTool(url);
  const extracted = await tc.extractZip(zip);
  const installed = await tc.cacheDir(extracted, "lake", version);
  core.addPath(installed);
  const { PATH } = process.env;
  process.env["PATH"] = `${PATH}:${installed}`;
  console.log(`lake has been installed at ${installed}/lake`);
}
