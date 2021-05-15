<template lang="pug">
  section
    div.home(v-if="!isMobile")
      HomeBanner
      HomePortofolio
      HomeExperience
      HomeSkills
      HomeAbout
      HomeConnection
    div.home-mobile(v-else)
      center
        h2 Currently Still not Support for Mobile & Mini Desktops
</template>

<script>
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomePortofolio from "@/components/Home/HomePortofolio.vue";
import HomeExperience from "@/components/Home/HomeExperience.vue";
import HomeSkills from "@/components/Home/HomeSkills.vue";
import HomeAbout from "@/components/Home/HomeAbout.vue";
import HomeConnection from "@/components/Home/HomeConnection.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomePortofolio,
    HomeExperience,
    HomeSkills,
    HomeAbout,
    HomeConnection,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    detectMobileUser() {
      if (screen.width < 1120) {
        this.isMobile = true;
      }
    },
  },
  created() {
    this.detectMobileUser();
  },
};
</script>

<style lang="scss">
.home-mobile {
  padding-top: 70px;
}
</style>
