import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(), //we can configure autoprefixer later if it will be necessary
    copy({
      //in case someone needs variables and fonts
      targets: [
        {
          src: "src/variables.scss",
          dest: "build/styles",
          rename: "variables.scss",
        },
        {
          src: "src/typography.scss",
          dest: "build/styles",
          rename: "typography.scss",
        },
      ],
    }),
  ],
};
