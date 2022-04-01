<template lang="pug">
  section#skills.mobile-home-skills__content
    p.subtitle Services
    div.title-wrapper
      i.carousel-arrow.icon-chevron-left(@click="showPrev")
      h2.title My Skills
      i.carousel-arrow.icon-chevron-right(@click="showNext")
    div.mobile-skills-carousel__container
      VueSlickCarousel.skills-carousel(v-bind="settings" ref="carousel")
        div.skills__card-lists(v-for="skill in SkillList")
          div.card-list
            i.card-icon(:class="skill.icon")
            h2.card-title {{skill.title}}
            p.level-text(
              :class="{'text--green': skill.level === 'Familiar', 'text--orange': skill.level === 'Fluent'}"
            ) {{skill.level}}
</template>

<script>
import SkillList from "@/utilities/SkillList";

export default {
  name: "HomeSkills",
  data() {
    return {
      SkillList: SkillList,
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        swipeToSlide: true,
        rows: 2,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
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
.mobile-home-skills__content {
  margin: 50px 30px;

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    .title {
      color: var(--text-color-primary);
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 5px;
    }

    .carousel-arrow {
      padding: 10px;
      color: var(--button-text);
      background: var(--button-solid-background);
      transition: background 0.2s, color 0.2s;
      border-radius: 4px;
      margin: 0 20px;
      cursor: pointer;
    }
  }

  .mobile-skills-carousel__container {
    margin-top: 10px;

    .card-list {
      position: relative;
      padding: 20px;
      min-height: 115px;
      background: var(--dark-white);
      color: var(--white-dark);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      margin: 10px;

      .card-icon {
        font-size: 1.25rem;
        margin-bottom: 10px;

        &.icon-mysql {
          font-size: 2rem;
        }
      }

      .card-title {
        font-size: 0.75rem;
        font-weight: 600;
      }

      .level-text {
        position: absolute;
        top: -3px;
        right: -3px;
        font-size: 0.75rem;
        font-weight: 600;
        border-radius: 4px;
        padding: 3px 7px;
        color: $white;

        &.text--green {
          background: $primarySolid;
        }

        &.text--orange {
          background: $orange;
        }
      }
    }

    // rewrite vue slick carousel stylings
    .slick-dots {
      bottom: -30px;
      overflow: hidden;
      height: 25px;

      li,
      li.slick-active {
        button:before {
          color: var(--dark-white);
        }
      }
    }
  }
}

@include small-mobile() {
  .mobile-home-skills__content {
    margin: 50px 10px;

    .title-wrapper {
      .carousel-arrow {
        padding: 8px;
        font-size: 0.875rem;
      }
    }

    .mobile-skills-carousel__container {
      .card-list {
        min-height: 130px;
      }

      .card-title {
        font-size: 0.6875rem !important;
      }
    }
  }
}

@include tablet() {
  .mobile-home-skills__content {
    .title {
      font-size: 1.625rem !important;
    }

    .subtitle {
      font-size: 0.8125rem !important;
    }
  }
}
</style>
