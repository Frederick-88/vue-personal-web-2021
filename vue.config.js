const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Chen Frederick | Website";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import '@/assets/styles/variables.scss';
            @import '@/assets/styles/deviceSizes.scss';
            @import '@/assets/icomoon/variables.scss';
            @import '@/assets/icomoon/variables.scss';
          `,
      },
    },
  },
};
