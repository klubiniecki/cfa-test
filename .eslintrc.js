module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
  },
  overrides: [{
    files: ['cypress/**/*'],
    plugins: ['cypress'],
    env: {
      'cypress/globals': true,
    },
    rules: {
      'import/no-extraneous-dependencies': 0,
    },
  }],
};
