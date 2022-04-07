<template lang="pug">
  section.home-banner__content
    div.left-column
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
          | who focus on delivering key outcomes, collaborate together with organization that he work for to meet organization targets with more satisfied users/customers, and quickly adapt to new learnings.
        
        a.home-banner__button(
          :href="CvFile"
          download="Chen Frederick - CV"
        ) Download My CV
        a.home-banner__button(
          href="#skills"
        ) My Skills

    div.right-column
      GlobalAnimationLoader(:file="workingLaptopJson")
</template>

<script>
import Cv from "@/assets/images/my-resume.jpg";
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
  width: 85%;
  max-width: 1400px;
  margin: 50px auto 0;

  .left-column,
  .right-column {
    display: flex;
    animation: fade-down 2s;
  }

  .left-column {
    flex: 55%;
    width: 55%;
    padding-right: 30px;
    padding-top: 30px;

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

    .animation-loader {
      margin-top: -15px;
    }

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

    &:hover {
      background: var(--button-outline-hover-bg);
      color: var(--button-text);
      border-color: var(--button-outline-hover-bg);
    }
  }

  @include large-monitor {
    max-width: 1700px;
  }

  @include desktop {
    .title {
      font-size: 2.75rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .home-banner__button {
      font-size: 0.75rem;
    }
  }
}
</style>
