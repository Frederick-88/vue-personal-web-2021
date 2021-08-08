const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Chen Frederick | Staging-Website";
      args[0].meta = {
        description:
          "A React & Vue Frontend Developer's Personal Website Who Has Extensive Capability on Fullstack Development, Web Performance & Scalability.",
        keywords:
          "Frederick, frederick, Chen Frederick, chen frederick, Frederick Website, frederick website, Frederick Batam, Frederick Indonesia, Chen Frederick Batam, React, Vue, ReactJS, VueJS, Frontend, Frontend Developer, Web Developer, Fullstack Developer",
      };
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
