const base = require('./base');
const { react } = require('./rules');
const typescript = require('./typescript');

module.exports = {
  ...base,

  extends: [
    ...base.extends,
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/whitespace',
    'airbnb/hooks',
  ],

  plugins: [...base.plugins, 'jsx-a11y', 'react', 'react-hooks'],

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  settings: {

    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },

  rules: {
    ...base.rules,
    ...react,
  },

  overrides: [
    {
      ...typescript.overrides[0],

      extends: [
        ...typescript.overrides[0].extends,
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb/whitespace',
        'airbnb/hooks',
      ],

      plugins: [
        ...typescript.overrides[0].plugins,
        '@typescript-eslint',
        'jsx-a11y', 'react', 'react-hooks',
      ],

      rules: {
        ...typescript.overrides[0].rules,
        ...react,
      },
    },
  ],
};
