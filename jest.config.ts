import type { Config } from "@jest/types";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jsdom",

	roots: ["<rootDir>/src"],
	modulePaths: ["<rootDir>/src"],
	moduleDirectories: ["node_modules", "<rootDir>/src"],

	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],

	transform: {
		"^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { jsx: "react-jsx" } }],
		"^.+\\.(js|jsx)$": "babel-jest",
	},

	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],

	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths || {}, {
			prefix: "<rootDir>/",
		}),

		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},

	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/**/*.d.ts",
		"!src/index.tsx",
		"!src/reportWebVitals.ts",
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "html"],

	testEnvironmentOptions: {
		url: "http://localhost",
	},

	clearMocks: true,
	restoreMocks: true,

	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/build/",
		"<rootDir>/dist/",
		"<rootDir>/.cache/",
		"<rootDir>/coverage/",
		"<rootDir>/public/",
		"<rootDir>/scripts/",
	],

	watchPlugins: [
		"jest-watch-typeahead/filename",
		"jest-watch-typeahead/testname",
	],
};

export default config;
