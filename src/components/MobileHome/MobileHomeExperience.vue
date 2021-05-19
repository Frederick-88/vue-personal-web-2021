<template lang="pug">
  section#experience.mobile-home-experience__content
    p.subtitle Wonderful Journey
    h2.title My Experience

    div.company-list-carousel__wrapper
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-left(@click="showPrev")
      VueSlickCarousel.company-list-carousel(
        ref="c2"
        :slides-to-scroll="1",
        :slides-to-show="3",
        :arrows="false",
        :dots="false",
        :swipe="false",
        :swipe-to-slide="false",
      )
        div.company-card-list(v-for="experience in experienceLists")
          div.card-list
            img.card-image(:src='experience.logo')
      div.icon-wrapper
        i.carousel-arrow.icon-chevron-right(@click="showNext")

    VueSlickCarousel.main-carousel(
      ref="c1"
      :slides-to-scroll="1",
      :arrows="false"
      :style="{ height: carouselHeight }"
    )
      div.main-card-list(
        v-for="(experience, index) in experienceLists" 
        :ref="`experience-${index}`"
      )
        div.card-list.--left
          img.card-image(:src='experience.logo')
        div.card-list.--right
          h2.card-title {{experience.title}}
          p.card-subtitle {{experience.description}}
          div.tools-section
            p.tools-title Leveraged Skills: 
            div.tools-lists
              span.tool-text(v-for="(skill, index) in experience.skills" :key="index") {{skill}}
</template>

<script>
export default {
  name: "HomeExperience",
  data() {
    return {
      carouselHeight: "auto",
      activeIndex: 0,
      experienceLists: [
        {
          title: "OFFEO SG",
          logo: require("@/assets/images/experience/offeo.jpg"),
          description:
            "Junior Frontend Developer, collaborate together with art director to develop UI & features that give remarkable experience for users. Lead users interactions to be saved in Database by integrating REST API method. Contributed to increased SEO & web performance of OFFEO. Building clean & readable code methodology.",
          skills: [
            "Frontend Development",
            "REST API",
            "Vue.js",
            "Vuex",
            "Nuxt.js",
            "SEO & Web Performance",
            "UNIX System (Linux)",
            "Agile Scrum Development",
            "Git (Bitbucket & Github)",
          ],
        },
        {
          title: "Infinity Batam / Exotica",
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
          title: "Impact Byte Fullstack Javascript Bootcamp",
          logo: require("@/assets/images/experience/impactbyte.png"),
          description:
            "Intensive Bootcamp in Fullstack Major. Learnt frontend, backend & web deployment lessons to become a certified Fullstack Javascript Developer. Doing practices, trainings & finish final project with presentation of our team's software to fellow recruiters from Indonesia & Singapore.",
          skills: [
            "React.js",
            "React Redux",
            "Node.js",
            "Express.js",
            "MongoDB",
            "AWS",
            "Heroku",
            "SCSS & CSS",
            "Javascript",
            "Trello",
            "Github",
            "Responsive Web Design",
          ],
        },
        {
          title: "Glints Industrial Trainer",
          logo: require("@/assets/images/experience/glints.png"),
          description:
            "Provide guidance through newcomers in web development. Become a mentor of javascript & web development. Share best practices, experience, give live code tests & live code trainings.",
          skills: ["Mentoring", "Javascript", "Live Code Interviewer"],
        },
        {
          title: "Fingerfast Laboratory",
          logo: require("@/assets/images/experience/ff.jpg"),
          description:
            "As Intern Graphic Designer, creating Designs, create videos, collaborate in online-queue-ticket-booking application for hospital, create advertisements to support the sales growth of our company & provide support to the founder.",
          skills: [
            "Adobe After Effects",
            "Adobe Premier Pro",
            "Photography & Videography",
            "Digital Marketing",
            "Photoshop",
            "Coreldraw",
            "Sketchup",
          ],
        },
        {
          title: "Leader of Maitreyawira's English Debate Club",
          logo: require("@/assets/images/experience/leader.png"),
          description:
            "Managing Juniors, improve talents, participated in several competitions with teammates & win some, support this community and each family inside to their best versions.",
          skills: [
            "Leadership",
            "Teamwork",
            "Management",
            "English Skill",
            "Public Speaking",
            "Presentation Skills",
          ],
        },
        {
          title: "Collaboration with Exive Interior",
          logo: require("@/assets/images/experience/exive.jpeg"),
          description:
            "Creating 3D Interior & Exterior of 'MICHS BATIK' store, an Interior with Batik & elegant theme located in Jakarta, Indonesia.",
          skills: [
            "Interior & Exterior Design",
            "Lumion",
            "Sketchup",
            "Vray",
            "Photoshop",
          ],
        },
      ],
    };
  },
  methods: {
    checkHeight() {
      const activeTitle = `experience-${this.activeIndex}`;
      console.log(this.activeIndex);
      console.log(this.$refs[activeTitle].offsetHeight);
      const height = this.$refs[activeTitle].offsetHeight;

      this.carouselHeight = height + "px";
    },
    showNext() {
      const maxIndex = this.experienceLists.length - 1;
      this.$refs.c1.next();
      this.$refs.c2.next();

      if (this.activeIndex === maxIndex) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
      this.checkHeight();
    },
    showPrev() {
      const lastContentIndex = this.experienceLists.length - 1;
      this.$refs.c1.prev();
      this.$refs.c2.prev();

      if (this.activeIndex === 0) {
        this.activeIndex = lastContentIndex;
      } else {
        this.activeIndex--;
      }
      this.checkHeight();
    },
  },
};
</script>

<style lang="scss">
.mobile-home-experience__content {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 30px;

  @include small-mobile() {
    margin: 0 15px;
  }

  .subtitle {
    font-weight: 600;
    color: var(--text-orange-green);
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }

  .title {
    color: var(--text-color-primary);
    font-weight: 700;
    font-size: 1.5rem;
    margin: 4px 0 15px;
    text-align: center;
  }

  .main-carousel {
    margin-top: 40px;
    transition: height 0.3s ease-in-out;
  }

  .main-card-list {
    outline: 0;

    .card-list {
      &.--left {
        display: flex;
        justify-content: center;

        .card-image {
          width: 40%;
          background: $white;
        }
      }

      &.--right {
        margin-top: 30px;

        .card-title {
          color: var(--text-color-primary);
          font-size: 1.25rem;
        }

        .card-subtitle {
          text-align: justify;
          line-height: 1.6;
          color: var(--text-grey);
          font-weight: 500;
          font-size: 0.875rem;
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
        font-size: 0.875rem;
        display: flex;
        align-items: center;

        &::before {
          font-family: "icomoon";
          content: $icon-design;
          font-size: 0.875rem;
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
        font-size: 0.6875rem;
        font-weight: 600;
        background-color: var(--button-solid-background-3);
        color: var(--button-text-3);
      }
    }
  }

  .company-list-carousel__wrapper {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .company-list-carousel {
      width: 80%;

      @include small-mobile() {
        width: 84%;
      }
    }

    .icon-wrapper {
      width: 10%;
      display: flex;
      justify-content: center;

      @include small-mobile() {
        width: 8%;
      }

      .carousel-arrow {
        padding: 10px;
        color: var(--button-text);
        background: var(--button-solid-background);
        transition: background 0.2s, color 0.2s;
        border-radius: 4px;
        margin: 10px 0;
        cursor: pointer;

        @include small-mobile() {
          padding: 8px;
          font-size: 0.875rem;
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
      height: 80px;
      width: 80px;
      padding: 20px;
      margin: 0 5px;
      background: $white;
      border-radius: 50%;

      @include small-mobile() {
        height: 65px;
        width: 65px;
        padding: 10px;
      }

      @include mini-mobile() {
        height: 70px;
        width: 70px;
        padding: 15px;
      }

      @include large-mobile() {
        height: 100px;
        width: 100px;
        padding: 20px;
      }
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
