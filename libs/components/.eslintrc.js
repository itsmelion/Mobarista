module.exports = {
  "extends": ["plugin:@nx/react", "../../.eslintrc.js", "lion/react-native"],
  "ignorePatterns": ["!**/*", "public", ".cache", "node_modules"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {}
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
