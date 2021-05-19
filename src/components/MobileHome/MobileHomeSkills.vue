<template lang="pug">
  section#skills.mobile-home-skills__content
    p.subtitle Services
    div.title-wrapper
      i.carousel-arrow.icon-chevron-left(@click="showPrev")
      h2.title My Skills
      i.carousel-arrow.icon-chevron-right(@click="showNext")
    div.mobile-skills-carousel__container
      VueSlickCarousel.skills-carousel(v-bind="settings" ref="carousel")
        div.skills__card-lists(v-for="skill in SkillLists")
          div.card-list
            i.card-icon(:class="skill.icon")
            h2.card-title {{skill.title}}
            p.level-text(
              :class="{'text--green': skill.level === 'Familiar', 'text--orange': skill.level === 'Fluent'}"
            ) {{skill.level}}
</template>

<script>
import SkillLists from "@/utilities/SkillLists";

export default {
  name: "HomeSkills",
  data() {
    return {
      SkillLists: SkillLists,
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        rows: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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

  @include small-mobile() {
    margin: 50px 10px;
  }

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

      @include small-mobile() {
        padding: 8px;
        font-size: 0.875rem;
      }
    }
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

    @include small-mobile() {
      min-height: 130px;
    }

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

      @include small-mobile() {
        font-size: 0.6875rem;
      }
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
    bottom: -40px;

    @include small-mobile() {
      bottom: -50px;
    }

    li,
    li.slick-active {
      button:before {
        color: var(--dark-white);
      }
    }
  }
}
</style>