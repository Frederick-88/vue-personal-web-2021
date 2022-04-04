<template lang="pug">
  section
    //- ---
    //- --- keep, in case later might need another lottie page 
    //- ---
    //- div.unsupported-device(v-if="isTabletScreen")
    //-   UnsupportedDevice
    div.home-mobile(v-if="isMobileScreen || isTabletScreen")
      MobileHomeBanner
      MobileHomePortofolio
      MobileHomeExperience
      MobileHomeSkills
      MobileHomeAbout
      MobileHomeConnection
      p.copyright-text(v-if="isTabletScreen && isShowCopyrightText") © ChenFrederick.com - 2020
    div.home(v-else)
      HomeBanner
      HomePortofolio
      HomeExperience
      HomeSkills
      HomeAbout
      HomeConnection
      p.copyright-text(v-if="isShowCopyrightText") © ChenFrederick.com - 2020
      CarouselModal
</template>

<script>
import { mapGetters } from "vuex";
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
      isShowCopyrightText: false,
    };
  },
  mounted() {
    setTimeout(() => {
      // avoid it shows early upon rendering contents
      this.isShowCopyrightText = true;
    }, 3000);
  },
  computed: {
    ...mapGetters(["isMobileScreen", "isTabletScreen"]),
  },
};
</script>

<style lang="scss">
.home-mobile {
  padding-top: 70px;
}

.copyright-text {
  color: var(--dark-white);
  text-align: center;
  padding-bottom: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
