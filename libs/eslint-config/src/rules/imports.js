exports.imports = {
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/order': [
    'warn',
    {
      'newlines-between': 'always-and-inside-groups',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        'builtin',
        'external',
        ['internal', 'type'],
        ['parent', 'sibling', 'index'],
        'object',
      ],
      pathGroups: [
        {
          pattern: 'services**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'components**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: 'types**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '@**/services**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@**/components**',
          group: 'internal',
          position: 'after',
        },
        {
          pattern: '@**/types**',
          group: 'internal',
          position: 'after',
        },
      ],
    },
  ],

  // Favor named exports
  'import/no-default-export': 1,
  'import/prefer-default-export': 'off',

  'import/no-extraneous-dependencies': [
    'warn',
    {
      peerDependencies: true,
      bundledDependencies: true,
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.stories.js',
        '**/*.stories.jsx',
        '**/*.stories.tsx',
        '**/*.stories.ts',
      ],

      packageDir: [
        './',
        './libs',
        // __dirname,
        // path.join(process.cwd(), __dirname),
        // path.join(process.cwd(), __dirname, 'packages'),
      ],
    },
  ],
};
