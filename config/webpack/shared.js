// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const webpack = require("webpack");
const { basename, dirname, join, relative, resolve } = require("path");
const { sync } = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const extname = require("path-complete-extname");
const { env, settings, output, loadersDir } = require("./configuration.js");
const yamlConfig = require("node-yaml-config");

const extensionGlob = `**/*{${settings.extensions.join(",")}}*`;
const entryPath = join(settings.source_path, settings.source_entry_path);
const packPaths = sync(join(entryPath, extensionGlob));

const envConfig = yamlConfig.load("./config/application.yml");

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = envConfig.JWT_SECRET;
}

// const entries = packPaths.reduce(
//     (map, entry) => {
//       const localMap = map
//       const namespace = relative(join(entryPath), dirname(entry))
//       localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry)
//       return localMap
//     }, {}
//   )

module.exports = {
  entry: {
    application: [
      "react-hot-loader/patch",
      "./app/javascript/packs/application.js",
    ],
  },

  output: {
    filename: "[name].js",
    path: output.path,
    publicPath: output.publicPath,
  },

  module: {
    rules: sync(join(loadersDir, "*.js")).map(loader => require(loader)),
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin(env.NODE_ENV === "production" ? "[name]-[hash].css" : "[name].css"),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true,
    }),
  ],

  resolve: {
    extensions: settings.extensions,
    modules: [
      resolve(settings.source_path),
      "node_modules",
    ],
  },

  resolveLoader: {
    modules: ["node_modules"],
  },
};
