<template lang="pug">
  section.mobile-navigation__bar
    div
      router-link.nav__item.main-nav(to="/") ChenFrederick.com
      hr.nav__line
    div.mobile-navbar__overlay(v-if="isActive" @click="isActive = false")
    div.mobile-navbar__menu(
      :class="{ 'is-active': isActive }"
    )
      button.icon__button(
        type="button"
        :class="{'is-active': isActive, 'is-scrolled': isScrolled}"
        @click="isActive = !isActive"
      )
        span.line.line--top
        span.line.line--middle
        span.line.line--bottom

      button.mobile-darkmode__toggle(@click="toggleTheme" aria-label="Toggle themes")
        span.icon-sun-solid(v-if="this.webTheme == 'darkMode'")
        span.icon-moon-solid(v-else)


      ul.mobile-navigation__menu
        li.navigation__item(
          v-for='nav in navigation',
          :key='nav.name',
        )
          a.nav-link(
            :href='nav.link',
          ) {{ nav.name }}
      div.mobile-social-icons
        a.social-media__button.icon-email(href="mailto:me@chenfrederick.com?subject=Hi Fred!&body=I'm (name) from (where) (please drop your message kindly here)")
        a.social-media__button.icon-linkedin-solid(href="https://www.linkedin.com/in/chen-frederick" target="blank")
        a.social-media__button.icon-whatsapp(href="https://wa.link/fqa4e7" target="blank")
        a.social-media__button.icon-github(href="https://github.com/Frederick-88" target="blank")
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MobileNavbar",
  data() {
    return {
      isActive: false,
      isScrolled: false,
      navigation: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "My Intro",
          link: "#my-intro",
        },
        {
          name: "Works",
          link: "#works",
        },
        {
          name: "Experience",
          link: "#experience",
        },
        {
          name: "Skills",
          link: "#skills",
        },
      ],
    };
  },
  computed: {
    ...mapState(["webTheme"]),
  },
  methods: {
    ...mapMutations(["setWebTheme"]),
    toggleTheme() {
      if (this.webTheme === "darkMode") {
        this.setWebTheme("");
      } else {
        this.setWebTheme("darkMode");
      }
      document.documentElement.setAttribute("data-theme", this.webTheme);
      localStorage.setItem("theme", this.webTheme);
    },
  },
};
</script>

<style lang="scss">
.mobile-navigation__bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 25px;
  transition: background 0.25s ease-in-out;
  z-index: 10;

  &.is-scrolled {
    padding: 5px 0;
    background: $darkGrey3;
  }

  .nav__item {
    display: block;
    font-weight: 500;
    color: var(--text-color-primary);
    text-decoration: none;
    margin-right: 30px;
    font-size: 0.875rem;
    text-transform: uppercase;

    &.main-nav {
      color: var(--text-color-secondary);
      font-size: 1rem;
      margin-right: 45px;
      text-transform: uppercase;
    }
  }

  .nav__line {
    width: 60px;
    margin-left: 0;
    border-color: var(--text-color-secondary);
  }

  .mobile-navbar__overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0%;
    left: 0%;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .mobile-navbar__menu {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    transform: translateX(260px);
    transition: transform 0.3s cubic-bezier(0, 0, 0, 1);

    &.is-active {
      transform: translateX(0);

      .icon__button {
        .line {
          background: var(--button-text-2);
        }

        .line--top {
          transform: translateY(8px) rotateZ(45deg);
        }

        .line--middle {
          opacity: 0;
        }

        .line--bottom {
          transform: translateY(-8px) rotateZ(-45deg);
        }
      }
    }
    .icon__button {
      position: absolute;
      width: 24px;
      height: 20px;
      right: 275px;
      top: 23px;
      outline: 0;
      border: 0;
      background: none;

      &.is-scrolled {
        top: 13px;
      }

      &.is-active {
        width: 28px;
        right: 13px;
        z-index: 6;
        top: 27px;

        .line {
          width: 70%;
        }
      }

      .line {
        width: 100%;
        height: 2px;
        background: var(--text-color-secondary);
        top: 0;
        left: 0;
        position: absolute;
        display: block;
        transition: opacity 0.25s ease-in-out, width 0.25s ease-in-out,
          transform 0.25s ease-in-out;
      }

      .line--middle {
        top: 8px;
      }

      .line--bottom {
        top: 16px;
      }
    }
  }

  .mobile-navigation__menu {
    background: var(--button-solid-background-2);
    position: absolute;
    padding: 70px 30px 30px;
    width: 260px;
    height: 100vh;
    top: 0;
    right: 0;
    margin: 0;

    .navigation__item {
      height: 40px; // so clickable
      color: $blue;
      list-style: none;

      .nav-link {
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        color: var(--button-text-2);
      }
    }
  }

  .mobile-darkmode__toggle {
    position: absolute;
    right: 150px;
    top: 20px;
    z-index: 5;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 80px;
    height: 32px;
    border: 2px solid var(--button-text-2);
    color: var(--button-text-2);
    outline: 0;
    background: none;
    border-radius: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.2s, border 0.2s;

    span {
      transition: transform 0.75s;
    }

    .icon-sun-solid {
      font-size: 1.25rem;
      transform: translateX(-15px);
    }

    .icon-moon-solid {
      font-size: 1.125rem;
      transform: translateX(15px);
    }
  }

  .mobile-social-icons {
    display: flex;
    align-items: center;
    position: absolute;
    top: 275px;
    right: 85px;

    .social-media__button {
      padding: 15px 10px;
      display: block;
      border-radius: 4px;
      background: none;
      color: var(--button-text-2);
      font-size: 1.125rem;
      cursor: pointer;
      border: 0;
      outline: 0;
      text-decoration: none;
      transition: color 0.2s;
    }
  }
}
</style>
