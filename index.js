// Entry re-export so OpenCode's plugin loader (which requires a directory with
// a root-level entry file) loads the built plugin from dist/.
export { default } from "./dist/index.js";
