<template lang="pug">
  section#works.home-portofolio__content(data-aos="fade-up" data-aos-duration="1000")
    h4.header-title My Portofolio - Recent Works
    div.portofolio-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
        i.carousel-arrow.icon-chevron-right(@click="showNext")
      VueSlickCarousel.portofolio-carousel(v-bind="settings" ref="carousel")
        div.portofolio__card-lists(v-for="portofolio in portofolioList")
          div.card-list(
            :style="backgroundImage(portofolio.thumbnail)" 
          )
            div.overlay
            div.content
              h2.title {{portofolio.title}}
              button.button(type="button" @click="showPortofolioModal(portofolio)") See More

    GlobalBaseDialog.home-portofolio__modal(
      v-if="isShowModal"
      :is-show="isShowModal"
      :is-primary="true"
      @close="isShowModal = false"
    )
      div.row
        div.column.column--left
          div.carousel-arrow__buttons.extra-margin-right
            i.carousel-arrow.icon-chevron-up(@click="showPrev('vertical-carousel')")
            i.carousel-arrow.icon-chevron-down(@click="showNext('vertical-carousel')")
          VueSlickCarousel.modal__carousel(
            v-bind="verticalSettings" 
            ref="verticalCarousel"
          )
            div.image-wrapper(v-for="(preview, index) in activePortofolio.previews" :key="index")
              img.image(:src="preview")

        div.column--middle

        div.column.column--right
          h2.title {{activePortofolio.title}}
          p.subtitle {{activePortofolio.description}}
          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in activePortofolio.skills" :key="index") {{skill}}
          div(v-if="activePortofolio.website")
            a.button.button--dark(:href="activePortofolio.website" target="blank") 
              | Visit Website
              i.icon-earth2
              
          div(v-if="activePortofolio.npmWebsite")
            a.button.button--dark(
              :href="activePortofolio.npmWebsite" 
              target="blank"
            ) 
              | Visit NPM Package
              i.icon-earth2
</template>

<script>
import GlobalBaseDialog from "@/utilities/GlobalBaseDialog/GlobalBaseDialog.vue";

export default {
  name: "HomePortofolio",
  components: {
    GlobalBaseDialog,
  },
  data() {
    return {
      isShowModal: false,
      activePortofolio: {},
      portofolioList: [
        {
          title: "SmartLocal Gists Page",
          description:
            "This is 1 of the test from a company based on Singapore. With a github opensource api given (https://api.github.com/gists/public),then creatively display it to users. Here, user can see any topic of github gists, search based on github usernames, favourite gists, look through gists author, etc.",
          thumbnail: require("@/assets/images/works/smartlocal1.png"),
          website: "https://github-gists.netlify.app/",
          previews: [
            require("@/assets/images/works/smartlocal1.png"),
            require("@/assets/images/works/smartlocal2.png"),
            require("@/assets/images/works/smartlocal3.png"),
            require("@/assets/images/works/smartlocal4.png"),
          ],
          skills: [
            "ReactJS",
            "Local Storage",
            "REST API",
            "Font Awesome",
            "React Toastify",
          ],
        },
        {
          title: "Weatherpedia (PWA)",
          description:
            "Weatherpedia provides weather informations in Singapore ( by default ) and show current weather with attractive & different designs, made with PWA development-model ( Progressive Web App ). With this, user can download the web into a mobile app for a very small size of 332 kb. then user also can search other city to seek their weather information at here. Supported by API from https://api.openweathermap.org",
          thumbnail: require("@/assets/images/works/weatherpedia-pwa1.png"),
          website: "https://weatherpedia.netlify.app/",
          previews: [
            require("@/assets/images/works/weatherpedia-pwa1.png"),
            require("@/assets/images/works/weatherpedia-pwa2.png"),
          ],
          skills: [
            "ReactJS",
            "Progressive Web App (PWA)",
            "REST API",
            "Responsive Web App",
          ],
        },
        // {
        //   title: "React E-Commerce",
        //   description:
        //     "Full Version of ReactJS & Redux E-Commerce made by Fullstack Development (Frontend, Backend until Deployment), Inspiration based on Best Seller E-Commerce app in theme forest (PickBazar). When user register & stored data to database, CRUD products of admin, and everything that runs here was made by me. Check out this cool E-commerce!",
        //   thumbnail: require("@/assets/images/works/react-ecommerce1.png"),
        //   website: "https://s2-boutique.netlify.app/",
        //   previews: [
        //     require("@/assets/images/works/react-ecommerce1.png"),
        //     require("@/assets/images/works/react-ecommerce2.png"),
        //   ],
        //   skills: [

        //    ]
        // },
        {
          title: "Global CSS Framework",
          description:
            "A CSS Framework & Components Library that is created with Vue.js. Support the usage for Vue.js or Nuxt.js developers. 1 of my best works so far, a system example for agencies that want to have consistent components / UI. Efficient for future changes & a great tool for teamwork culture.",
          thumbnail: require("@/assets/images/works/css-framework1.png"),
          website: "https://global-ui-docs.netlify.app/",
          npmWebsite: "https://www.npmjs.com/package/global-ui",
          previews: [
            require("@/assets/images/works/css-framework1.png"),
            require("@/assets/images/works/css-framework2.png"),
            require("@/assets/images/works/css-framework3.png"),
            require("@/assets/images/works/css-framework4.png"),
          ],
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
          title: "Circle Messenger",
          description:
            "A Real-Time messenger app which is a team final project in glints academy bootcamp. Here, users could send image, documents and even show expressions with emoji here!",
          thumbnail: require("@/assets/images/works/circle-messenger1.png"),
          website: null,
          previews: [
            require("@/assets/images/works/circle-messenger1.png"),
            require("@/assets/images/works/circle-messenger2.png"),
          ],
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
          previews: [
            require("@/assets/images/works/personal-web.png"),
            require("@/assets/images/works/personal-web-2.png"),
          ],
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
          previews: [
            require("@/assets/images/works/azurdrones1.png"),
            require("@/assets/images/works/azurdrones2.png"),
          ],
          skills: [
            "VueJS",
            "Vue Toastification",
            "Vue Owl Carousel",
            "Font Awesome",
          ],
        },
      ],
      verticalSettings: {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      },
    };
  },
  methods: {
    showPortofolioModal(portofolio) {
      this.isShowModal = true;
      this.activePortofolio = portofolio;
    },
    backgroundImage(imageLocation) {
      const backgroundImageStyle = {
        backgroundImage: "url(" + imageLocation + ")",
      };

      return backgroundImageStyle;
    },
    showNext(target) {
      if (target === "vertical-carousel") {
        this.$refs.verticalCarousel.next();
      } else {
        this.$refs.carousel.next();
      }
    },
    showPrev(target) {
      if (target === "vertical-carousel") {
        this.$refs.verticalCarousel.prev();
      } else {
        this.$refs.carousel.prev();
      }
    },
  },
};
</script>

<style lang="scss">
.home-portofolio__content {
  margin: 50px 100px 0;
  position: relative;
  z-index: 6;

  .header-title {
    text-align: end;
    font-weight: 500;
    color: var(--text-color-primary);
    margin-right: 30px;
    font-size: 0.875rem;
    text-transform: uppercase;
  }

  .carousel-arrow__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;

    &.extra-margin-right {
      margin-right: 5px;
    }
  }

  .carousel-arrow {
    padding: 10px;
    color: var(--button-text);
    background: var(--button-solid-background);
    transition: background 0.2s, color 0.2s;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;

    &:hover {
      background: var(--button-text);
      color: var(--button-solid-background);
    }
  }

  .button {
    padding: 10px;
    color: var(--button-text-2);
    background: var(--button-solid-background-2);
    transition: background 0.2s, color 0.2s;
    border-radius: 4px;
    cursor: pointer;
    outline: 0;
    border: 0;

    &.button--dark {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: var(--button-solid-background-3);
      color: var(--button-text-3);
      font-weight: 600;
      font-size: 0.875rem;
      padding: 12px;
      margin: 5px 0;
      width: 50%;
      text-decoration: none;

      &:hover {
        background: var(--button-text-3);
        color: var(--button-solid-background-3);
      }
    }

    &:hover {
      color: var(--button-solid-background-2);
      background: var(--button-text-2);
    }
  }
}

.portofolio-carousel__container {
  margin: 20px 0 30px;
  display: flex;

  .portofolio-carousel {
    width: 90%;
  }
  .portofolio__card-lists {
    border: 0;
    outline: 0;
  }

  .card-list {
    position: relative;
    padding: 30px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;
    height: 150px;
    width: 95%;

    &:hover {
      .overlay,
      .content {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: rgba($black, 0.65);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .content {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      z-index: 6;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      transform: translateY(25px);
      color: $white;
      font-size: 0.825rem;
    }

    .title {
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 12px;
    }
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

.home-portofolio__modal {
  .row {
    display: flex;
  }

  .column {
    &.column--left {
      display: flex;
      margin: auto 0;
      width: 60%;
      padding: 80px 30px 60px 50px;
    }

    &.column--right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40%;
      padding: 80px 50px 60px 30px;
      min-height: 465px;

      .icon-earth2 {
        margin-left: 8px;
        font-size: 1.25rem;
      }
    }

    .image-wrapper {
      outline: 0;
      border: 0;
    }

    .image {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    .subtitle {
      margin: 15px 0 25px;
      text-align: justify;
      color: $grey2;
    }

    .tools-section {
      margin-bottom: 35px;
      text-align: left;

      .tools-title {
        margin-bottom: 8px;

        &::before {
          font-family: "icomoon";
          content: $icon-design;
          font-size: 1rem;
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
        font-size: 0.75rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }
  }

  .column--middle {
    border-right: 1px solid $disabledGrey;
  }

  .modal__carousel {
    width: 90%;

    .slick-dots {
      bottom: -35px;
    }
  }
}
</style>
