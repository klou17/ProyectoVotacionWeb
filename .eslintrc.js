// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['expo', 'prettier', 'plugin:@typescript-eslint/recommended-type-checked'],
  plugins: ['unused-imports', 'prefer-arrow', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-console': 'error',
    semi: 'off',
    'no-unused-vars': 'off',
    'no-dupe-class-members': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'ignore',
        props: 'always',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-unistyles',
            message: 'Import from @/src/styles',
          },
        ],
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
      },
    ],
  },
  overrides: [
    {
      files: ['app/**/*.*'],
      rules: {
        'prefer-arrow/prefer-arrow-functions': 'off',
      },
    },
  ],
}