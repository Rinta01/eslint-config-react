module.exports = {
	plugins: [
		'react',
		'simple-import-sort',
		'jsx-a11y'
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended'
	],
	parser: 'babel-eslint',
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			'node': {
				'paths': ['src']
			}
		}
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		// Code quality
		'react/prop-types': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'semi': 'error',
		'react/jsx-no-duplicate-props': 'error',
		'react/jsx-key': ['error', { 'checkFragmentShorthand': true }],
		'react/jsx-handler-names': [2, {
			'eventHandlerPrefix': 'handle',
			'eventHandlerPropPrefix': 'on'
		}],
		'react/no-typos': 'error',
		'no-dupe-else-if': 0,
		'no-import-assign': 0,
		'no-setter-return': 0,

		// Formatting
		'comma-dangle': ['error', 'never'],
		'keyword-spacing': [2, {
			'before': true,
			'after': true
		}],
		'block-spacing': ['error', 'always'],
		'padding-line-between-statements': ['error',
			{ 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
			{ 'blankLine': 'always', 'prev': '*', 'next': 'return' },
			{ 'blankLine': 'always', 'prev': '*', 'next': 'function' },
			{ 'blankLine': 'always', 'prev': 'const', 'next': 'if' },
			{ 'blankLine': 'always', 'prev': 'let', 'next': 'block-like' },
			{ 'blankLine': 'always', 'prev': 'var', 'next': 'block-like' },
			{ 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
			{ 'blankLine': 'always', 'prev': 'function', 'next': 'function' }
		],
		'space-before-blocks': 'error',
		'object-curly-spacing': ['error', 'always'],
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab'],
		'no-trailing-spaces': 'error',
		'simple-import-sort/sort': [
			'error',
			{
				groups: [
					// Packages. `react` related packages come first.
					// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
					['^react', '^redux', '^@?\\w'],
					// Root path for project
					['^#'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$']
				]
			}
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-fragments': [1, 'syntax'],
		'react/jsx-curly-newline': ['error', {
			'multiline': 'require',
			'singleline': 'consistent'
		}],
		'react/jsx-curly-spacing': ['error', { 'when': 'always', 'children': true }],
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-max-depth': [2, { 'max': 10 }],
		'react/jsx-max-props-per-line': [2, { 'maximum': 3 }],
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-closing-tag-location': 'error'
	},
	env: {
		browser: true,
		es6: true,
		node: true
	}
};
