# Setup your code editor

You can use your preferred code editor, however we highly recommend installing and using `VSCode`.

### Install VSCode

You can download and install `VSCode` from [https://code.visualstudio.com](https://code.visualstudio.com).

### Install VSCode extensions

Make sure to install the following `VSCode` extensions:

- ESLint
- Prettier

We also recommend the following extensions:

- Debugger for Chrome
- vscode-styled-components
- Open Recent Files
- Local Files

### Setup ESlint

We will use the most strict `eslint` configuration available from `airbnb`.

Make sure to install the following `dev-dependencies`:

```json
"devDependencies": {
  "eslint-config-airbnb": "^17.1.0",
  "eslint-plugin-import": "^2.14.0",
  "eslint-plugin-jsx-a11y": "^6.1.1",
  "eslint-plugin-react": "^7.11.0"
}
```

It's time to setup our `eslint` configuration in `package.json`:

```json
"eslintConfig": {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "rules": {
  }
},
```

Finally let's add a new script to `package.json` for running `eslint` for our whole codebase:

```json
"scripts": {
  "lint": "eslint ."
}
```

### Setup prettier

Prettier will help us to automatically format our code. Let's add our `prettier` configuration to `package.json`.

```json
"prettier": {
  "printWidth": 120,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "requirePragma": false,
  "proseWrap": "preserve"
},
```
