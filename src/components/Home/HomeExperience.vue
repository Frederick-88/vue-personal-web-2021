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
  data() {
    return {
      experienceLists: [
        {
          title: "Infinity Batam ( eXotica Batam )",
          logo: require("@/assets/images/works/weatherpedia-pwa1.png"),
          description:
            "As Senior Graphic Designer, creating 3D Interior & Graphic Designs creations, managing Junior team, held meetings with big companies in batam like PT JOTUN, SIIX, PHILIPS, etc.",
          keyContributions: ["Graphic Design", "Interior Design"],
        },
        {
          title: "OFFEO SG",
          logo: require("@/assets/images/works/weatherpedia-pwa1.png"),
          description: "Junior Frontend & Frontend Developer",
          keyContributions: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Impact Byte Fullstack Bootcamp",
          logo: require("@/assets/images/works/weatherpedia-pwa1.png"),
          description:
            "Intensive Bootcamp in Fullstack Major, Learnt Frontend & Backend Lessons. Learnt ReactJS, ReactRedux, ExpressJS, Javascript, Bootstrap, Etc.",
          keyContributions: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Fingerfast Laboratory",
          logo: require("@/assets/images/works/weatherpedia-pwa1.png"),
          description:
            "As Intern Graphic Designer, creating Designs, create videos, collaborate in online-queue-ticket-booking application for hospital, create advertisements to support our team better.",
          keyContributions: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Leader of Maitreyawira's English Debate Club",
          logo: require("@/assets/images/works/weatherpedia-pwa1.png"),
          description:
            "Managing Juniors, improve talents, participated in several competitions with teammates, develop this team to their best versions.",
          keyContributions: ["Graphic Design", "Interior Design"],
        },
      ],
    };
  },
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
