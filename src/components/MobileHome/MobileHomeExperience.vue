<template lang="pug">
  section#experience.mobile-home-experience__content
    p.subtitle Wonderful Journey
    h2.title My Experience

    div.company-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.company-list-carousel(
        ref="c2"
        :slides-to-scroll="1",
        :slides-to-show="3",
        :arrows="false",
        :dots="false",
        :infinite="true"
        :swipe="false"
      )
        div.company-card-list(v-for="experience in ExperienceList")
          div.card-list
            img.card-image(
              loading="lazy"
              :src='experience.logo'
            )
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    VueSlickCarousel.main-carousel(
      ref="c1"
      :slides-to-scroll="1",
      :arrows="false"
      :style="{ height: carouselHeight }"
      :infinite="true"
      :swipe="false"
    )
      div.main-card-list(
        v-for="(experience, index) in ExperienceList" 
        :ref="`experience-${index}`"
      )
        div.card-list.--left
          img.card-image(
            loading="lazy"
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
    };
  },
  methods: {
    checkHeight() {
      const activeTitle = `experience-${this.activeIndex}`;
      const height = this.$refs[activeTitle].offsetHeight;

      this.carouselHeight = height + "px";
    },
    showNext() {
      const maxIndex = this.ExperienceList.length - 1;
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
      const lastContentIndex = this.ExperienceList.length - 1;
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
.mobile-home-experience__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 30px;

  @include small-mobile() {
    margin: 0 15px;
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
      padding: 20px;
      margin: 0 5px;
      background: $white;
      border-radius: 50%;

      @include small-mobile() {
        height: 65px;
        width: 65px;
        padding: 10px;
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
