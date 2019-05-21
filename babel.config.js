/* eslint-disable filenames/match-exported, import/unambiguous, import/no-commonjs, no-console, no-process-exit, no-process-env */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: true,
        useBuiltIns: 'usage',
        corejs: 'core-js@3',
        targets: {
          node: 'current'
        }
      }
    ]
  ],
  plugins: [
    // Stage 0
    '@babel/plugin-proposal-function-bind',

    // Stage 1
    ['@babel/plugin-proposal-pipeline-operator', {proposal: 'minimal'}],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-optional-chaining',

    '@babel/plugin-proposal-nullish-coalescing-operator',

    '@babel/plugin-proposal-do-expressions',

    // Stage 2
    ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-json-strings'
  ]
};
