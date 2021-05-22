<template>
  <div class="global-dialog-modal is-show global-dialog-modal--primary">
    <div class="global-dialog-modal__overlay" @click="$emit('close')"></div>
    <div class="global-dialog-modal__content">
      <i
        class="icon global-dialog-modal__icon"
        :class="{
          'icon-information-solid': isPrimary,
        }"
      ></i>
      <slot></slot>
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
    /**
     * The first button will be an primary button when set to true
     * and there will be information icon on top
     */
    isPrimary: {
      type: Boolean,
      default: false,
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
}

.global-dialog-modal__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  width: 0px;
  height: 60px;
  color: $white;

  position: absolute;
  top: -12px;
  left: 90px;
  border-bottom: solid 10px transparent !important;
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
  background: rgba($black, 0.35);
  cursor: pointer;
  z-index: 15;
}

.global-dialog-modal__content {
  position: relative;
  z-index: 20;
  width: 100%;
  background: $white;
  max-width: 1200px;
  max-height: 90vh;
  border-radius: 4px;
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
</style>
