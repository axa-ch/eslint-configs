# eslint-config-axa-react

AXA's base ESLint RC, extending [Airbnb's base ESLint config](https://www.npmjs.com/package/eslint-config-airbnb).

# Usage

1. Install from `@axa-ch/eslint-config-axa-react` by:

  ````sh
  npm i --save-dev @axa-ch/eslint-config-axa-react
  ````

2. Install peer dependencies of `@axa-ch/eslint-config-axa-react` and `eslint-config-airbnb`

  It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

  Install the correct versions of each package, which are listed by the command:
  
  ```sh
  npm info "@axa-ch/eslint-config-axa-react@latest" peerDependencies
  npm info "eslint-config-airbnb@latest" peerDependencies
  ```

3. Add `"exetnds": "axa-react"` to your .eslintrc
