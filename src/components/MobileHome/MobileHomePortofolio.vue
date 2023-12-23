<template lang="pug">
  section#works.mobile-home-portofolio__content
    p.subtitle Recent Works
    h2.title My Portfolio

    div.portofolio-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.portofolio-list-carousel(
        ref="mobileHomePortofolioCarousel02"
        :as-nav-for="c1"
        v-bind="portofolioCarouselSettings"
      )
        div.company-card-list(v-for="portofolio in PortofolioList")
          div.card-list
            img.card-image(
              :src='portofolio.thumbnail'
            )
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    VueSlickCarousel.main-carousel(
      ref="mobileHomePortofolioCarousel01"
      :as-nav-for="c2"
      :slides-to-show="1"
      :arrows="false"
      :style="{ height: carouselHeight }"
      :swipe="false"
    )
      div.main-card-list(
        v-for="(portofolio, index) in PortofolioList"
        :ref="`portofolio-${index}`"
      )
        div.card-list.--left
          img.card-image(
            :src='portofolio.thumbnail'
          )
          span.info-label View all the images in desktop!
        div.card-list.--right
          h2.card-title {{portofolio.title}}
          p.card-subtitle {{portofolio.description}}
          div.button-list(v-if="portofolio.website || portofolio.npmWebsite || portofolio.github")
            template(v-if="portofolio.website")
              a.button(:href="portofolio.website" target="_blank") 
                | Visit Website
                i.icon-earth2
                
            template(v-if="portofolio.npmWebsite")
              a.button(
                :href="portofolio.npmWebsite" 
                target="_blank"
              ) 
                | Visit NPM Package
                i.icon-earth2
            template(v-if="portofolio.github")
              a.button(
                :href="portofolio.github" 
                target="_blank"
              ) 
                | Visit Github Repository
                i.icon-earth2

          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in portofolio.skills" :key="index") {{skill}}
</template>

<script>
import PortofolioList from "@/utilities/PortofolioList";

export default {
  name: "MobileHomePortofolio",
  data() {
    return {
      PortofolioList: PortofolioList,
      carouselHeight: "auto",
      activeIndex: 0,
      portofolioCarouselSettings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },

      c1: undefined,
      c2: undefined,
    };
  },
  methods: {
    checkHeight() {
      const activeTitle = `portofolio-${this.activeIndex}`;
      const height = this.$refs[activeTitle].offsetHeight;

      this.carouselHeight = height + 20 + "px";
    },
    showNext() {
      this.$refs.mobileHomePortofolioCarousel01.next();

      const maxIndex = this.PortofolioList.length - 1;
      if (this.activeIndex === maxIndex) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }

      this.checkHeight();
    },
    showPrev() {
      this.$refs.mobileHomePortofolioCarousel01.prev();

      const lastContentIndex = this.PortofolioList.length - 1;
      if (this.activeIndex === 0) {
        this.activeIndex = lastContentIndex;
      } else {
        this.activeIndex--;
      }

      this.checkHeight();
    },
  },
  mounted() {
    this.c1 = this.$refs.mobileHomePortofolioCarousel01;
    this.c2 = this.$refs.mobileHomePortofolioCarousel02;

    this.checkHeight(); // ensure receive the ideal height from the first view
  },
};
</script>

<style lang="scss">
.mobile-home-portofolio__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 70px 30px 30px;
  position: relative;
  z-index: 10;

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
          margin-left: 5px;
          font-size: 0.875rem;
          margin-top: -1px;
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
    }

    .icon-wrapper {
      width: 10%;
      display: flex;
      justify-content: center;

      .carousel-arrow {
        padding: 10px;
        color: var(--button-text);
        background: var(--button-solid-background);
        transition: background 0.2s, color 0.2s;
        border-radius: 4px;
        margin: 10px 0;
        cursor: pointer;
      }
    }
  }

  .company-card-list {
    display: flex !important;
    align-items: center;
    flex-direction: column;
    outline: 0;

    .card-list {
      height: 70px;
      width: 80px;
      margin: 0 5px;
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

@include small-mobile() {
  .mobile-home-portofolio__content {
    margin: 50px 15px 30px;

    .main-card-list {
      .--right {
        i {
          display: none;
        }
      }
    }

    .portofolio-list-carousel__wrapper {
      .carousel-arrow {
        padding: 8px;
        font-size: 0.875rem;
      }
    }
  }
}

@include large-mobile() {
  .mobile-home-portofolio__content {
    .company-card-list {
      .card-list {
        height: 80px;
        width: 100px;
      }
    }
  }
}

@include tablet() {
  .mobile-home-portofolio__content {
    max-width: 650px;
    margin: 50px auto;
    width: 90%;

    .title {
      font-size: 1.625rem !important;
    }

    .subtitle {
      font-size: 0.8125rem !important;
    }
  }
}
</style>
