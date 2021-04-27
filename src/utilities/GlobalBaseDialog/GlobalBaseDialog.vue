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
          'icon-info-line': isPrimary,
          'icon-checkmark-outline': isSuccess,
          'icon-warning': isDanger || isWarning,
          'is-danger': isDanger,
          'is-warning': isWarning,
        }"
      ></i>

      <h4 class="global-dialog-modal__title" v-if="title">
        {{ title }}
      </h4>
      <p class="global-dialog-modal__text" v-if="text">{{ text }}</p>

      <slot></slot>

      <div v-if="!noButton" class="global-dialog-modal__buttons">
        <GlobalButton
          :is-danger="isDanger"
          :is-warning="isWarning"
          :is-success="isSuccess"
          :is-tall="true"
          :is-primary="!isDanger && !isWarning && !isSuccess"
          @click="$emit('confirm')"
        >
          {{ button1Text }}
        </GlobalButton>

        <GlobalButton
          v-if="!showOneButton"
          :is-outline="true"
          :is-tall="true"
          @click="$emit('close')"
        >
          {{ button2Text }}
        </GlobalButton>
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
     * The first button will be an warning button when set to true
     */
    isWarning: {
      type: Boolean,
      default: false,
    },
    /**
     * The first button will be a danger button when set to true
     */
    isDanger: {
      type: Boolean,
      default: false,
    },
    /**
     * The first button will be a success button when set to true
     */
    isSuccess: {
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
      if (this.isSuccess) classList.push("global-dialog-modal--success");
      if (this.isDanger) classList.push("global-dialog-modal--danger");
      if (this.isWarning) classList.push("global-dialog-modal--warning");

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

  &.icon-checkmark-outline {
    border: solid 25px $success1;
  }

  &.icon-info-line {
    border: solid 25px $primary1;
  }

  &.icon-warning {
    &.is-danger {
      border: solid 25px $danger1;
    }

    &.is-warning {
      border: solid 25px $warning3;
    }
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

  .global-dialog-modal--primary &,
  .global-dialog-modal--success &,
  .global-dialog-modal--danger &,
  .global-dialog-modal--warning & {
    border-top: 6px solid transparent;
  }

  .global-dialog-modal--primary & {
    border-top-color: $primary1;
  }

  .global-dialog-modal--success & {
    border-top-color: $success1;
  }

  .global-dialog-modal--danger & {
    border-top-color: $danger1;
  }

  .global-dialog-modal--warning & {
    border-top-color: $warning3;
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
    margin: 0 10px;
    width: 100%;
  }
}
</style>
