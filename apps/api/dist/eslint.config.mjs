"use strict";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: [
        "dist/**",
        "node_modules/**",
        ],
    },
    {
        files: ["**/*.{ts,js}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
