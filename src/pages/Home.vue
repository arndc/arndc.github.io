<template>
  <div>
    <div id="particles-js"></div>
    <main>
      <h1>
        <span class="colorAccent code">></span> arnedc<span class="colorAccent">.</span>me <span
          class="colorAccent blink">_</span>
      </h1>
    </main>
  </div>
</template>

<script>

    import { Component, Vue } from 'vue-property-decorator';
    import 'particles.js';

    @Component
    export default class Home extends Vue {
        created() {
            particlesJS.load('particles-js', 'particles.json');
        }
    }

</script>

<style scoped>
  main {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
  }

  .code {
    font-family: Consolas, "Source Sans Pro", Helvetica, sans-serif;
  }

  .blink {
    animation: blink 1s step-start 0s infinite;
    -webkit-animation: blink 1s step-start 0s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0.0;
    }
  }

  @-webkit-keyframes blink {
    50% {
      opacity: 0.0;
    }
  }

  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
