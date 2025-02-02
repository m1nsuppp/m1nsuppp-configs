import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import unicornPlugin from "eslint-plugin-unicorn";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  jsPlugin.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      semi: ["error", "always"],
      eqeqeq: ["error", "smart"],
      curly: ["error"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "object-shorthand": ["error", "always"],
      "no-var": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
    },
  },
];

export default configs;
