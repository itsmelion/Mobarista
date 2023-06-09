const react = require('./react');

module.exports = {
  ...react,

  globals: {
    ...react.globals,
    __DEV__: 'readonly',
  },

  settings: {
    ...react.settings,
    'import/resolver': {
      "typescript": {},
      node: {
        paths: ['./', './src', './apps', './libs'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.json',
          '.native.js',
          '.native.ts',
          '.native.jsx',
          '.native.tsx',
          '.native.json',
          '.web.js',
          '.web.ts',
          '.web.jsx',
          '.web.tsx',
          '.web.json',
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.ios.json',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx',
          '.android.json',
        ],
        moduleDirectory: ['node_modules', './src', './apps', './libs'],
      },

      alias: {
        map: [
          ['assets', './assets'],
          ['components', './components'],
          ['app', './'],
          ['src', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
