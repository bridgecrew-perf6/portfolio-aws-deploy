const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  outout: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
};
