<template>
  <main class="is-paddingless">

    <div class="hero dc-bio" data-aos="fade-up">
      <section class="hero-body dc-section">
        <h2 class="title dc-title">Bio</h2>
        <div class="dc-bio-content is-flex">
          <figure class="image" data-aos="zoom-in-up" data-aos-anchor=".dc-bio-content">
            <img class="is-rounded" src="@/assets/images/me.jpg" alt="Me (Arne De Cock)">
          </figure>
          <div class="has-text-left dc-texts">
            <p class="box" data-aos="fade-up" data-aos-anchor=".dc-texts">
              Hi, I'm Arne De Cock
              <font-awesome-icon class="dc-icon" :icon="['far', 'laugh-beam']" />
            </p>
            <p class="box" data-aos="fade-up" data-aos-anchor=".dc-texts">
              Developer by day
              <font-awesome-icon class="dc-icon" :icon="['fa', 'sun']" />
              <span class="dc-code has-text-weight-bold"> && </span>
              also by night
              <font-awesome-icon class="dc-icon" :icon="['fa', 'moon']" />
            </p>
            <p class="box" data-aos="fade-up" data-aos-anchor=".dc-texts">
              Next to that I really love watching TV series, movies and playing games
              <span class="dc-hashtag">#online #offline</span>
            </p>
            <p class="box" data-aos="fade-up" data-aos-anchor=".dc-texts">
              Oh yeah, one more thing. Be aware of my puns, they are on point!
              <span class="dc-hashtag">#punmaster</span>
            </p>
          </div>
        </div>
      </section>
      <dc-section-scroller
          class="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only"
          next-section-name="trademarks"
          next-section-selector=".dc-trademarks"
          dark="true"
          data-aos="fade-up"
          data-aos-delay="1500"
          data-aos-anchor=".dc-bio-content"
      />
    </div>

    <div class="hero dc-trademarks" data-aos="fade-in" data-aos-delay="0">
      <section class="hero-body dc-section">
        <h2 class="title dc-title">Trademarks</h2>
        <div class="dc-trademarks-content is-fullwidth">
          <div class="columns">
            <dc-card
                class="column is-4" v-for="properties in trademarksCardProperties"
                :key="properties.title"
                :card-properties="properties"
            />
          </div>
        </div>
      </section>
    </div>

  </main>
</template>

<script lang="ts">

    import DcCard from '@/components/cards/DcCard.vue';
    import { DcCardProperties } from '@/components/cards/DcCardProperties';
    import DcSectionScroller from '@/components/DcSectionScroller.vue';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: { DcSectionScroller, DcCard }
    })
    export default class DcAboutMe extends Vue {

        private trademarksCardProperties!: Array<DcCardProperties>;

        created() {
            this.trademarksCardProperties = [
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

    @media only screen and (min-width: $widescreen) {
      background: url('../assets/images/backgrounds/foggy-mountains-widescreen.png') no-repeat center top,
      linear-gradient(180deg, $background 0%, $background-darker 35%, $background 85%);
      background-size: contain;
      padding-bottom: 6.4rem;
    }

    .hero {
      @media only screen and (min-width: $widescreen) {
        min-height: 100vh;
        padding-top: 1.5rem;

        &:last-child {
          min-height: calc(100vh - 17.1rem);
        }
      }
    }

    .dc-bio {
      .dc-bio-content {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: $widescreen) {
          flex-direction: row;
          padding: 0 1rem 3rem;
        }

        .image {
          img {
            $dc-image-dimension: 8.12rem;
            height: $dc-image-dimension;
            width: $dc-image-dimension;

            @media only screen and (min-width: $tablet) {
              height: $dc-image-dimension * 1.25;
              width: $dc-image-dimension * 1.25;
            }

            @media only screen and (min-width: $desktop) {
              height: $dc-image-dimension * 1.5;
              width: $dc-image-dimension * 1.5;
            }

            @media only screen and (min-width: $widescreen) {
              height: $dc-image-dimension * 2;
              width: $dc-image-dimension * 2;
            }
          }
        }

        .dc-texts {
          $dc-text-amount: 4;
          margin: 3rem 1.23rem 0;
          font-size: 1.2rem;

          @media only screen and (min-width: $widescreen) {
          }

          .box {
            width: fit-content;

            @for $i from 1 through $dc-text-amount {
              &:nth-child(#{$i}) {
                transition-delay: 400ms + (($i - 1) * 200);
              }
            }
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

    .dc-trademarks {
      .dc-trademarks-content {
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
    }

    .dc-section {
      margin: 0;
      display: flex;
      flex-direction: column;
      padding-top: 0;

      @media only screen and (min-width: $desktop) {
        padding: 0 2.5rem;
      }

      .dc-title {
        $dc-padding-vertical: 1.23rem;
        $dc-padding-horizontal: 1rem;
        $dc-font-size: 1.5rem;

        display: inline-block;
        margin: 1.25rem 0 2.5rem;
        padding: $dc-padding-vertical $dc-padding-horizontal;
        font-size: $dc-font-size;
        font-family: $dc-font-family-light;
        letter-spacing: .75rem;
        text-align: center;
        text-transform: uppercase;
        color: $primary-light;

        @media only screen and (min-width: $tablet) {
          padding: ($dc-padding-vertical * .75) ($dc-padding-horizontal * 1.2);
          font-size: $dc-font-size * 1.64;
          letter-spacing: 1rem;
        }

        @media only screen and (min-width: $desktop) {
          padding: ($dc-padding-vertical * 1) ($dc-padding-horizontal * 1.2);
        }

        @media only screen and (min-width: $widescreen) {
          padding: ($dc-padding-vertical * 1.5) ($dc-padding-horizontal * 1.2);
        }
      }
    }
  }
</style>
