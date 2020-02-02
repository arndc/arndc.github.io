<template>
  <div class="hero is-fullheight has-background-white-ter">
    <section class="hero-body container">
      <loading-indicator />
    </section>
  </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import LoadingIndicator from './LoadingIndicator.vue';

    @Component({
        components: { LoadingIndicator }
    })
    export default class LoadingPage extends Vue {}

</script>
