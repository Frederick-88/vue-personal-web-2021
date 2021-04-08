module.rules = {
  test: /\.pug$/,
  loader: "pug-plain-loader",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      node_modules: path.resolve("node_modules/"),
    },
  },
};
