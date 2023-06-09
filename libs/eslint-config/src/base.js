const {
  generic, promises, imports, whitespace,
} = require('./rules');

exports.reportUnusedDisableDirectives = true;

exports.extends = [
  'eslint:recommended',
  'airbnb-base',
  'airbnb-base/whitespace',
];

exports.plugins = ['promise', 'import'];

exports.settings = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"]
  },
  'import/resolver': {
    node: {
      paths: ['./src', './apps', './libs'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['node_modules', './src', './apps', './libs'],
    },
    "typescript": {
      "project": [
        "tsconfig.base.json",
        "apps/*/tsconfig.json",
        "libs/*/tsconfig.json"
      ],
    }
  },
};

exports.rules = {
  ...whitespace,
  ...generic,
  ...promises,
  ...imports,
};

exports.env = {
  node: true,
  commonjs: true,
  browser: true,
  es2021: true,
};
