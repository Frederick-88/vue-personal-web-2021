<template lang="pug">
  section#works.home-portofolio__content
    p.subtitle Recent Works
    h2.title My Portofolio

    //- section of carousel for skills keywords, when selected will show works with that skill
    div.portofolio-keyword__carousel-wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.portofolio-keyword-carousel(
        ref="homePortofolioKeywordCarousel"
        v-bind="portofolioCarouselSettings"
      )
        div(
          v-for="keyword in portofolioKeywords"
          :key="keyword.value"
        )
          button.keyword-item(
            type="button"
            :class="{'item--active': activePortofolioKeyword === keyword.value}"
            @click="setActivePortofolioKeyword(keyword.value)"
          ) {{ keyword.name }}
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    div.portofolio__list
      div.portofolio__item-container(
        v-for="portofolio in filteredPortofolioList"
        :class="{'container--two-column': isSmallDesktopScreen}"
      )
        div.portofolio-item
          div.portofolio-tags
            span.tag(v-for="tag in portofolio.tags") {{tag}}
            //- span.tag {{portofolio.year}}
          div.portofolio__header
            h4.portofolio-title {{portofolio.title}}
            button.portofolio__see-more-button(
              type="button"
              @click="showPortofolioModal(portofolio)"
            )
              p See More
              i.icon-arrow-right
          div.portofolio__image-wrapper
            img.image(:src="portofolio.thumbnail" :alt="portofolio.title" :class="{'image--position-top': portofolio.thumbnailPosTop}")
            
    div.portofolio__view-more-button-container(
      v-if="getRemainingHiddenPortofolioCount && !isFilteringPortofolio"
    )
      button.portofolio__view-more-button(
        type="button"
        @click="showMorePortofolio(showPortofolioCount)"
      ) View More ({{getRemainingHiddenPortofolioCount}})
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import PortofolioList from "@/utilities/PortofolioList";
import { portofolioKeywords } from "@/assets/scripts/variables";

export default {
  name: "HomePortofolio",
  data() {
    return {
      portofolioList: PortofolioList,
      portofolioKeywords: portofolioKeywords,

      isShowModal: false,
      getPortofolioList: [],

      activePortofolioKeyword: "all",
      portofolioCarouselSettings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["isSmallDesktopScreen"]),
    showPortofolioCount() {
      // how many to show when click view more
      return this.isSmallDesktopScreen ? 2 : 3;
    },
    getPortofolioListLength() {
      return this.getPortofolioList.length;
    },
    getRemainingHiddenPortofolioCount() {
      return this.portofolioList.length - this.getPortofolioList.length;
    },
    isFilteringPortofolio() {
      return this.activePortofolioKeyword !== "all";
    },
    filteredPortofolioList() {
      const filteredPortofolio = this.portofolioList.filter((portofolio) => {
        let isPortofolioMatch = false;

        portofolio.skills.forEach((skill) => {
          if (skill.toLowerCase().includes(this.activePortofolioKeyword))
            isPortofolioMatch = true;
        });

        return isPortofolioMatch;
      });

      if (this.isFilteringPortofolio) return filteredPortofolio;
      return this.getPortofolioList;
    },
  },
  created() {
    this.setupPortofolioList();
  },
  watch: {
    isSmallDesktopScreen() {
      // so when resizing screen can reset the portofolio to intended new system
      this.setupPortofolioList(true);
    },
  },
  methods: {
    ...mapMutations(["setIsShowCarouselModal", "setActivePortofolio"]),
    setupPortofolioList(isReset = false) {
      if (isReset) this.getPortofolioList = [];

      const getInitialShowPortofolioCount = this.showPortofolioCount * 2;
      this.showMorePortofolio(getInitialShowPortofolioCount);
    },
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
    showMorePortofolio(portofolioCount) {
      const start = this.getPortofolioListLength;
      const end = this.getPortofolioListLength + portofolioCount;
      const getExtraPortofolio = this.portofolioList.slice(start, end);

      this.getPortofolioList =
        this.getPortofolioList.concat(getExtraPortofolio);
    },
    showNext() {
      this.$refs.homePortofolioKeywordCarousel.next();
    },
    showPrev() {
      this.$refs.homePortofolioKeywordCarousel.prev();
    },
    setActivePortofolioKeyword(keyword) {
      this.activePortofolioKeyword = keyword;
    },
  },
};
</script>

<style lang="scss">
.home-portofolio__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 50px auto 100px;
  width: 85%;
  position: relative;
  z-index: 99;
  max-width: 1400px;
  animation: fade-up 2s;

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }

  .title {
    color: var(--text-color-primary);
    font-weight: 700;
    font-size: 1.75rem;
    margin: 4px 0 15px;
    text-align: center;
  }

  .portofolio-keyword__carousel-wrapper {
    display: flex;
    align-items: center;
    margin: 40px 0;

    .portofolio-keyword-carousel {
      width: 90%;

      .keyword-item {
        padding: 10px;
        width: 92%;
        margin: 0 10px;
        border-radius: 30px;
        border: 0;
        outline: 0;
        cursor: pointer;
        background: var(--dark-white);
        color: var(--white-dark);
        font-size: 0.875rem;
        font-weight: 500;
        opacity: 0.3;
        transition: opacity 0.3s;

        &:hover,
        &.item--active {
          opacity: 1;
        }

        &.item--active {
          background: var(--text-orange-green);
        }
      }
    }

    .icon-wrapper {
      width: 5%;
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

        &:hover {
          background: var(--button-text);
          color: var(--button-solid-background);
        }
      }
    }
  }

  .portofolio__list {
    display: flex;
    flex-wrap: wrap;

    .portofolio__item-container {
      padding: 20px 10px;
      width: 33%;

      &.container--two-column {
        width: 50%;
      }
    }

    .portofolio-item {
      width: 100%;
      padding-left: 15px;
      border: 2px solid var(--button-solid-background-3);
      border-radius: 4px;
      color: var(--text-color-primary);
      position: relative;

      &:hover {
        transform: translateY(-10px);
        transition: all 0.3s;
      }
    }

    .portofolio__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 25px 0 15px;
      padding-right: 15px;

      .portofolio-title {
        width: calc(100% - 90px - 5%);
        margin: 0;
        color: var(--text-color-primary);
        font-weight: 500;
        font-size: 0.9375rem;
      }

      .portofolio__see-more-button {
        background: transparent;
        border: 0;
        outline: 0;
        padding: 0;
        display: flex;
        align-items: center;
        color: var(--text-color-primary);
        width: 90px;
        cursor: pointer;

        &:hover {
          transition: color 0.3s ease-in-out;
          color: var(--text-orange-green);

          p {
            transition: border-bottom-color 0.3s ease-in-out;
            border-bottom-color: var(--text-orange-green);
          }
        }

        p {
          font-size: 0.8125rem;
          font-weight: 500;
          margin: 0;
          padding-bottom: 2px;
          border-bottom: 1px solid var(--text-color-primary);
        }

        i {
          font-size: 0.875rem;
          margin-left: 8px;
        }
      }
    }

    .portofolio__image-wrapper {
      width: 100%;
      height: 200px;

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px 0 0 0;

        &.image--position-top {
          object-position: top;
        }
      }
    }

    .portofolio-tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      position: absolute;
      z-index: 3;
      top: -15px;
      left: 15px;
    }

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

  .portofolio__view-more-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .portofolio__view-more-button {
    border: 0;
    outline: 0;
    padding: 12px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--button-text);
    background: var(--button-solid-background);
    border-radius: 4px;
    margin-top: 30px;
    width: 300px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;

    &:hover {
      background: var(--button-text);
      color: var(--button-solid-background);
      box-shadow: 5px 5px 20px rgba(100, 100, 100, 0.15);
    }
  }

  @include large-monitor {
    max-width: 1700px;
  }

  @include desktop {
    .subtitle {
      font-size: 0.8125rem;
    }

    .title {
      font-size: 1.5rem;
    }
  }
}
</style>
