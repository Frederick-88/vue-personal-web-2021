<template>
  <div class="global-dialog-modal is-show">
    <div class="global-dialog-modal__overlay" @click="$emit('close')"></div>
    <div class="global-dialog-modal__content">
      <button
        type="button"
        class="icon-close content__close-icon"
        @click="$emit('close')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalBaseDialog",
};
</script>

<style lang="scss">
.global-dialog-modal {
  color: var(--text-color-primary);
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

.global-dialog-modal__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba($black, 0.65);
  cursor: pointer;
  z-index: 15;
}

.global-dialog-modal__content {
  position: relative;
  z-index: 20;
  width: 100%;
  background: var(--white-black2);
  max-width: 1200px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 4px;
  box-shadow: 0px 26px 26px rgba(10, 31, 68, 0.12),
    0px 0px 1px rgba(10, 31, 68, 0.1);
  line-height: 1.6;

  @include large-monitor {
    max-width: 1500px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--scroll-color);
  }

  .content__close-icon {
    position: absolute;
    z-index: 3;
    top: 20px;
    right: 30px;
    border: 0;
    outline: 0;
    padding: 0;
    background: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--dark-white);
  }
}
</style>
