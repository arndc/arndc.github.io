<template>
  <div>
    <transition name="fade" mode="out-in">>
      <dc-loading-screen v-if="isLoading" />
      <main v-else>
        <dc-landing :background-image-src="backgroundImageSrc" />
        <dc-about-me id="dc-about-me" class="dc-about-me" />
      </main>
    </transition>
  </div>
</template>

<script lang="ts">

    import DcAboutMe from '@/components/DcAboutMe.vue';
    import DcLanding from '@/components/DcLanding.vue';
    import DcLoadingScreen from '@/components/loading/DcLoadingScreen.vue';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {
            DcLanding,
            DcAboutMe,
            DcLoadingScreen
        }
    })
    export default class Home extends Vue {

        isLoading: boolean = true;
        backgroundImageSrc?: string;

        mounted() {
            this.preloadBackgroundImage();
        }

        preloadBackgroundImage(): void {
            const img = new Image();
            img.onload = () => this.isLoading = false;
            img.src = require('@/assets/images/backgrounds/mountains.jpg');
            this.backgroundImageSrc = img.src;
        }

    }

</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .321s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
