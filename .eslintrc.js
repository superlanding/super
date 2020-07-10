module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    worker: true,
    browser: true,
    node: true
  },
  globals: {
    process: 'readonly'
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'prefer-template': 'warn'
  }
}
