<template lang="pug">
  section#skills.home-skills__content
    p.subtitle Services
    h2.title My Skills
    div.skills-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
        i.carousel-arrow.icon-chevron-right(@click="showNext")
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
        swipe: false,
        rows: 2,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
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
.home-skills__content {
  margin: 50px 100px 0;

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
    margin-left: 70px;
  }

  .title {
    color: var(--text-color-primary);
    font-weight: 700;
    font-size: 1.75rem;
    margin: 4px 0 15px;
    text-align: center;
    margin-left: 70px;
  }
}

.skills-carousel__container {
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

  .skills-carousel {
    width: 90%;
  }

  .card-list {
    position: relative;
    padding: 20px;
    min-height: 125px;
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
      font-size: 1.5rem;
      margin-bottom: 10px;

      &.icon-mysql {
        font-size: 2rem;
      }
    }

    .card-title {
      font-size: 0.875rem;
      font-weight: 600;
    }

    .level-text {
      position: absolute;
      top: -3px;
      right: -3px;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 4px;
      padding: 5px 10px;
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

    li,
    li.slick-active {
      button:before {
        color: var(--dark-white);
      }
    }
  }
}
</style>
