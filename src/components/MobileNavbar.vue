<template lang="pug">
  section.mobile-navigation__bar(
    :class="{ 'is-scrolled': isScrolled }"
  )
    div
      router-link.nav__item.main-nav(to="/") ChenFrederick.com
      span.nav__line
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
        a.social-media__button.icon-linkedin-solid(href="https://www.linkedin.com/in/frederick-chen" target="_blank")
        a.social-media__button.icon-whatsapp(href="https://wa.me/6285835998805" target="_blank")
        a.social-media__button.icon-github(href="https://github.com/frederick-88" target="_blank")
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["setWebTheme"]),
    handleScroll() {
      const position = document.documentElement;
      this.isScrolled = position.scrollTop > 65;
    },
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
  padding: 15px 25px;
  transition: background 0.15s ease-in-out, padding 0.15s ease-in-out;
  z-index: 15;
  animation: fade-down 2s;

  &.is-scrolled {
    background: var(--background-color);
    padding: 10px 25px;
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
    display: block;
    width: 60px;
    height: 2px;
    margin-top: 8px;
    background: var(--text-color-secondary);
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
      right: 280px;
      top: 20px;
      outline: 0;
      border: 0;
      background: none;
      z-index: 55;

      &.is-scrolled {
        top: 15px;
      }

      &.is-active {
        width: 28px;
        right: 13px;
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
    z-index: 50;

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
    z-index: 55;
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
    z-index: 55;

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
