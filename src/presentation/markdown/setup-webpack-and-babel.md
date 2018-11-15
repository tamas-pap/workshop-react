# Setup Webpack and Babel

### Create a project folder

```
mkdir my-react-project
cd my-react-project
```

### Initialize npm

```
npm init
```

### Create index.html

```
mkdir dist
cd dist
touch index.html
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minimal React Webpack Babel Setup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

### Setup Webpack & Babel

Install webpack

```
npm install --save-dev webpack webpack-dev-server webpack-cli
```

Install babel

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
```

In order to hook it up to Webpack, we have to install a so called loader:

```
npm install --save-dev babel-loader
```


Now, with all node packages in place, you need to adjust your `package.json` and `webpack.config.js` to respect the Babel changes. These changes include all packages you have installed.

`package.json`

```
...
"keywords": [],
"author": "",
"license": "ISC",
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
},
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
},
"devDependencies": {
...
```

`webpack.config.js`

```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

### Create index.js

Install `react` and `react-dom`

```
npm install --save react react-dom
```

```
mkdir src
cd src
touch index.js
```

```js
import React from "react";
import ReactDOM from "react-dom";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(<h1>{title}</h1>, document.getElementById("app"));

```

### Run the app

```
npm start
```
