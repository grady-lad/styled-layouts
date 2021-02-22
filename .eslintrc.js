module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'prefer-const': 'off',
    // needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
    'no-use-before-define': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['src'],
      },
    },
  },
};
