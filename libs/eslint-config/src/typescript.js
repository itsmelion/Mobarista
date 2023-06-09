const base = require('./base');
const { typescriptGenerics } = require('./rules');

module.exports = {
  ...base,

  extends: [
    ...base.extends,
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  overrides: [{
    // enable the rule specifically for TypeScript files
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',

    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
    },

    extends: [
      ...base.extends,
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:import/typescript',
    ],

    plugins: [
      ...base.plugins,
      '@typescript-eslint',
    ],

    rules: {
      ...base.rules,
      ...typescriptGenerics,
    },
  }],
};
