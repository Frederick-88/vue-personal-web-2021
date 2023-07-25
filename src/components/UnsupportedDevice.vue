<template lang="pug">
  section.unsupported-device
    div.animation-loader__wrapper
      GlobalAnimationLoader(:file="workingJsonFile")
    h2.title Work in progress for this device screen resolution. Please kindly visit with bigger desktop / with mobile =)
    div.social-media__wrapper
      a.media-button.icon-email(href="mailto:me@chenfrederick.com?subject=Hi Fred!&body=I'm (name) from (where) (please drop your message kindly here)")
      a.media-button.icon-linkedin-solid(href="https://www.linkedin.com/in/frederick-chen" target="_blank")
      a.media-button.icon-whatsapp(href="https://wa.me/6285835998805" target="_blank")
      a.media-button.icon-github(href="https://github.com/Frederick-88" target="_blank")
</template>

<script>
import JsonFile from "@/assets/json/work-in-progress.json";
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";

export default {
  name: "UnsupportedDevice",
  components: {
    GlobalAnimationLoader,
  },
  data() {
    return {
      workingJsonFile: JsonFile,
    };
  },
};
</script>

<style lang="scss">
.unsupported-device {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 0 30px;

  .animation-loader__wrapper {
    width: 50%;
    margin-top: -10%;

    @include tablet() {
      width: 75%;
    }

    .animation-loader__image {
      width: 100% !important;
    }
  }

  .title {
    color: var(--text-color-secondary);
    font-size: 1.125rem;
    font-weight: 600;
    max-width: 600px;
    margin: 30px 0 20px;
    line-height: 1.5;
  }

  .social-media__wrapper {
    display: flex;

    .media-button {
      padding: 10px;
      margin: 0 10px;
      display: block;
      background: none;
      color: var(--text-color-secondary);
      font-size: 1.375rem;
      cursor: pointer;
      border: 0;
      outline: 0;
      text-decoration: none;
    }
  }
}
</style>
