<template>
  <div
    class="global-dialog-modal"
    :class="[
      { 'is-show': isShow, 'multiline-buttons': multilineButtons },
      dialogClass,
    ]"
  >
    <div class="global-dialog-modal__overlay" @click="$emit('close')"></div>
    <div class="global-dialog-modal__content" :style="styleObject">
      <i
        class="icon global-dialog-modal__icon"
        :class="{
          'icon-information-solid': isPrimary,
        }"
      ></i>

      <h4 class="global-dialog-modal__title" v-if="title">
        {{ title }}
      </h4>
      <p class="global-dialog-modal__text" v-if="text">{{ text }}</p>

      <slot></slot>

      <div v-if="!noButton" class="global-dialog-modal__buttons">
        <button
          class="global-button"
          :is-tall="true"
          :is-primary="true"
          @click="$emit('confirm')"
        >
          {{ button1Text }}
        </button>

        <button
          class="global-button"
          v-if="!showOneButton"
          :is-outline="true"
          :is-tall="true"
          @click="$emit('close')"
        >
          {{ button2Text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalBaseDialog",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    /**
     * The first button will be an primary button when set to true
     * and there will be information icon on top
     */
    isPrimary: {
      type: Boolean,
      default: false,
    },
    /**
     * There will be no cancel button when set to true
     */
    showOneButton: {
      type: Boolean,
      default: false,
    },
    /**
     * To make a plain dialog with no button
     */
    noButton: {
      type: Boolean,
      default: false,
    },
    /**
     * Change 1st button name
     */
    button1Text: {
      type: String,
      default: "Confirm",
    },
    /**
     * Change 2nd button name
     */
    button2Text: {
      type: String,
      default: "Cancel",
    },
    /**
     * By default with of the content is 100%
     * with max width 570px
     */
    width: {
      type: Number,
      default: 0,
    },
    /**
     * make buttons not stand in the same line, break a new line for the other button.
     */
    multilineButtons: { type: Boolean, default: false },
  },
  computed: {
    styleObject() {
      const styleObject = {};

      if (this.width) {
        styleObject.width = this.width + "px";
      }

      return styleObject;
    },
    dialogClass() {
      const classList = [];

      if (this.isPrimary) classList.push("global-dialog-modal--primary");

      return classList;
    },
  },
};
</script>

<style lang="scss">
.global-dialog-modal {
  color: $darkGrey4;
  display: none;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;

  &.is-show {
    display: flex;
  }

  &.multiline-buttons {
    .global-dialog-modal__buttons {
      flex-direction: column;
      .btn {
        margin: 5px;
      }
    }
  }
}

.global-dialog-modal__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  width: 0px;
  height: 35px;
  color: $white;

  position: absolute;
  top: -12px;
  left: 90px;
  border-bottom: solid 15px transparent !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &::before {
    margin-top: -20px;
  }

  &.icon-information-solid {
    border: solid 25px var(--button-solid-background);
  }
}

.global-dialog-modal__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.15);
  cursor: pointer;
}

.global-dialog-modal__content {
  position: relative;
  z-index: 2;
  width: 100%;
  background: #fff;
  max-width: 570px;
  max-height: 90vh;
  border-radius: 4px;
  padding: 50px;
  box-shadow: 0px 26px 26px rgba(10, 31, 68, 0.12),
    0px 0px 1px rgba(10, 31, 68, 0.1);
  line-height: 1.4;

  .global-dialog-modal--primary & {
    border-top: 6px solid transparent;
  }

  .global-dialog-modal--primary & {
    border-top-color: var(--button-solid-background);
  }
}

.global-dialog-modal__title {
  font-weight: bold;
  margin-top: 0;
}

.global-dialog-modal__text {
  margin-top: 0;
}

.global-dialog-modal__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  margin: 20px auto 0;

  .global-button {
    display: block;
    margin: 10px;
    font-size: 0.825rem;
    padding: 15px 30px;
    margin: 0 10px;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: box-shadow 0.2s cubic-bezier(0, 0, 0, 1),
      color 0.2s cubic-bezier(0, 0, 0, 1),
      background 0.2s cubic-bezier(0, 0, 0, 1);
    background: var(--button-solid-background);
    color: var(--button-text);
    cursor: pointer;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
    outline: 0;
    border: 0;

    &:hover {
      box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
      background: var(--button-text);
      color: var(--button-solid-background);
    }
  }
}
</style>
