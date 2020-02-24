<template>
  <div v-bind:class="['dc-scroll', dark ? 'dc-scroll-dark-mode': '', pulse ? 'dc-pulse' : 'dc-static']">
    <h1 class="dc-scroll-title"> {{ this.nextSectionName }} </h1>
    <div class="dc-scroll-content" @click="onClickScrollToSection">
      <font-awesome-icon class="dc-icon" :icon="['fa', 'chevron-down']" />
    </div>
  </div>
</template>

<script lang="ts">

    import jump from 'jump.js';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DcSectionScroller extends Vue {

        @Prop() nextSectionSelector!: string;
        @Prop() nextSectionName?: string;
        @Prop() dark?: boolean;
        @Prop() pulse?: boolean;

        onClickScrollToSection(): void {
            jump(this.nextSectionSelector);
        }

    }

</script>

<style lang="scss" scoped>
  .dc-scroll {
    display: block;
    position: absolute;
    bottom: 2.78rem;
    width: 15rem;
    left: 0;
    right: 0;
    margin: 0 auto;

    &.dc-pulse {
      .dc-scroll-title {
        font-size: 1.3rem;
      }

      .dc-scroll-content {
        animation: dc-pulse 2.5s infinite;
      }
    }

    &.dc-static {
      .dc-scroll-title {
        font-size: 1.1rem;
      }

      .dc-scroll-content {
        $dc-scroll-content-dimension: 3.75rem;
        width: $dc-scroll-content-dimension;
        height: $dc-scroll-content-dimension;
        margin-bottom: -1.5rem;

        .dc-icon {
          font-size: 1.5rem;
        }
      }
    }

    &.dc-scroll-dark-mode {
      $dc-dark-mode-color: rgb(137, 155, 181);

      .dc-scroll-title {
        color: $dc-dark-mode-color !important;
      }

      .dc-scroll-content {
        border-color: $dc-dark-mode-color !important;

        .dc-icon {
          color: $dc-dark-mode-color !important;
        }
      }
    }

    .dc-scroll-title {
      margin-bottom: 1rem;
      font-family: $dc-font-family-bold;
      letter-spacing: .5rem;
      text-align: center;
      text-transform: uppercase;
    }

    .dc-scroll-content {
      $dc-scroll-content-dimension: 4.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: $dc-scroll-content-dimension;
      height: $dc-scroll-content-dimension;
      border-radius: 2.5rem;
      border: $white .2rem solid;

      &:hover {
        box-shadow: 0 0 .2rem .16rem opacify(#d6d6d6, .25);
      }

      .dc-icon {
        margin-bottom: -.25rem;
        font-size: 2.5rem;
        color: $white;
      }

      @keyframes dc-pulse {
        0% {
          transform: translate(0, 0); }

        50% {
          transform: translate(0, 1.5rem); }

        100% {
          transform: translate(0, 0); }
      }
    }
  }
</style>
