<template lang="pug">
  div.home
    HomeBanner
    HomePortofolio
    HomeExperience
</template>

<script>
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomePortofolio from "@/components/Home/HomePortofolio.vue";
import HomeExperience from "@/components/Home/HomeExperience.vue";

export default {
  name: "Home",
  components: {
    HomeBanner,
    HomePortofolio,
    HomeExperience,
  },
};
</script>
