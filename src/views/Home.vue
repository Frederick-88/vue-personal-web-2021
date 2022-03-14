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
import MobileHomeBanner from "@/components/MobileHome/MobileHomeBanner.vue";

export default {
  name: "Home",
  // () => import() means we are lazy loading them, will start fetch only when start calling the component
  // () => import(/* webpackPrefetch: true */) means we are lazy loading them, but after webpage already loaded, we want to directly fetch them.
  components: {
    HomeBanner,
    HomePortofolio,
    HomeExperience: () =>
      import(
        /* webpackPrefetch: true */ "@/components/Home/HomeExperience.vue"
      ),
    HomeSkills: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/HomeSkills.vue"),
    HomeAbout: () =>
      import(/* webpackPrefetch: true */ "@/components/Home/HomeAbout.vue"),
    HomeConnection: () =>
      import(
        /* webpackPrefetch: true */ "@/components/Home/HomeConnection.vue"
      ),
    MobileHomeBanner,
    MobileHomePortofolio: () =>
      import(
        /* webpackPrefetch: true */ "@/components/MobileHome/MobileHomePortofolio.vue"
      ),
    MobileHomeExperience: () =>
      import(
        /* webpackPrefetch: true */ "@/components/MobileHome/MobileHomeExperience.vue"
      ),
    MobileHomeSkills: () =>
      import(
        /* webpackPrefetch: true */ "@/components/MobileHome/MobileHomeSkills.vue"
      ),
    MobileHomeAbout: () =>
      import(
        /* webpackPrefetch: true */ "@/components/MobileHome/MobileHomeAbout.vue"
      ),
    MobileHomeConnection: () =>
      import(
        /* webpackPrefetch: true */ "@/components/MobileHome/MobileHomeConnection.vue"
      ),
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
