const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
      ecmaVersion: 2021,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
];
