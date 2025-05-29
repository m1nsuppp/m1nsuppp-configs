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
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["error"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "object-shorthand": ["error", "always"],
      "no-var": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "prefer-const": [
        "error",
        { destructuring: "all", ignoreReadBeforeAssign: false },
      ],
      "no-magic-numbers": [
        "error",
        {
          ignore: [],
          ignoreArrayIndexes: false,
          ignoreDefaultValues: false,
          ignoreClassFieldInitialValues: false,
          enforceConst: false,
          detectObjects: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: false,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: false,
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "multiline-expression", next: "return" },
        { blankLine: "always", prev: "multiline-block-like", next: "return" },
        { blankLine: "always", prev: "block-like", next: "return" },
        { blankLine: "always", prev: "const", next: "return" },
        { blankLine: "always", prev: "let", next: "return" },
        { blankLine: "always", prev: "var", next: "return" },
        { blankLine: "always", prev: "if", next: "return" },
        { blankLine: "always", prev: "for", next: "return" },
        { blankLine: "always", prev: "while", next: "return" },
        { blankLine: "always", prev: "do", next: "return" },
        { blankLine: "always", prev: "switch", next: "return" },
        { blankLine: "always", prev: "try", next: "return" },
      ],
    },
  },
];

export default configs;
