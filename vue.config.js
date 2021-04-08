const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import '@/assets/styles/variables.scss';
            @import '@/assets/icomoon/variables.scss';
          `,
      },
    },
  },
};
