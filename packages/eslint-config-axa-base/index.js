module.exports = {
  extends: 'airbnb-base',

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
    }
  },

  rules: {
    'dot-notation': 'off',
    'max-len': ['warn', 140, 2],
    'no-cond-assign': ['error', 'except-parens'],
    'no-else-return': 'warn',
    'no-use-before-define': ['error', { 'functions': false, 'classes': false }],
    'semi': ['error', 'never'],
    'quote-props': ['error', 'consistent']
  }
}

