<template lang="pug">
  section.mobile-home-connection__content
    div.content-container
      div.left-column
        GlobalAnimationLoader(:file="makeFriendsJson")
      div.right-column
        h2.title Let's be Friends.
        p.subtitle “Strangers are just friends waiting to happen.” – Rod Mckuen
        div.sub-content
          input.content-input(placeholder="Your Name" v-model="nameInput")
          input.content-input(placeholder="From Where" v-model="locationInput")
          input.content-input(placeholder="How can i help?" v-model="descriptionInput")
        button.connection-button(type="button" @click="sendEmail") Get in Touch
</template>

<script>
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";
import JsonFile from "@/assets/json/make-friends.json";

export default {
  name: "MobileHomeConnection",
  components: {
    GlobalAnimationLoader,
  },
  data() {
    return {
      makeFriendsJson: JsonFile,
      nameInput: "",
      locationInput: "",
      descriptionInput: "",
    };
  },
  methods: {
    sendEmail() {
      if (
        this.nameInput === "" ||
        this.locationInput === "" ||
        this.descriptionInput === ""
      ) {
        this.$toast.error("Please Fill the Email Inputs");
      } else {
        const link =
          "mailto:me@chenfrederick.com" +
          "&subject=" +
          encodeURIComponent(
            `Hi Fred, I'm ${this.nameInput} from ${this.locationInput}`
          ) +
          "&body=" +
          encodeURIComponent(this.descriptionInput);
        window.location.href = link;

        this.nameInput = "";
        this.locationInput = "";
        this.descriptionInput = "";
      }
    },
  },
};
</script>

<style lang="scss">
.mobile-home-connection__content {
  display: inline-block;
  margin: 60px 30px 80px;

  @include small-mobile() {
    margin: 60px 15px 80px;
  }

  .content-container {
    .left-column {
      justify-content: center;
      display: flex;
      align-items: center;

      .animation-loader__image {
        width: 100% !important;
      }
    }

    .right-column {
      padding: 20px;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color-primary);
    }

    .subtitle {
      margin-top: 10px;
      font-size: 0.875rem;
      color: var(--text-grey);
      font-weight: 500;
    }

    .sub-content {
      margin-top: 30px;
    }
  }

  .content-input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid $disabledGrey;
    font-weight: 500;
    font-size: 0.8125rem;
    color: $black;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    margin-bottom: 15px;

    &:focus {
      border-color: var(--input-outline-color);
    }
  }

  .connection-button {
    padding: 12px 20px;
    color: var(--button-text);
    background: var(--button-solid-background);
    transition: background 0.2s, color 0.2s;
    font-size: 0.8125rem;
    font-weight: 500;
    border-radius: 4px;
    margin: 10px 0;
    cursor: pointer;
    border: 0;
    outline: 0;
    float: right;
  }
}
</style>
