<template lang="pug">
  section
    div.unsupported-device(v-if="isTabletAndSmallDesktop")
      UnsupportedDevice
    div.home-mobile(v-else-if="isMobile")
      MobileHomeBanner
      MobileHomePortofolio
      MobileHomeExperience
      MobileHomeSkills
      MobileHomeAbout
      MobileHomeConnection
    div.home(v-else)
      HomeBanner
      HomePortofolio
      HomeExperience
      HomeSkills
      HomeAbout
      HomeConnection
      CarouselModal
</template>

<script>
import HomeBanner from "@/components/Home/HomeBanner.vue";
import HomePortofolio from "@/components/Home/HomePortofolio.vue";
import HomeExperience from "@/components/Home/HomeExperience.vue";
import HomeSkills from "@/components/Home/HomeSkills.vue";
import HomeAbout from "@/components/Home/HomeAbout.vue";
import HomeConnection from "@/components/Home/HomeConnection.vue";

import MobileHomeBanner from "@/components/MobileHome/MobileHomeBanner.vue";
import MobileHomePortofolio from "@/components/MobileHome/MobileHomePortofolio.vue";
import MobileHomeExperience from "@/components/MobileHome/MobileHomeExperience.vue";
import MobileHomeSkills from "@/components/MobileHome/MobileHomeSkills.vue";
import MobileHomeAbout from "@/components/MobileHome/MobileHomeAbout.vue";
import MobileHomeConnection from "@/components/MobileHome/MobileHomeConnection.vue";

export default {
  name: "Home",
  // () => import() means we are lazy loading them
  // () => import(/* webpackPrefetch: true */) means we are lazy loading them, but after webpage already loaded, we want to directly fetch them.
  components: {
    HomeBanner,
    HomePortofolio,
    HomeExperience,
    HomeSkills,
    HomeAbout,
    HomeConnection,
    MobileHomeBanner,
    MobileHomePortofolio,
    MobileHomeExperience,
    MobileHomeSkills,
    MobileHomeAbout,
    MobileHomeConnection,
    UnsupportedDevice: () => import("@/components/UnsupportedDevice.vue"),
    CarouselModal: () => import("@/components/CarouselModal.vue"),
  },
  data() {
    return {
      isMobile: false,
      isTabletAndSmallDesktop: false,
    };
  },
  methods: {
    detectMobileUser() {
      if (screen.width < 1120) {
        this.isMobile = true;
      }
    },
    detectTabletToSmallDesktopUser() {
      if (screen.width > 600 && screen.width < 1120) {
        this.isTabletAndSmallDesktop = true;
      }
    },
  },
  beforeMount() {
    this.detectMobileUser();
    this.detectTabletToSmallDesktopUser();
  },
};
</script>

<style lang="scss">
.home-mobile {
  padding-top: 70px;
}
</style>
