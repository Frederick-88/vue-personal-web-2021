<template lang="pug">
  GlobalBaseDialog.home-portofolio__modal(
    v-if="isShowCarouselModal"
    :is-show="isShowCarouselModal"
    :is-primary="true"
    @close="closeModal"
  )
    div.row
      div.column.column--left
        div.carousel-arrow__buttons.extra-margin-right
          i.carousel-arrow.icon-chevron-up(@click="showPrev")
          i.carousel-arrow.icon-chevron-down(@click="showNext")
        VueSlickCarousel.modal__carousel(
          v-bind="verticalSettings" 
          ref="verticalCarousel"
        )
          div.image-wrapper(v-for="(preview, index) in activePortofolio.previews" :key="index")
            img.image(
              :src="preview"
              loading="lazy"
            )

      div.column--middle

      div.column.column--right
        h2.title {{activePortofolio.title}}
        p.subtitle {{activePortofolio.description}}
        div.tools-section
          p.tools-title Leveraged Skills: 
          div.tools-lists
            span.tool-text(v-for="(skill, index) in activePortofolio.skills" :key="index") {{skill}}
        div(v-if="activePortofolio.website")
          a.button.button--dark(:href="activePortofolio.website" target="blank") 
            | Visit Website
            i.icon-earth2
            
        div(v-if="activePortofolio.npmWebsite")
          a.button.button--dark(
            :href="activePortofolio.npmWebsite" 
            target="blank"
          ) 
            | Visit NPM Package
            i.icon-earth2
</template>

<script>
import { mapState, mapMutations } from "vuex";
import GlobalBaseDialog from "@/utilities/GlobalBaseDialog/GlobalBaseDialog.vue";

export default {
  name: "CarouselModal",
  components: {
    GlobalBaseDialog,
  },
  data() {
    return {
      verticalSettings: {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipe: false,
      },
    };
  },
  computed: {
    ...mapState(["isShowCarouselModal", "activePortofolio"]),
  },
  methods: {
    ...mapMutations(["setIsShowCarouselModal", "setActivePortofolio"]),
    closeModal() {
      this.setIsShowCarouselModal(false);
      this.setActivePortofolio({});
    },
    showNext() {
      this.$refs.verticalCarousel.next();
    },
    showPrev() {
      this.$refs.verticalCarousel.prev();
    },
  },
};
</script>

<style lang="scss">
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
      margin: 15px 0 25px;
      text-align: justify;
      color: $grey2;
    }

    .tools-section {
      margin-bottom: 35px;
      text-align: left;

      .tools-title {
        margin-bottom: 8px;

        &::before {
          font-family: "icomoon";
          content: $icon-design;
          font-size: 1rem;
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
        font-size: 0.75rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }
  }

  .column--middle {
    border-right: 1px solid $disabledGrey;
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

  .modal__carousel {
    width: 90%;

    .slick-dots {
      bottom: -35px;
    }
  }
}
</style>
