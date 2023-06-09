module.exports = {
  extends: ['../../libs/eslint-config', 'plugin:@nx/react', '../../.eslintrc.js'],
  ignorePatterns: ['!**/*', 'public', '.cache', 'node_modules'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      parserOptions: {
        project: ['apps/mobile/tsconfig.*?.json'],
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
};
