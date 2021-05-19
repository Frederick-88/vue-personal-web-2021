<template lang="pug">
  section.mobile-home-banner__content
    div.left-column
      div.left-column__content
        h3.title Hello! I'm 
        h3.title Chen Frederick
        
        p.subtitle 
          | A Passionate 
          span.typing__word-wrapper
            p.typing__height-secure -
            p#typing-word.word
            p.typing__blink |
            p.word.typing__height-secure Developer
          | who thrives in fast paced environment, love to learn new things in technology & empower to deliver quality in advance.
        
        a.mobile-home-banner__button(
          :href="CvFile"
          download="Chen Frederick - CV"
          :class="{'--light': webTheme !== 'darkMode', '--dark' : webTheme === 'darkMode'}"
        ) Download My CV
        a.mobile-home-banner__button(
          v-if="!isSmallMobileDevice"
          href="#skills"
          :class="{'--light': webTheme !== 'darkMode', '--dark' : webTheme === 'darkMode'}"
        ) My Skills

    div.right-column
      GlobalAnimationLoader(:file="workingLaptopJson")
</template>

<script>
import { mapState } from "vuex";
import Cv from "@/assets/images/my-cv.jpeg";
import JsonFile from "@/assets/json/man-work-with-laptop.json";
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";

export default {
  name: "MobileHomeBanner",
  components: {
    GlobalAnimationLoader,
  },
  data() {
    return {
      CvFile: Cv,
      workingLaptopJson: JsonFile,
      isSmallMobileDevice: false,
    };
  },
  computed: {
    ...mapState(["webTheme"]),
  },
  mounted() {
    this.detectSmallMobileUser();
    // typing logic
    const words = ["Fullstack", "Web", "Frontend"];
    let wordQueueNumber = 0;

    const typingEffect = () => {
      let word = words[wordQueueNumber].split("");
      const loopTyping = () => {
        if (word.length > 0) {
          document.getElementById("typing-word").innerHTML += word.shift();
          // word.splice(0, 1);
        } else {
          setTimeout(deletingEffect, 3000);
          return false;
        }
        setTimeout(loopTyping, 250);
      };
      loopTyping();
    };
    const deletingEffect = () => {
      let word = words[wordQueueNumber].split("");
      const loopDeleting = () => {
        if (word.length > 0) {
          word.pop();
          document.getElementById("typing-word").innerHTML = word.join("");
        } else {
          if (words.length > wordQueueNumber + 1) {
            wordQueueNumber++;
          } else {
            wordQueueNumber = 0;
          }
          typingEffect();
          return false;
        }
        setTimeout(loopDeleting, 200);
      };
      loopDeleting();
    };

    typingEffect();
  },
  methods: {
    detectSmallMobileUser() {
      if (screen.width < 375) {
        this.isSmallMobileDevice = true;
      }
    },
  },
};
</script>

<style lang="scss">
.mobile-home-banner__content {
  color: var(--text-color-primary);

  .left-column {
    padding: 30px;
    display: flex;

    .typing__blink {
      animation: blink 0.5s infinite;
    }
    @keyframes blink {
      to {
        opacity: 0;
      }
    }

    .typing__word-wrapper {
      display: inline-flex;

      .word {
        font-weight: 700;
      }
    }

    .typing__height-secure {
      margin-right: 5px;
    }
  }

  .right-column {
    width: 100%;
    justify-content: center;
    display: flex;

    .animation-loader__image {
      width: 100% !important;
    }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1.7;
    max-width: 555px;
    margin: 30px 0;
  }
}

.mobile-home-banner__button {
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 14px 25px;
  background: transparent;
  border: 1px solid var(--button-outline-background);
  color: var(--button-outline-background);
  text-transform: uppercase;
  border-radius: 4px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  margin-right: 15px;
  transition: background 0.3s, color 0.3s, border-color 0.3s;

  @include small-mobile() {
    font-size: 0.75rem;
  }
}
</style>
