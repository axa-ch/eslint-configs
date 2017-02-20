module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
      jsx: true
    }
  },

  plugins: [
    'react',
  ],

  rules: {
    'dot-notation': 'off',
    'max-len': ['warn', 140, 2],
    'no-cond-assign': ['error', 'except-parens'],
    'no-else-return': 'warn',
    'no-use-before-define': ['error', { 'functions': false, 'classes': false }],
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/prop-types': 'warn',
    'semi': ['error', 'never'],
  }
}
