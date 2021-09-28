module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['import','@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended', //@typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/no-use-before-define': 'warn',
        'prettier/prettier': 'warn',
        'block-scoped-var': 'error',
        'eqeqeq': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'eol-last': 'error',
        'no-console': ["error", {allow: ["warn", "error"]}],
        'prefer-arrow-callback': 'error',
        'no-trailing-spaces': 'error',
        'quotes': ['warn', 'single', {avoidEscape: true}],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            },
            {
                selector: 'class',
                format: ['PascalCase'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: [
                    'is',
                    'should',
                    'has',
                    'can',
                    'did',
                    'will',
                    'are',
                    'was',
                ],
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '(^I[A-Z])|(([A-Z]+[a-z]+)+Props)',
                    match: true,
                },
            },
            {
                selector: ['function'],
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'enum',
                format: ['PascalCase'],
            },
            {
                selector: ['enumMember'],
                format: ['UPPER_CASE'],
            },
        ],
        'react/jsx-filename-extension': 'off'
    },
};
