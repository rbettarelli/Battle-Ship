const path = require("path");

module.exports = {
    module: {
        rules: [
          {
            test: /\.jsx?$/,
           
          
          },
        ]
    },
    
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
