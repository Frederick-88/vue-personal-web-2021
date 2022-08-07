<template lang="pug">
  GlobalBaseDialog.home-portofolio__modal(
    v-if="isShowCarouselModal"
    @close="closeModal"
  )
    div.modal__header
      h2.title {{activePortofolio.title}}
      div.portofolio-tags
        span.tag(v-for="tag in activePortofolio.tags") {{tag}}

    div.modal__image-preview(:class="{'preview--single': hasOnlyOnePreview}")
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
        i.carousel-arrow.icon-chevron-right(@click="showNext")
      div.modal__carousel-container
        VueSlickCarousel.modal__carousel(
          v-bind="carouselSettings" 
          ref="modalCarousel"
        )
          div.image-wrapper(v-for="(preview, index) in activePortofolio.previews" :key="index")
            a.image-link(
              :href="preview"
              target="_blank"
            )
              img.image(
                :src="preview"
              )
              div.image__preview-sign
                i.icon-eye.sign-icon
                p.sign-text View in New Tab

    div.modal__description-container
      div.modal__description
        p.subtitle {{activePortofolio.description}}
        div.tools-section
          p.tools-title Leveraged Skills: 
          div.tools-lists
            span.tool-text(v-for="(skill, index) in activePortofolio.skills" :key="index") {{skill}}
        div.button-list
          template(v-if="activePortofolio.website")
            a.button(:href="activePortofolio.website" target="_blank") 
              | Visit Website
              i.icon-earth2
              
          template(v-if="activePortofolio.npmWebsite")
            a.button(
              :href="activePortofolio.npmWebsite" 
              target="_blank"
            ) 
              | Visit NPM Package
              i.icon-earth2

          template(v-if="activePortofolio.github")
            a.button(
              :href="activePortofolio.github" 
              target="_blank"
            ) 
              | Visit Github Repository
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
      carouselSettings: {
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipe: false,
      },
    };
  },
  computed: {
    ...mapState(["isShowCarouselModal", "activePortofolio"]),
    hasOnlyOnePreview() {
      return this.activePortofolio.previews.length === 1;
    },
  },
  methods: {
    ...mapMutations(["setIsShowCarouselModal", "setActivePortofolio"]),
    closeModal() {
      this.setIsShowCarouselModal(false);
      this.setActivePortofolio({});
    },
    showNext() {
      this.$refs.modalCarousel.next();
    },
    showPrev() {
      this.$refs.modalCarousel.prev();
    },
  },
};
</script>

<style lang="scss">
.home-portofolio__modal {
  .modal__header {
    margin: 50px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 1.375rem;
      font-weight: 500;
    }

    .portofolio-tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;

      .tag {
        padding: 5px 12px;
        border-radius: 4px;
        margin-right: 5px;
        font-size: 0.75rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }
  }

  .modal__image-preview {
    position: relative;
    display: flex;
    margin: auto 0;
    width: 100%;
    padding: 0 30px;

    &.preview--single {
      .slick-track {
        height: 400px !important;
        display: flex;
        align-items: center;
      }

      .carousel-arrow {
        opacity: 0.4;
        pointer-events: none;
      }
    }

    div {
      height: 100% !important;
    }

    .image-wrapper {
      outline: 0;
      border: 0;
      position: relative;
      cursor: pointer;

      &:hover {
        .image__preview-sign {
          opacity: 1;
        }
      }

      .image {
        width: 98%; // avoid content overflowed with the next slide if image resolution/size is not the same
        height: 100%;
        object-fit: contain;
        margin: 0 auto;
        max-height: 520px;
      }

      .image__preview-sign {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($black, 0.65);
        color: $white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        .sign-icon {
          margin-right: 10px;
          font-size: 1.25rem;
        }

        .sign-text {
          font-size: 1rem;
          margin: 0;
          padding: 0;
        }
      }
    }

    .modal__carousel-container {
      width: 100%;
      display: flex;
      justify-content: center;

      .modal__carousel {
        width: 85%;

        .slick-dots {
          bottom: -35px;

          li {
            button::before {
              color: var(--dark-white);
            }
          }
        }
      }
    }

    .carousel-arrow__buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100px;
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
        background: var(--button-text-3);
        color: var(--button-solid-background);
      }
    }
  }

  .modal__description-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 60px 0;
  }

  .modal__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 700px;

    .subtitle {
      margin: 15px 0 25px;
      text-align: justify;
      color: var(--text-grey-2);
    }

    .tools-section {
      margin-bottom: 40px;
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

    .button-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .button {
      border-radius: 4px;
      cursor: pointer;
      outline: 0;
      border: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: var(--button-solid-background-3);
      color: var(--button-text-3);
      font-weight: 600;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 12px;
      width: calc(50% - 15px);
      text-decoration: none;
      transition: background 0.2s, color 0.2s;

      &:hover {
        background: var(--button-text-3);
        color: var(--button-solid-background-3);
      }

      .icon-earth2 {
        margin-left: 8px;
        font-size: 1.125rem;
        margin-top: -2px;
      }
    }
  }
}
</style>
