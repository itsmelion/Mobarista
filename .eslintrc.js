module.exports = {
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nx"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        // 'no-underscore-dangle': 0,
        "@nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ],
        'import/no-extraneous-dependencies': 0,
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['./src', './apps', './libs'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', './src', './apps', './libs'],
          },
          "typescript": {
            "project": [
              "./tsconfig.base.json",
              "./apps/*/tsconfig.json",
              "./libs/*/tsconfig.json"
            ],
          }
        },
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nx/typescript"],
      "rules": {},
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nx/javascript"],
      "rules": {}
    }
  ]
}
