<template lang="pug">
  section.home-portofolio__content
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
            div.image-wrapper(v-for="num in 4" :key="num")
              img.image(:src="activePortofolio.thumbnail")

        div.column--middle

        div.column.column--right
          h2.title {{activePortofolio.title}}
          p.subtitle {{activePortofolio.description}}
          div(v-if="activePortofolio.website")
            a.button.button--dark(:href="activePortofolio.website" target="blank") 
              | Visit Website
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
          title: "Weatherpedia (PWA)",
          description:
            "Weatherpedia provides weather informations in Singapore ( by default ) with PWA development-model ( Progresive Web App ). With this, user can download the web into a mobile app for a very small size of 332 kb. then user also can search other city to seek their weather information at here.",
          thumbnail: require("@/assets/images/works/weatherpedia-pwa.png"),
          website: "https://weatherpedia.netlify.app/",
        },
        {
          title: "React E-Commerce",
          description:
            "Full Version of ReactJS & Redux E-Commerce made by Fullstack Development (Frontend, Backend until Deployment), Inspiration based on Best Seller E-Commerce app in theme forest (PickBazar). When user register & stored data to database, CRUD products of admin, and everything that runs here was made by me. Check out this cool E-commerce!",
          thumbnail: require("@/assets/images/works/react-e-commerce.png"),
          website: "https://s2-boutique.netlify.app/",
        },
        {
          title: "Global CSS Framework",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet. Sit amet volutpat consequat mauris nunc congue nisi vitae. Malesuada pellentesque elit eget gravida. Viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
          thumbnail: require("@/assets/images/works/css-framework.jpeg"),
          website: "https://global-ui-docs.netlify.app/",
        },
        {
          title: "Circle Messenger",
          description:
            "A Real-Time messenger app which is a team final project in glints academy bootcamp. Here, users could send image, documents and even show expressions with emoji here!",
          leverage:
            "ReactJS ,ReactRedux, Socket.io, Google Cloud, REST API, ExpressJS, MongoDB",
          thumbnail: require("@/assets/images/works/circle-messenger.png"),
          website: null,
        },
        {
          title: "ChenFrederick.com",
          description:
            "This is my own personal website, at here i try to share with you who i am and what are the things that i'm capable of. Here, you can also access my personal web in phone & any other device too since it's also a responsive web app! Let's get to know each other.",
          thumbnail: require("@/assets/images/works/personal-web.png"),
          website: null,
        },
        {
          title: "AzurDrones by Vue",
          description:
            "A drone company website which made with VueJS. Interactive Gradient & Animated UI with Fantastic Toast Notifications!",
          thumbnail: require("@/assets/images/works/azurdrones.png"),
          website: "https://azurdrones.netlify.app/",
        },
        {
          title: "SmartLocal Gists Page",
          description:
            "This is 1 of the test from a company based on Singapore. With the api of github gists given, i responsible to creatively display it to users.",
          thumbnail: require("@/assets/images/works/smartlocal.png"),
          website: "https://github-gists.netlify.app/",
        },
        {
          title: "Weather Web App",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra sit amet. Sit amet volutpat consequat mauris nunc congue nisi vitae. Malesuada pellentesque elit eget gravida. Viverra ipsum nunc aliquet bibendum enim facilisis gravida.",
          thumbnail: require("@/assets/images/works/weather-web.png"),
          website: "http://fz-weatherpedia.netlify.app/",
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
      margin: 15px 0 35px;
      text-align: justify;
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
