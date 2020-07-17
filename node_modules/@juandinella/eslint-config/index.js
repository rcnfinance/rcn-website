module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  rules: {
    'semi': 'off',
    'comma-dangle': 'off'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    jquery: true,
  }
}
