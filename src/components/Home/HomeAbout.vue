<template lang="pug">
  section#my-intro.home-about__content
    div.content-container
      div.left-column
        img.column-image(:src="require('@/assets/images/me.jpeg')")
      div.right-column
        p.about-subtitle My Intro
        h2.about-title About Me
        p.about-description I believe new challenges and obstacles are made for a better version of me.
        p.about-description I empower learning and hardwork is the key to deliver quality in advance.
        p.about-description I could work by individual and team depends on company needs. I trust in every condition, there are space to grow and chance to learn more. So i always give maximum effort in my works.

        div.contact-section
          div.section
            div.section-title
              i.icon-user
              p Name
            p.divider :
            p.section-text Chen Frederick
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
export default {};
</script>

<style lang="scss">
.home-about__content {
  display: flex;
  justify-content: center;
  margin: 120px 150px 0;

  .content-container {
    display: flex;
    width: 65%;

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
        margin: 4px 0 15px;
      }

      .about-description {
        color: var(--text-grey);
        font-size: 0.875rem;
        margin-bottom: 8px;
        font-weight: 500;
        line-height: 1.4;
        text-align: justify;
      }
    }
  }

  .contact-section {
    margin: 40px 0;

    .section {
      margin: 10px 0;
      display: flex;
      font-size: 0.875rem;

      .divider {
        margin: 0 40px 0 30px;
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
}

@media only screen and (max-width: 1450px) {
  .home-about__content {
    .content-container {
      width: 80%;
    }
  }
}
</style>
