const { defineConfig, globalIgnores } = require("eslint/config");

const { fixupConfigRules, fixupPluginRules } = require("@eslint/compat");

const parser = require("jsonc-eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const typescriptSortKeys = require("eslint-plugin-typescript-sort-keys");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	{
		files: [
			"webpack/**/*.js",
			"babel.config.js",
			"eslint.config.cjs",
			".prettierrc.js",
			"jest.config.js",
		],
		languageOptions: {
			globals: {
				require: "readonly",
				module: "readonly",
				__dirname: "readonly",
				process: "readonly",
			},
			sourceType: "script",
		},
	},
	{
		extends: fixupConfigRules(
			compat.extends(
				"eslint:recommended",
				"plugin:typescript-sort-keys/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-hooks/recommended",
			),
		),

		languageOptions: {
			parser: tsParser,
		},

		plugins: {
			"@typescript-eslint": typescriptEslint,
			react: fixupPluginRules(react),
			"react-hooks": fixupPluginRules(reactHooks),
			"simple-import-sort": simpleImportSort,
			"typescript-sort-keys": fixupPluginRules(typescriptSortKeys),
		},

		rules: {
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
		},

		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		extends: compat.extends(
			"plugin:@typescript-eslint/recommended",
			"plugin:@typescript-eslint/recommended-requiring-type-checking",
		),

		files: ["**/*.{ts,tsx}"],

		languageOptions: {
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ["./tsconfig.json"],
			},
		},

		rules: {
			"@typescript-eslint/await-thenable": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/no-misused-promises": "off",
		},
	},
	{
		files: ["**/*.json"],

		languageOptions: {
			parser: parser,
		},

		rules: {
			"jsonc/sort-keys": "error",
		},

		extends: compat.extends("plugin:jsonc/recommended-with-json"),
	},
	globalIgnores(["dist"]),
]);
