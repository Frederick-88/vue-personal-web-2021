<template lang="pug">
section#my-intro.home-about__content(data-aos="fade-right" data-aos-duration="600")
  div.content-container
    div.left-column
      img.column-image(
        loading="lazy"
        :src="require('@/assets/images/me.jpg')"
      )
    div.right-column
      p.about-subtitle My Intro
      h2.about-title About Me

      p.about-description Professional solution-driven fullstack web3 developer with around 5 years of experience specialize in frontend development who is experienced on building websites along the stages of web development cycle (web2 & web3), created several websites listed on personal web and still counting as a journey for continuous improvements over the years, developing user-focused products on desktop, tablet and mobile. Meeting highest standards of best practices as a developer.

      div.contact-section
        div.section
          div.section-title
            i.icon-user
            p Name
          p.divider :
          p.section-text Frederick Chen
        div.section
          div.section-title
            i.icon-phone
            p Phone
          p.divider :
          p.section-text 0858-3599-8805
        div.section
          div.section-title
            i.icon-email
            p Email
          p.divider :
          p.section-text me@chenfrederick.com
        div.section
          div.section-title
            i.icon-linkedin-line
            p LinkedIn
          p.divider :
          p.section-text Frederick Chen

      h4.interest-title My Interests
      div.interest-section
        div.section-title
          i.icon-music
          p Music
        div.section-title
          i.icon-travel
          p Travel
        div.section-title
          i.icon-film
          p Movie
        div.section-title
          i.icon-sport
          P Sport
</template>

<script>
export default {
  name: "HomeAbout",
};
</script>

<style lang="scss">
.home-about__content {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
  max-width: 900px;

  .content-container {
    display: flex;

    .left-column {
      width: 45%;
      justify-content: center;
      display: flex;
      align-items: center;

      .column-image {
        width: 100%;
      }
    }

    .right-column {
      width: 55%;
      padding: 20px 20px 20px 50px;

      .about-subtitle {
        font-weight: 600;
        color: var(--text-orange-green);
        font-size: 0.875rem;
        text-transform: uppercase;
        margin-bottom: 5px;
      }

      .about-title {
        color: var(--text-color-primary);
        font-weight: 700;
        font-size: 1.75rem;
        margin: 4px 0 20px;
      }

      .about-description {
        color: var(--text-grey);
        font-size: 0.875rem;
        margin-bottom: 8px;
        font-weight: 500;
        line-height: 1.6;
        text-align: justify;
      }
    }
  }

  .contact-section {
    margin: 30px 0;

    .section {
      margin: 15px 0;
      display: flex;
      font-size: 0.875rem;

      .divider {
        margin: 0 30px;
        color: var(--text-color-primary);
        font-weight: 500;
      }

      .section-title {
        display: flex;

        i {
          color: var(--text-orange-green);
          width: 25px;
        }

        p {
          width: 60px;
          font-weight: 600;
          color: var(--text-color-primary);
        }
      }

      .section-text {
        color: var(--text-grey);
        font-weight: 600;
      }
    }
  }

  .interest-title {
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: var(--text-color-primary);
  }

  .interest-section {
    display: flex;
    margin-top: 15px;

    .section-title {
      display: flex;
      margin-right: 15px;
    }

    i {
      color: var(--text-orange-green);
      margin-right: 5px;
    }

    p {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-color-primary);
    }
  }

  @include desktop {
    .about-subtitle {
      font-size: 0.8125rem !important;
    }

    .about-title {
      font-size: 1.5rem !important;
    }
  }
}
</style>
