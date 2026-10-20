import { build } from "esbuild";
import { JSDOM } from "jsdom";
import { mkdir } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
const dom = new JSDOM('<!doctype html><div id="root"></div>', {
  url: "http://localhost/",
});
Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  history: dom.window.history,
  location: dom.window.location,
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
globalThis.alert = () => {};
const output = path.resolve("node_modules/.cache/bootcamp-react-checks.mjs");
await mkdir(path.dirname(output), { recursive: true });
await build({
  entryPoints: ["tools/browser-checks.jsx"],
  outfile: output,
  bundle: true,
  platform: "node",
  format: "esm",
  packages: "external",
});
try {
  await import(pathToFileURL(output));
} finally {
  dom.window.close();
}
