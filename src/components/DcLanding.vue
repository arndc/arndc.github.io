<template>
  <main class="hero is-fullheight has-background-primary" :style="'background-image: url(' + backgroundImageSrc + ')'">
    <section class="hero-body container">
      <h1 class="dc-logo" data-aos="zoom-out" data-aos-duration="1800">ARNE<small>.</small>DC</h1>
    </section>
    <div class="dc-scroll">
      <div class="dc-scroll-content" @click="onClickChevron">
        <font-awesome-icon class="dc-icon" :icon="['fa', 'chevron-down']" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">

    import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DcLanding extends Vue {

        @Prop() backgroundImageSrc?: string;

        @Emit('next-section')
        onClickChevron(): void {}
    }

</script>

<style lang="scss" scoped>
  main {
    background-repeat: no-repeat;
    background-size: cover;

    .dc-logo {
      $dc-padding-vertical: 0.615rem;
      $dc-padding-horizontal: 2.615rem;
      $dc-font-size: 2.5rem;
      $dc-border-width: 0.1605rem;

      padding: $dc-padding-vertical $dc-padding-horizontal;
      color: white;
      font-size: $dc-font-size;
      font-family: $dc-font-family-light;
      border: white $dc-border-width solid;

      @media only screen and (min-width: $tablet) {
        padding: ($dc-padding-vertical * 2) ($dc-padding-horizontal * 2);
        font-size: $dc-font-size * 2;
        border-width: $dc-border-width * 2;
      }

      small {
        $dc-font-size: 32px;
        font-size: $dc-font-size;

        @media only screen and (min-width: $tablet) {
          font-size: $dc-font-size * 2;
        }
      }
    }
  }
</style>
