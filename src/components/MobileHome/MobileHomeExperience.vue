<template lang="pug">
  section#experience.mobile-home-experience__content
    p.subtitle Wonderful Journey
    h2.title My Experience

    div.company-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.company-list-carousel(
        ref="mobileHomeExperienceCarousel02"
        :as-nav-for="c1"
        v-bind="experienceCarouselSettings"
      )
        div.company-card-list(v-for="experience in ExperienceList")
          div.card-list
            img.card-image(
              :src='experience.logo'
            )
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    VueSlickCarousel.main-carousel(
      ref="mobileHomeExperienceCarousel01"
      :as-nav-for="c2"
      :slides-to-scroll="1",
      :arrows="false"
      :style="{ height: carouselHeight }"
      :infinite="true"
      :swipe="false"
      lazyLoad="ondemand"
    )
      div.main-card-list(
        v-for="(experience, index) in ExperienceList" 
        :ref="`experience-${index}`"
      )
        div.card-list.--left
          img.card-image(
            :src='experience.logo'
          )
        div.card-list.--right
          h2.card-title {{experience.title}}
          p.card-subtitle {{experience.description}}
          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in experience.skills" :key="index") {{skill}}
</template>

<script>
import ExperienceList from "@/utilities/ExperienceList";

export default {
  name: "HomeExperience",
  data() {
    return {
      ExperienceList: ExperienceList,
      carouselHeight: "auto",
      activeIndex: 0,
      c1: undefined,
      c2: undefined,

      experienceCarouselSettings: {
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
  methods: {
    checkHeight() {
      const activeTitle = `experience-${this.activeIndex}`;
      const height = this.$refs[activeTitle].offsetHeight;

      this.carouselHeight = height + "px";
    },
    showNext() {
      this.$refs.mobileHomeExperienceCarousel01.next();

      const maxIndex = this.ExperienceList.length - 1;
      if (this.activeIndex === maxIndex) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }

      this.checkHeight();
    },
    showPrev() {
      this.$refs.mobileHomeExperienceCarousel01.prev();

      const lastContentIndex = this.ExperienceList.length - 1;
      if (this.activeIndex === 0) {
        this.activeIndex = lastContentIndex;
      } else {
        this.activeIndex--;
      }

      this.checkHeight();
    },
  },
  mounted() {
    this.c1 = this.$refs.mobileHomeExperienceCarousel01;
    this.c2 = this.$refs.mobileHomeExperienceCarousel02;
  },
};
</script>

<style lang="scss">
.mobile-home-experience__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 50px 30px;

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
    margin-top: 40px;
    transition: height 0.3s ease-in-out;
  }

  .main-card-list {
    outline: 0;

    .card-list {
      &.--left {
        display: flex;
        justify-content: center;

        .card-image {
          width: 40%;
          background: $white;
        }
      }

      &.--right {
        margin-top: 30px;

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
          margin: 15px 0 25px;
        }
      }
    }

    .tools-section {
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

  .company-list-carousel__wrapper {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .company-list-carousel {
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
      height: 75px;
      width: 75px;
      padding: 18px;
      margin: 0 5px;
      background: $white;
      border-radius: 50%;

      @include small-mobile() {
        height: 65px;
        width: 65px;
        padding: 12px;
      }

      @include mini-mobile() {
        height: 70px;
        width: 70px;
        padding: 15px;
      }

      @include large-mobile() {
        height: 100px;
        width: 100px;
        padding: 20px;
      }

      @include tablet() {
        height: 100px;
        width: 100px;
        padding: 20px;
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

@include small-mobile() {
  .mobile-home-experience__content {
    margin: 50px 20px;

    .company-list-carousel__wrapper {
      .carousel-arrow {
        padding: 8px;
        font-size: 0.875rem;
      }
    }
  }
}

@include tablet() {
  .mobile-home-experience__content {
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
