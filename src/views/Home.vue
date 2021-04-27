<template lang="pug">
  div.home
    HomeBanner
    HomePortofolio
    HomeExperience
    HomeSkills
    //- HomeAbout
    HomeConnection
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
};
</script>
