// Internal lint, uses self configuration. lol.
const node = require('./src/node');

module.exports = {
  ...node,
  "extends": [...node.extends, "plugin:@nx/react", "../../.eslintrc.js"],
  "ignorePatterns": ["!**/*", "public", ".cache", "node_modules"],
};
