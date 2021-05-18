const path = require("path");

module.exports = {
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
