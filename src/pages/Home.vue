<template>
  <div>
    <transition name="fade" mode="out-in">>
      <loading-page v-if="isLoading" />
      <main v-else class="hero is-fullheight has-background-primary">
        <section class="hero-body container">
          <h1 class="dc-logo">ARNE<small>.</small>DC</h1>
        </section>
      </main>
    </transition>
  </div>
</template>

<script lang="ts">

    import LoadingPage from '@/components/LoadingPage.vue';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: { LoadingPage }
    })
    export default class Home extends Vue {

        isLoading: boolean = true;

        mounted() {
            this.preloadBackgroundImage();
        }

        preloadBackgroundImage() {
            const img = new Image();
            img.onload = () => this.isLoading = false;
            img.src = require('@/assets/images/backgrounds/mountains.jpg');
        }

    }

</script>

<style lang="scss" scoped>
  main {
    background-image: url("../assets/images/backgrounds/mountains.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    .dc-logo {
      $dc-padding-vertical: 0.615rem;
      $dc-padding-horizontal: 2.615rem;
      $dc-font-size: 3.21rem;
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .321s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
