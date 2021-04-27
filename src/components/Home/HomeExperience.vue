<template lang="pug">
  section.home-experience__content
    h4.title My Experience - Wonderful Journey
    VueSlickCarousel(
      ref="c1"
      :asNavFor="$refs.c2"
      :focusOnSelect="true"
      :arrows="true"
    )
      div(v-for="number in 6")
        div.card-list
          h2.title title here {{number}}
          img.image(src='@/assets/images/wallpaper.jpg')
          p.subtitle description here
    VueSlickCarousel(
      ref="c2"
      :asNavFor="$refs.c1"
      :slidesToShow="4"
      :focusOnSelect="true"
      :arrows="true"
      :dots="true"
    )
      div(v-for="number in 6")
        div.card-list
          h2.title title here {{number}}
          img.image(src='@/assets/images/wallpaper.jpg')
          p.subtitle description here
</template>

<script>
export default {
  name: "HomeExperience",
};
</script>

<style lang="scss">
.home-experience__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;

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
}
</style>
