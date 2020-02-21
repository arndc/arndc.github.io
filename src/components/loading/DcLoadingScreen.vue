<template>
  <div class="hero is-fullheight">
    <section class="hero-body container">
      <loading-indicator />
    </section>
  </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import DcLoadingIndicator from './DcLoadingIndicator.vue';

    @Component({
        components: { LoadingIndicator: DcLoadingIndicator }
    })
    export default class DcLoadingScreen extends Vue {}

</script>
