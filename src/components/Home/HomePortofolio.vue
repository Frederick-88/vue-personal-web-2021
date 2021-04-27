<template lang="pug">
  section.home-portofolio__content
    h4.header-title My Portofolio - Recent Works
    div.portofolio-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-arrow-left(@click="showPrev")
        i.carousel-arrow.icon-arrow-right(@click="showNext")
      VueSlickCarousel.portofolio-carousel(v-bind="settings" ref="carousel")
        div.portofolio__card-lists(v-for="portofolio in portofolioList")
          div.card-list(
            :style="backgroundImage(portofolio.location)" 
          )
            div.overlay
            div.content
              h2.title {{portofolio.title}}
              p.subtitle {{portofolio.description}}
              button.button(type="button") See More
</template>

<script>
export default {
  name: "HomePortofolio",
  data() {
    return {
      portofolioList: [
        {
          title: "Weatherpedia (PWA)",
          subtitle: "Weatherpedia Description",
          location: "@/assets/images/works/weatherpedia-pwa.png",
        },
        {
          title: "React E-Commerce",
          subtitle: "React E-Commerce Description",
          location: "@/assets/images/works/react-e-commerce.png",
        },
        {
          title: "Global CSS Framework",
          subtitle: "Description Here",
          location: "@/assets/images/works/css-framework.png",
        },
        {
          title: "Circle Messenger",
          subtitle: "Description Here",
          location: "@/assets/images/works/circle-messenger.png",
        },
        {
          title: "ChenFrederick.com",
          subtitle: "Description Here",
          location: "@/assets/images/works/personal-web.png",
        },
        {
          title: "AzurDrones by Vue",
          subtitle: "Description Here",
          location: "@/assets/images/works/azurdrones.png",
        },
        {
          title: "SmartLocal Gists Page",
          subtitle: "Description Here",
          location: "@/assets/images/works/smartlocal.png",
        },
        {
          title: "Weather Web App",
          subtitle: "Description Here",
          location: "@/assets/images/works/weather-web.png",
        },
      ],
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
    backgroundImage(imageLocation) {
      const backgroundImageStyle = {
        backgroundImage: "url(" + require(imageLocation) + ")",
      };

      return backgroundImageStyle;
    },
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
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
}

.portofolio-carousel__container {
  margin: 20px 0 30px;
  display: flex;

  div.carousel-arrow__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;

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
  }

  .portofolio-carousel {
    width: 90%;
  }

  .card-list {
    position: relative;
    padding: 30px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    display: flex;
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
    }

    .subtitle {
      margin: 8px 0 12px;
    }

    .button {
      padding: 10px;
      color: var(--button-text);
      background: var(--button-solid-background);
      transition: background 0.2s, color 0.2s;
      border-radius: 4px;
      cursor: pointer;
      outline: 0;
      border: 0;

      &:hover {
        background: var(--button-text);
        color: var(--button-solid-background);
      }
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
</style>
