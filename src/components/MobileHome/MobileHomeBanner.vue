<template lang="pug">
section.mobile-home-banner__content
  div.left-column
    div.left-column__content
      h3.title Hello! I'm 
      h3.title Frederick Chen
      
      p.subtitle 
        | Professional Solution-Driven 
        span.typing__word-wrapper
          p.typing__height-secure -
          p#mobile-typing-word.word
          p.typing__blink |
          p.word.typing__height-secure Developer
        | with around 5 years of experience who focus on delivering key outcomes, collaborate together with teams to meet organization targets with more satisfied users/customers, and quickly adapt to new learnings.
      
      a.mobile-home-banner__button(
        :href="resumeFile"
        download="Frederick Chen's Resume"
      ) Download My Resume

  div.right-column
    GlobalAnimationLoader(:file="workingLaptopJson")
</template>

<script>
import JsonFile from "@/assets/json/man-work-with-laptop.json";
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";

export default {
  name: "MobileHomeBanner",
  components: {
    GlobalAnimationLoader,
  },
  data() {
    return {
      resumeFile: `${process.env.BASE_URL}my-resume.pdf`,
      workingLaptopJson: JsonFile,
    };
  },
  mounted() {
    // typing logic
    const words = ["Fullstack", "Web", "Frontend"];
    let wordQueueNumber = 0;

    const typingEffect = () => {
      let word = words[wordQueueNumber].split("");
      const loopTyping = () => {
        if (word.length > 0) {
          document.getElementById("mobile-typing-word").innerHTML +=
            word.shift();
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
          document.getElementById("mobile-typing-word").innerHTML =
            word.join("");
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
};
</script>

<style lang="scss">
.mobile-home-banner__content {
  position: relative;
  z-index: 10;
  color: var(--text-color-primary);

  .left-column {
    padding: 30px;
    display: flex;
    animation: fade-down 2s;

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
    animation: fade-right 2s;

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

  .mobile-home-banner__button {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 14px 20px;
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
  }
}

@include small-mobile() {
  .mobile-home-banner__content {
    .mobile-home-banner__button {
      font-size: 0.75rem;
    }
  }
}

@include large-mobile() {
  .mobile-home-banner__content {
    .left-column {
      padding-bottom: 0;
    }

    .right-column {
      margin: 0 auto;
      width: 85%;
    }
  }
}

@include tablet() {
  .mobile-home-banner__content {
    max-width: 650px;
    margin: 0 auto;
    width: 90%;

    .left-column {
      padding-bottom: 0;
    }

    .right-column {
      margin: 0 auto;
      width: 80%;
    }
  }
}
</style>
