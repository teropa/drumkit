import pkg from "./package.json";
import mp3Resolver from "./mp3-resolver-plugin.js";

export default [
  {
    input: "src/main.js",
    plugins: [mp3Resolver()],
    output: {
      name: "drumkit",
      file: pkg.main,
      format: "umd",
      assetFileNames: "assets/[name][extname]",
    },
  },
  {
    input: "src/main.js",
    plugins: [mp3Resolver()],
    output: {
      file: pkg.module,
      format: "es",
      assetFileNames: "assets/[name][extname]",
    },
  },
];
