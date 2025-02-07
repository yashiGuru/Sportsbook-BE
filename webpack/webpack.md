# Webpack Setup Guide

## 1. Install Webpack and Webpack CLI
To install Webpack along with its command-line interface (CLI), run:
```sh
npm install webpack webpack-cli --save-dev
```

## 2. Create a Webpack Configuration File & Folder
Create a `webpack` directory and inside it, create an `index.js` file.

## 3. Add the following code in `webpack/index.js`
```javascript
const path = require("path");
const fs = require("fs");

// To Exclude Node Modules In Webpack Bundling
const nodeModules = {};
fs.readdirSync("node_modules")
    .filter(function (x) {
        return [".bin"].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = "commonjs " + mod;
    });

module.exports = {
    mode: "production",
    entry: {
        back: ["./src/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname, "../"),
        }
    },
    target: "node",
    externals: [nodeModules, "server"],
    node: {
        __dirname: false,
        __filename: false
    }
};
```

## 4. Add a Watch Script
Modify your `package.json` file to include the following script:
```json
"scripts": {
    "watch": "webpack --mode=development --watch --progress --stats-error-details --config webpack/index.js"
}
```

## 5. Run Webpack
Execute the following command to start watching for changes:
```sh
npm run watch
```

## 6. Optional: Install Loaders and Plugins
Depending on your project needs, you might need additional loaders or plugins. For example, to enable Babel for ES6+ support:
```sh
npm install babel-loader @babel/core @babel/preset-env --save-dev
```

