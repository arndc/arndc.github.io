<template>
  <main class="hero">
    <div class="hero-body is-paddingless">
      <div class="tile is-vertical has-text-centered">

        <section class="dc-section" data-aos="fade-up">
          <h2 class="title dc-title">Bio</h2>
          <div class="dc-bio is-flex">
            <figure class="image" data-aos="zoom-in-up" data-aos-anchor=".dc-bio">
              <img class="is-rounded" src="@/assets/images/me.jpg" alt="Me (Arne De Cock)">
            </figure>
            <div class="has-text-left dc-texts">
              <p class="box" data-aos="fade-up" data-aos-delay="400" data-aos-anchor=".dc-texts">
                Hi, my name is Arne De Cock and welcome to my site
                <font-awesome-icon class="dc-icon" :icon="['far', 'laugh-beam']" />
              </p>
              <p class="box" data-aos="fade-up" data-aos-delay="600" data-aos-anchor=".dc-texts">
                I'm a developer by day
                <font-awesome-icon class="dc-icon" :icon="['fa', 'sun']" />
                <span class="dc-code has-text-weight-bold"> && </span>
                also by night
                <font-awesome-icon class="dc-icon" :icon="['fa', 'moon']" />
              </p>
              <p class="box" data-aos="fade-up" data-aos-delay="800" data-aos-anchor=".dc-texts">
                Next to that I really love watching TV series, movies and playing games
                <span class="dc-hashtag">#online #offline</span>
              </p>
              <p class="box" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor=".dc-texts">
                Oh yeah, one more thing. Be aware of my puns, they are on point!
                <span class="dc-hashtag">#punmaster</span>
              </p>
            </div>
          </div>
        </section>

        <section class="dc-section" data-aos="fade-up" data-aos-duration="800">
          <h2 class="title dc-title">Trademarks</h2>
          <div class="dc-container is-fullwidth">
            <div class="columns">
              <dc-card
                  class="column is-4" v-for="properties in cardPropertiesList"
                  :key="properties.title"
                  :card-properties="properties"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  </main>
</template>

<script lang="ts">

    import DcCard from '@/components/cards/DcCard.vue';
    import { DcCardProperties } from '@/components/cards/DcCardProperties';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: { DcCard }
    })
    export default class DcAboutMe extends Vue {

        private cardPropertiesList!: Array<DcCardProperties>;

        created() {
            this.cardPropertiesList = [
                new DcCardProperties('hiking', 'Quick Learner', 'With a drive to explore new things'),
                new DcCardProperties('feather-alt', 'Clean Code', 'With a focus on readability & elegance'),
                new DcCardProperties('route', 'Clear Vision', 'With an open mind & strong opinion'),
            ];
        }
    }

</script>

<style lang="scss" scoped>
  main {
    background: url('../assets/images/backgrounds/foggy-mountains.png') no-repeat,
    linear-gradient(180deg, $background 0%, opacify($background-darker, 0.7399334733893557) 33%, $background 85%);
    background-size: contain;
    padding-bottom: 3.2rem;

    @media only screen and (min-width: $widescreen) {
      background: url('../assets/images/backgrounds/foggy-mountains-widescreen.png') no-repeat center top,
      linear-gradient(180deg, $background 0%, $background-darker 35%, $background 85%);
      background-size: contain;
      padding-bottom: 6.4rem;
    }

    .dc-section {
      margin: 2rem 0;

      .dc-title {
        $dc-padding-vertical: 1.23rem;
        $dc-padding-horizontal: 1rem;
        $dc-font-size: 1.5rem;
        $dc-border-width: 0.05rem;

        display: inline-block;
        padding: $dc-padding-vertical $dc-padding-horizontal;
        color: $primary-light;
        font-size: $dc-font-size;
        font-family: $dc-font-family-light;
        letter-spacing: .75rem;
        text-transform: uppercase;
        margin: 2.5rem 0;

        @media only screen and (min-width: $tablet) {
          padding: ($dc-padding-vertical * 2) ($dc-padding-horizontal * 1.2);
          font-size: $dc-font-size * 1.64;
          letter-spacing: 1rem;
          border-width: $dc-border-width * 2;
        }
      }

      .dc-container {
        padding: 1rem;

        @media only screen and (min-width: $tablet) {
          padding: 1rem 1.5rem;
        }

        @media only screen and (min-width: $desktop) {
          padding: 1rem 2rem;
        }

        @media only screen and (min-width: $widescreen) {
          padding: 1rem 4rem;
        }

        @media only screen and (min-width: $fullhd) {
          padding: 1rem 10rem;
        }
      }

      .dc-bio {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: $widescreen) {
          flex-direction: row;
          padding: 0 3rem 3rem;
        }

        .image {
          img {
            $dc-image-dimension: 8.12rem;
            height: $dc-image-dimension;
            width: $dc-image-dimension;

            @media only screen and (min-width: $tablet) {
              height: $dc-image-dimension * 1.5;
              width: $dc-image-dimension * 1.5;
            }

            @media only screen and (min-width: $desktop) {
              height: $dc-image-dimension * 2;
              width: $dc-image-dimension * 2;
            }
          }
        }

        .dc-texts {
          margin: 3rem 1.23rem 0;
          font-size: 1.2rem;

          .box {
            width: fit-content;
          }

          .dc-icon {
            margin: 0 .12rem;
            font-size: 1.1rem;
            color: $primary-lighter;
          }

          @media only screen and (min-width: $widescreen) {
            margin: 0 3rem 0;
          }
        }
      }
    }
  }
</style>
