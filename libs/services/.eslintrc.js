module.exports = {
  "extends": [
    "plugin:@nx/react",
    "../../.eslintrc.js",
    "lion",
  ],
  "plugins": [
    "@tanstack/query"
  ],
  "ignorePatterns": [
    "!**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx",
        "*.js",
        "*.jsx"
      ],
      "rules": {}
    },
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "rules": {}
    },
    {
      "files": [
        "*.js",
        "*.jsx"
      ],
      "rules": {}
    }
  ]
}
