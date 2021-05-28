<template lang="pug">
  section#works.mobile-home-portofolio__content
    p.subtitle Recent Works
    h2.title My Portofolio

    div.portofolio-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.portofolio-list-carousel(
        ref="c2"
        v-bind="portofolioCarouselSettings"
        :swipe="false"
      )
        div.company-card-list(v-for="portofolio in portofolioLists")
          div.card-list
            img.card-image(:src='portofolio.thumbnail')
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    VueSlickCarousel.main-carousel(
      ref="c1"
      :slides-to-show="1"
      :arrows="false"
      :style="{ height: carouselHeight }"
      :swipe="false"
    )
      div.main-card-list(
        v-for="(portofolio, index) in portofolioLists"
        :ref="`portofolio-${index}`"
      )
        div.card-list.--left
          img.card-image(:src='portofolio.thumbnail')
          span.info-label View all the images in desktop!
        div.card-list.--right
          h2.card-title {{portofolio.title}}
          p.card-subtitle {{portofolio.description}}
          div.button-list(v-if="portofolio.website || portofolio.npmWebsite")
            div(v-if="portofolio.website")
              a.button(:href="portofolio.website" target="blank") 
                | Visit Website
                i.icon-earth2
                
            div(v-if="portofolio.npmWebsite")
              a.button(
                :href="portofolio.npmWebsite" 
                target="blank"
              ) 
                | Visit NPM Package
                i.icon-earth2
          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in portofolio.skills" :key="index") {{skill}}
</template>

<script>
export default {
  name: "MobileHomePortofolio",
  data() {
    return {
      carouselHeight: "auto",
      activeIndex: 0,
      portofolioCarouselSettings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipe: false,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      portofolioLists: [
        {
          title: "Global CSS Framework",
          description:
            "A CSS Framework & Components Library that is created with Vue.js. Support the usage for Vue.js or Nuxt.js developers. 1 of my best works so far, a system example for agencies that want to have consistent components / UI. Efficient for future changes & a great tool for teamwork culture.",
          thumbnail: require("@/assets/images/works/css-framework1.png"),
          website: "https://global-ui-docs.netlify.app/",
          npmWebsite: "https://www.npmjs.com/package/global-ui",
          skills: [
            "VueJS",
            "Storybook",
            "NPM Package Deployment",
            "Component Documentation System",
            "Component Library System",
            "Animation Loader System",
            "Icomoon",
            "SCSS",
          ],
        },
        {
          title: "Weatherpedia (PWA)",
          description:
            "Weatherpedia provides weather informations in Singapore ( by default ) and show current weather with attractive & different designs, made with PWA development-model ( Progressive Web App ). With this, user can download the web into a mobile app for a very small size of 332 kb. then user also can search other city to seek their weather information at here. Supported by API from https://api.openweathermap.org",
          thumbnail: require("@/assets/images/works/weatherpedia-pwa1.png"),
          website: "https://weatherpedia.netlify.app/",
          skills: [
            "ReactJS",
            "Progressive Web App (PWA)",
            "REST API",
            "Responsive Web App",
          ],
        },
        {
          title: "React E-Commerce",
          description:
            "Full Version of ReactJS & Redux E-Commerce made by Fullstack Development (Frontend, Backend until Deployments), Inspiration based on Best Seller E-Commerce app in theme forest (PickBazar). When user register & data stored to database, CRUD products of admin, and everything that runs here was made by me. Check out this cool E-commerce!",
          thumbnail: require("@/assets/images/works/react-ecommerce1.png"),
          website: "https://s2-boutique.netlify.app/",
          previews: [
            require("@/assets/images/works/react-ecommerce1.png"),
            require("@/assets/images/works/react-ecommerce2.png"),
            require("@/assets/images/works/react-ecommerce3.png"),
            require("@/assets/images/works/react-ecommerce4.png"),
            require("@/assets/images/works/react-ecommerce5.png"),
          ],
          skills: [
            "ReactJS",
            "React Redux",
            "ExpressJS",
            "MongoDB",
            "AWS",
            "Heroku",
            "Cloudflare",
            "REST API",
            "API Creation",
          ],
        },
        {
          title: "SmartLocal Gists Page",
          description:
            "This is 1 of the test from a company based on Singapore. With a github opensource api given (https://api.github.com/gists/public),then creatively display it to users. Here, user can see any topic of github gists, search based on github usernames, favourite gists, look through gists author, etc.",
          thumbnail: require("@/assets/images/works/smartlocal1.png"),
          website: "https://github-gists.netlify.app/",
          skills: [
            "ReactJS",
            "Local Storage",
            "REST API",
            "Font Awesome",
            "React Toastify",
          ],
        },
        {
          title: "Circle Messenger",
          description:
            "A Real-Time messenger app which is a team final project in glints academy bootcamp. Here, users could send image, documents and even show expressions with emoji here!",
          thumbnail: require("@/assets/images/works/circle-messenger1.png"),
          website: null,
          skills: [
            "ReactJS",
            "React Redux",
            "Socket.io",
            "Google Cloud",
            "REST API",
            "ExpressJS",
            "MongoDB",
            "Font Awesome",
          ],
        },
        {
          title: "ChenFrederick.com",
          description:
            "This is my own personal website, at here i try to share with you who i am and what are the things that i'm capable of. Here, you can also access my personal web in phone & any other device too since it's also a responsive web app! Let's get to know each other.",
          thumbnail: require("@/assets/images/works/personal-web.png"),
          website: null,
          skills: [
            "VueJS",
            "Vuex",
            "Vue Slick Carousel",
            "Dark Mode",
            "SCSS",
            "Icomoon",
            "Animation Loader System",
          ],
        },
        {
          title: "AzurDrones by Vue",
          description:
            "A drone company website which made with VueJS. Interactive Gradient & Animated UI with Fantastic Toast Notifications!",
          thumbnail: require("@/assets/images/works/azurdrones1.png"),
          website: "https://azurdrones.netlify.app/",
          skills: [
            "VueJS",
            "Vue Toastification",
            "Vue Owl Carousel",
            "Font Awesome",
          ],
        },
      ],
    };
  },
  methods: {
    checkHeight() {
      const activeTitle = `portofolio-${this.activeIndex}`;
      const height = this.$refs[activeTitle].offsetHeight;

      this.carouselHeight = height + 20 + "px";
    },
    showNext() {
      const maxIndex = this.portofolioLists.length - 1;
      this.$refs.c1.next();
      this.$refs.c2.next();

      if (this.activeIndex === maxIndex) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
      this.checkHeight();
    },
    showPrev() {
      const lastContentIndex = this.portofolioLists.length - 1;
      this.$refs.c1.prev();
      this.$refs.c2.prev();

      if (this.activeIndex === 0) {
        this.activeIndex = lastContentIndex;
      } else {
        this.activeIndex--;
      }
      this.checkHeight();
    },
  },
};
</script>

<style lang="scss">
.mobile-home-portofolio__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 70px 30px 30px;

  @include small-mobile() {
    margin: 70px 15px 30px;
  }

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }

  .title {
    color: var(--text-color-primary);
    font-weight: 700;
    font-size: 1.5rem;
    margin: 4px 0 15px;
    text-align: center;
  }

  .main-carousel {
    margin-top: 15px;
    transition: height 0.3s ease-in-out;
  }

  .main-card-list {
    outline: 0;

    .--left {
      display: flex;
      align-items: center;
      flex-direction: column;

      .card-image {
        border-radius: 6px 6px 0 0;
        width: 95%;
      }

      .info-label {
        display: flex;
        width: 95%;
        align-items: center;
        font-size: 0.8125rem;
        font-weight: 600;
        padding: 8px 12px;
        border-radius: 0 0 6px 6px;
        background: var(--dark-white);
        color: var(--white-dark);

        &::before {
          content: $icon-information-solid;
          font-family: "icomoon";
          font-size: 0.9375rem;
          margin-right: 8px;
        }
      }
    }

    .--right {
      margin: 30px 10px 0; // avoid carousel to conflict each other

      .card-title {
        color: var(--text-color-primary);
        font-size: 1.25rem;
      }

      .card-subtitle {
        text-align: justify;
        line-height: 1.6;
        color: var(--text-grey);
        font-weight: 500;
        font-size: 0.875rem;
        margin: 15px 0 0;
      }

      .button-list {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }

      .button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-right: 10px;
        background: var(--button-solid-background-3);
        color: var(--button-text-3);
        border-radius: 4px;
        font-weight: 600;
        font-size: 0.75rem;
        cursor: pointer;
        outline: 0;
        border: 0;
        text-decoration: none;

        i {
          margin-left: 8px;

          @include small-mobile() {
            display: none;
          }
        }
      }
    }

    .tools-section {
      margin-top: 25px;
      text-align: left;

      .tools-title {
        margin-bottom: 8px;
        color: var(--text-grey);
        font-weight: 500;
        font-size: 0.875rem;
        display: flex;
        align-items: center;

        &::before {
          font-family: "icomoon";
          content: $icon-design;
          font-size: 0.875rem;
          margin-right: 8px;
        }
      }

      .tools-lists {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .tool-text {
        padding: 5px 8px;
        border-radius: 4px;
        margin: 4px;
        font-size: 0.6875rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }
  }

  .portofolio-list-carousel__wrapper {
    display: flex;
    align-items: center;

    .portofolio-list-carousel {
      width: 80%;

      @include small-mobile() {
        width: 84%;
      }
    }

    .icon-wrapper {
      width: 10%;
      display: flex;
      justify-content: center;

      @include small-mobile() {
        width: 8%;
      }

      .carousel-arrow {
        padding: 10px;
        color: var(--button-text);
        background: var(--button-solid-background);
        transition: background 0.2s, color 0.2s;
        border-radius: 4px;
        margin: 10px 0;
        cursor: pointer;

        @include small-mobile() {
          padding: 8px;
          font-size: 0.875rem;
        }
      }
    }
  }

  .company-card-list {
    display: flex !important;
    align-items: center;
    flex-direction: column;
    outline: 0;

    .card-list {
      height: 80px;
      width: 80px;
      margin: 0 5px;

      @include large-mobile() {
        height: 100px;
        width: 100px;
      }
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // rewrite vue slick carousel stylings
  .slick-track {
    transition: transform 0.5s ease-in-out;
  }

  .slick-dots {
    bottom: -40px;

    li,
    li.slick-active {
      button:before {
        color: var(--dark-white);
      }
    }
  }
}
</style>
