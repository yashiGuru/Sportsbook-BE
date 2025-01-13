const path = require("path");
const fs = require("fs");

//To Exclude Node Modules In Webpack Bundling
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
