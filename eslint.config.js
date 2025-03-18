import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default ts.config(
	globalIgnores(['.svelte-kit/', 'build/', '*.config.js', '*.config.ts', 'src/service-worker.ts']),
	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	...svelte.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: import.meta.dirname,
			},
		},

		plugins: {
			'simple-import-sort': simpleImportSort,
			import: importPlugin,
		},

		rules: {
			// ESLint rules
			eqeqeq: 'error',
			'func-names': ['error', 'as-needed'],
			'no-shadow': 'off',
			'no-void': 'off',
			'object-shorthand': 'error',
			'prefer-template': 'error',

			// Typescript rules
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-deprecated': 'warn',
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowInterfaces: 'with-single-extends',
				},
			],
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/prefer-promise-reject-errors': 'off',
			'@typescript-eslint/unbound-method': 'off',

			// Import rules
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': ['error', { groups: [] }],
		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/+{layout,page}{[.server],}.ts'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},

		rules: {
			'@typescript-eslint/no-unsafe-call': 'off', // TODO: When typing information for SvelteKit is correct, remove this rule
			'svelte/sort-attributes': [
				'error',
				{
					order: [
						'this',
						{
							match: ['/.*/u'],
							sort: 'alphabetical',
						},
					],
				},
			],
		},
	},
);
