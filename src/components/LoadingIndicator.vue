<template>
  <div class="spinner" />
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class LoadingIndicator extends Vue {}

</script>

<style lang="scss" scoped>
  .spinner {
    $dc-spinner-size: 5rem;

    width: $dc-spinner-size;
    height: $dc-spinner-size;
    background-color: $primary-light;
    border-radius: 100%;
    animation: scale-out 1.23s infinite ease-in-out;

    @media only screen and (min-width: $tablet) {
      width: $dc-spinner-size * 1.5;
      height: $dc-spinner-size * 1.5;
    }
  }

  @keyframes scale-out {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }
</style>
