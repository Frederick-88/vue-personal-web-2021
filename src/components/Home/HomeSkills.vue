<template lang="pug">
  section.home-skills__content
    h4.header-title My Skills - Services
    div.skills-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-arrow-left(@click="showPrev")
        i.carousel-arrow.icon-arrow-right(@click="showNext")
      VueSlickCarousel.skills-carousel(v-bind="settings" ref="carousel")
        div.skills__card-lists(v-for="skill in SkillLists")
          div.card-list
            i.card-icon(:class="skill.icon")
            h2.title {{skill.title}}
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
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
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
.home-skills__content {
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
    padding: 20px;
    min-height: 125px;
    background: var(--text-color-primary);
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

    .title {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  // // rewrite vue slick carousel stylings
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
