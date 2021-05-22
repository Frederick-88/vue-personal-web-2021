<template lang="pug">
  section.home-banner__content
    div.left-column(data-aos="fade-down" data-aos-duration="1000")
      div.left-column__content
        h3.title Hello!
        h3.title I'm Chen Frederick
        
        p.subtitle 
          | A Passionate 
          span.typing__word-wrapper
            p.typing__height-secure -
            p#typing-word.word
            p.typing__blink |
            p.word.typing__height-secure Developer
          | who thrives in fast paced environment, love to learn new things in technology & empower to deliver quality in advance.
        
        a.home-banner__button(
          :href="CvFile"
          download="Chen Frederick - CV"
          :class="{'--light': webTheme !== 'darkMode', '--dark' : webTheme === 'darkMode'}"
        ) Download My CV
        a.home-banner__button(
          href="#skills"
          :class="{'--light': webTheme !== 'darkMode', '--dark' : webTheme === 'darkMode'}"
        ) My Skills

    div.right-column(data-aos="fade-down" data-aos-duration="1000")
      GlobalAnimationLoader(:file="workingLaptopJson")
</template>

<script>
import { mapState } from "vuex";
import Cv from "@/assets/images/my-cv.jpeg";
import JsonFile from "@/assets/json/man-work-with-laptop.json";
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";

export default {
  name: "HomeBanner",
  components: {
    GlobalAnimationLoader,
  },
  data() {
    return {
      CvFile: Cv,
      workingLaptopJson: JsonFile,
    };
  },
  computed: {
    ...mapState(["webTheme"]),
  },
  mounted() {
    // typing logic
    const words = ["Fullstack", "Web", "Frontend"];
    let wordQueueNumber = 0;

    function typingEffect() {
      let word = words[wordQueueNumber].split("");
      var loopTyping = function() {
        if (word.length > 0) {
          document.getElementById("typing-word").innerHTML += word.shift();
        } else {
          setTimeout(deletingEffect, 3000);
          return false;
        }
        setTimeout(loopTyping, 250);
      };
      loopTyping();
    }
    function deletingEffect() {
      let word = words[wordQueueNumber].split("");
      var loopDeleting = function() {
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
    }

    typingEffect();
  },
};
</script>

<style lang="scss">
.home-banner__content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
  color: var(--text-color-primary);
  margin: 50px 100px 0;

  .left-column {
    flex: 55%;
    width: 55%;
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
    flex: 45%;
    width: 45%;
    justify-content: center;
    display: flex;

    .animation-loader__image {
      width: 100% !important;
      max-width: 600px;
      min-width: 500px;
    }
  }

  .title {
    font-size: 3.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.125rem;
    line-height: 1.7;
    max-width: 555px;
    margin: 30px 0;
  }
}

.home-banner__button {
  font-size: 0.825rem;
  font-weight: 600;
  padding: 14px 30px;
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

  &.--light {
    &:hover {
      background: var(--button-outline-hover-bg);
      color: var(--button-text);
    }
  }

  &.--dark {
    &:hover {
      color: var(--button-outline-hover-bg);
      border-color: var(--button-outline-hover-bg);
    }
  }
}
</style>
