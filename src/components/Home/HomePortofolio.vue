<template lang="pug">
  section.home-portofolio__content
    h4.title My Portofolio - Recent Works
    div.portofolio-carousel__container
      div.carousel-arrow__buttons
        i.carousel-arrow.icon-arrow-left(@click="showPrev")
        i.carousel-arrow.icon-arrow-right(@click="showNext")
      VueSlickCarousel.portofolio-carousel(v-bind="settings" ref="carousel")
        div.portofolio__card-lists(v-for="number in 6")
          div.card-list
            h2.title title here
            img.image(src='@/assets/images/wallpaper-2.jpg')
            p.subtitle description here
</template>

<script>
export default {
  name: "HomePortofolio",
  data() {
    return {
      arrowOption: {
        currentSlide: 1,
        slideCount: 4,
      },
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
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
.home-portofolio__content {
  margin: 50px 150px 0;

  .title {
    text-align: end;
    font-weight: 500;
    color: var(--text-color-primary);
    margin-right: 30px;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
}

.portofolio-carousel__container {
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
      background: var(--button-background);
      transition: background 0.2s, color 0.2s;
      border-radius: 4px;
      margin: 10px 0;
      cursor: pointer;

      &:hover {
        background: var(--button-text);
        color: var(--button-background);
      }
    }
  }

  .portofolio-carousel {
    width: 90%;
  }

  .card-list {
    padding: 30px;
    background: var(--white-dark);
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;

    .image {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
  }

  // // rewrite vue slick carousel stylings
  // .slick-prev:before,
  // .slick-next:before {
  //   color: var(--text-color-secondary);
  //   opacity: 1;
  // }

  .slick-dots {
    li,
    li.slick-active {
      button:before {
        color: var(--dark-white);
      }
    }
  }
}
</style>
