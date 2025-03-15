import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "no-var": "error",
      "prettier/prettier": ["warn", { endOfLine: "auto" }],
      "prefer-const": "warn",
    },
  },
  {
    plugins: {
      "react-hooks": eslintReactHooks,
      react: eslintReact,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ["node_modules", "dist"] },
];
