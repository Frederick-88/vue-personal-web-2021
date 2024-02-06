const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Frederick Chen | Website";
      args[0].meta = {
        description:
          "Professional Solution-Driven Fullstack Web Developer Specialised in Front-End Development with Years of Experience. Proficient in Vue & React. Experienced on Building Websites Along The Stages of Web Development Cycle, Meeting Best Practices.",
        keywords:
          "Frederick, frederick, Frederick Chen, frederick chen, Frederick Website, frederick website, Frederick Batam, Frederick Indonesia, Frederick Chen Batam, React, Vue, ReactJS, VueJS, Frontend, Frontend Developer, Web Developer, Fullstack Developer",
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
