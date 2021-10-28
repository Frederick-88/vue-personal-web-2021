<template lang="pug">
  section#works.home-portofolio__content(data-aos="fade-up" data-aos-duration="1000")
    h4.header-title My Portofolio - Recent Works
    div.portofolio-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
        i.carousel-arrow.icon-chevron-right(@click="showNext")
      VueSlickCarousel.portofolio-carousel(v-bind="settings" ref="carousel")
        div.portofolio__card-lists(v-for="portofolio in PortofolioList")
          div.card-list(
            :style="backgroundImage(portofolio.thumbnail)" 
          )
            div.overlay
            div.content
              h2.title {{portofolio.title}}
              button.button(type="button" @click="showPortofolioModal(portofolio)") See More
</template>

<script>
import PortofolioList from "@/utilities/PortofolioList";
import { mapMutations } from "vuex";

export default {
  name: "HomePortofolio",
  data() {
    return {
      PortofolioList: PortofolioList,
      isShowModal: false,
      activePortofolio: {},
      settings: {
        arrows: false,
        dots: true,
        swipe: false,
        infinite: false,
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
    ...mapMutations(["setIsShowCarouselModal", "setActivePortofolio"]),
    showPortofolioModal(portofolio) {
      this.setIsShowCarouselModal(true);
      this.setActivePortofolio(portofolio);
    },
    backgroundImage(imageLocation) {
      const backgroundImageStyle = {
        backgroundImage: "url(" + imageLocation + ")",
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
      text-align: center;
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
