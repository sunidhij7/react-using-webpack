const path = require("path");// Read about path module 
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
//   entry: "./src/index.html", // Entry point of your application
  entry: ["./src/script.js", "./src/script-1.js"], // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/, // Match HTML files
        use: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use your HTML file as a template
      filename: "index.html", // Output file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"), // Serve files from this directory
    },
    port: 3000, // Port for the development server
    open: true,  // Open the default web browser when the server starts
  },
};
