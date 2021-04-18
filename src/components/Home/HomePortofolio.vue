<template lang="pug">
  section.home-portofolio__content
    h4.title My Portofolio
    h4.title Recent Works
    VueSlickCarousel.portofolio-carousel(:arrows="true" :dots="true")
      div(v-for="number in 6")
       p  {{number}}
</template>

<script>
export default {
  name: "HomePortofolio",
};
</script>

<style lang="scss">
.home-portofolio__content {
  margin: 50px 150px 0;

  .title {
    text-align: center;
  }

  .portofolio-carousel {
    margin-top: 30px;
  }

  // rewrite vue slick carousel stylings
  .slick-prev:before,
  .slick-next:before {
    color: var(--text-color-secondary);
    opacity: 1;
  }

  .slick-dots {
    li,
    li.slick-active {
      button:before {
        color: var(--darkWhite);
      }
    }
  }
}
</style>
