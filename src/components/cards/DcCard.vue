<template>
  <div>
    <div class="card is-shady">
      <div class="card-image has-text-centered">
        <font-awesome-icon class="dc-icon" :icon="['fa', cardProperties.icon]" />
      </div>
      <div class="card-content">
        <div class="content">
          <h3 class="dc-title has-text-centered">{{ cardProperties.title }}</h3>
          <p class="dc-content">{{ cardProperties.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

    import { DcCardProperties } from '@/components/cards/DcCardProperties';
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DcCard extends Vue {

        @Prop() cardProperties?: DcCardProperties;

    }

</script>

<style lang="scss" scoped>
  .card {
    margin: 0 1rem;
    padding: 2rem 0 1rem;
    background-color: rgba(255, 255, 255, 0.69);
    height: 100%;

    @media only screen and (min-width: $tablet) {
      padding: 3rem 0 2rem;
    }

    .card-image {
      $dc-font-size: 4rem;

      .dc-icon {
        color: #7788af;
        font-size: $dc-font-size;
        font-weight: lighter;

        @media only screen and (min-width: $tablet) {
          font-size: $dc-font-size;
        }

        @media only screen and (min-width: $widescreen) {
          font-size: $dc-font-size * 1.5;
          margin-bottom: 1.64rem;
        }
      }
    }

    .dc-title {
      $dc-font-size: 1.4rem;
      font-size: $dc-font-size;

      @media only screen and (min-width: $widescreen) {
        font-size: $dc-font-size * 1.25;
      }
    }

    .dc-content {
      font-size: 1.1rem;
      text-align: center;
      color: $text-light;
    }
  }
</style>
