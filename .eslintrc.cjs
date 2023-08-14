module.exports = {
	root: true,

	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],

	env: {
		browser: true,
		es2017: true,
		node: true,
	},

	ignorePatterns: ['dist/'],
	plugins: ['@typescript-eslint', 'svelte', 'prettier', 'sort-imports-es6-autofix'],
	parser: '@typescript-eslint/parser',

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},

	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',

			parserOptions: {
				parser: '@typescript-eslint/parser',
			},

			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						argsIgnorePattern: '_',
					},
				],
				'svelte/no-at-html-tags': 'warn',
				'svelte/no-unused-svelte-ignore': 'warn',
				'svelte/sort-attributes': 'error',
			},
		},
	],

	rules: {
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		eqeqeq: 'error',
		'func-names': ['error', 'as-needed'],
		'no-plusplus': 'off',
		'no-shadow': 'off',
		'no-void': 'off',
		'object-curly-newline': ['error', { consistent: true }],
		'object-shorthand': 'error',
		'prefer-template': 'error',
		'prettier/prettier': 'error',
		'sort-imports-es6-autofix/sort-imports-es6': [
			'error',
			{
				ignoreCase: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'svelte/sort-attributes': 'error',
	},
};
