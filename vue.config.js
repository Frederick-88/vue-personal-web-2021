const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import '@/assets/variables.scss';
          `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        node_modules: path.resolve("node_modules/"),
      },
    },
  },
};
