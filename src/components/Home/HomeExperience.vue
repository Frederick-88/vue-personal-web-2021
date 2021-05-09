<template lang="pug">
  section.home-experience__content
    p.subtitle Wonderful Journey
    h2.title My Experience
    VueSlickCarousel.main-carousel(
      ref="c1"
      :arrows="false"
    )
      div.main-card-list(v-for="experience in experienceLists")
        div.card-list.--left
          img.card-image(:src='experience.logo')
        div.card-list.--right
          h2.card-title {{experience.title}}
          p.card-subtitle {{experience.description}}
          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in experience.skills" :key="index") {{skill}}
    div.company-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.company-list-carousel(
        ref="c2"
        :slides-to-show="6"
        :arrows="false"
        :dots="true"
        :swipe="false"
        :swipe-to-slide="false"
      )
        div.company-card-list(v-for="experience in experienceLists")
          div.card-list
            img.card-image(:src='experience.logo')
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")
</template>

<script>
export default {
  name: "HomeExperience",
  data() {
    return {
      experienceLists: [
        {
          title: "OFFEO SG",
          logo: require("@/assets/images/experience/offeo.jpg"),
          description:
            "Junior Frontend Developer, collaborate together with art director to develop UI that gives remarkable experience for users. Lead users' interactions to be saved in DB by integrating REST API method. Contributed to increased SEO & web performance of OFFEO. Building clean & readable code methodology.",
          skills: [
            "Frontend Development",
            "REST API",
            "Vue.js",
            "Vuex",
            "Nuxt.js",
            "SEO & Web Performance",
          ],
        },
        {
          title: "Infinity Batam (Exotica Batam)",
          logo: require("@/assets/images/experience/infinity.jpeg"),
          description:
            "As Senior Graphic Designer, work closely to founder to bring 3D interior & graphic design ideas into reality, managing junior team, managing event preparations with production team, held meetings with big companies like RIWAY, JOTUN, SIIX, PHILIPS, etc.",
          skills: [
            "Interior & Graphic Design",
            "Teamwork & Management",
            "Photoshop",
            "Coreldraw",
            "Lumion",
            "Sketchup",
            "Vray",
          ],
        },
        {
          title: "Impact Byte Fullstack Bootcamp",
          logo: require("@/assets/images/experience/impactbyte.png"),
          description:
            "Intensive Bootcamp in Fullstack Major, Learnt Frontend & Backend Lessons. Learnt ReactJS, ReactRedux, ExpressJS, Javascript, Bootstrap, Etc.",
          skills: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Glints Industrial Trainer",
          logo: require("@/assets/images/experience/glints.png"),
          description: "Provide guidance through newcomers in web development.",
          skills: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Fingerfast Laboratory",
          logo: require("@/assets/images/experience/ff.jpg"),
          description:
            "As Intern Graphic Designer, creating Designs, create videos, collaborate in online-queue-ticket-booking application for hospital, create advertisements to support our team better.",
          skills: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Leader of Maitreyawira's English Debate Club",
          logo: require("@/assets/images/experience/leader.png"),
          description:
            "Managing Juniors, improve talents, participated in several competitions with teammates, develop this team to their best versions.",
          skills: ["Graphic Design", "Interior Design"],
        },
        {
          title: "Collaboration with Exive Interior",
          logo: require("@/assets/images/experience/exive.jpeg"),
          description:
            "Creating 3D Interior & Exterior of 'MICHS BATIK' store, an Interior with Batik & elegant theme.",
          skills: ["Graphic Design", "Interior Design"],
        },
      ],
    };
  },
  methods: {
    showNext() {
      this.$refs.c1.next();
      this.$refs.c2.next();
    },
    showPrev() {
      this.$refs.c1.prev();
      this.$refs.c2.prev();
    },
  },
};
</script>

<style lang="scss">
.home-experience__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 70px auto;
  max-width: 900px;
  padding: 30px;

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }

  .title {
    color: var(--text-color-primary);
    font-weight: 700;
    font-size: 1.75rem;
    margin: 4px 0 15px;
    text-align: center;
  }

  .main-card-list {
    display: flex !important;
    align-items: center;
    margin: 30px 0 50px;
    outline: 0;

    .card-list {
      padding-right: 20px;

      &.--left {
        width: 45%;
        display: flex;
        justify-content: center;

        .card-image {
          width: 75%;
          background: $white;
        }
      }

      &.--right {
        width: 55%;

        .card-title {
          color: var(--text-color-primary);
        }

        .card-subtitle {
          text-align: justify;
          line-height: 1.4;
          color: var(--text-grey);
          font-weight: 500;
          font-size: 0.9375rem;
          margin: 15px 0 25px;
        }
      }
    }

    .tools-section {
      text-align: left;

      .tools-title {
        margin-bottom: 8px;
        color: var(--text-grey);
        font-weight: 500;
        font-size: 0.9375rem;

        &::before {
          font-family: "icomoon";
          content: $icon-design;
          font-size: 1rem;
          margin-right: 8px;
        }
      }

      .tools-lists {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .tool-text {
        padding: 5px 8px;
        border-radius: 4px;
        margin: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .company-list-carousel__wrapper {
    display: flex;
    align-items: center;

    .company-list-carousel {
      width: 90%;
    }

    .icon-wrapper {
      width: 5%;
      display: flex;
      justify-content: center;

      .carousel-arrow {
        padding: 10px;
        color: var(--button-text);
        background: var(--button-solid-background);
        transition: background 0.2s, color 0.2s;
        border-radius: 4px;
        margin: 10px 0;
        cursor: pointer;

        &:hover {
          background: var(--button-text);
          color: var(--button-solid-background);
        }
      }
    }
  }

  .company-card-list {
    display: flex !important;
    align-items: center;
    flex-direction: column;
    outline: 0;

    .card-list {
      height: 100px;
      width: 100px;
      padding: 20px;
      margin: 0 10px;
      background: $white;
      border-radius: 50%;
    }

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // rewrite vue slick carousel stylings
  .slick-dots {
    bottom: -40px;

    li,
    li.slick-active {
      button:before {
        color: var(--dark-white);
      }
    }
  }
}
</style>
