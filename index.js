module.exports = {
  extends: [
    'axa-base',
    'airbnb',
  ],

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
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/prop-types': 'warn',
  }
}
