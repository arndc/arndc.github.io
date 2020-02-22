<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <div class="dc-container">
        <a href="https://bulma.io">
          <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="256" height="48">
        </a>
        <font-awesome-icon class="dc-icon" :icon="['fa', 'plus-circle']" />
        <a href="https://vuejs.org">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02" width="48" height="48">
            <polygon fill="#ffffff"
                     points="98.16 102.01 42.1757011 5.09911711 39.23 0 0 0 2.94507611 5.10107823 98.16 170.02 196.32 0 157.06 0" />
            <polygon fill="#ffffff"
                     points="98.16 29.0371525 81.35 2.009956e-14 75.5 2.009956e-14 -6.81139173e-16 2.009956e-14 2.94 5.1 78.4487095 5.1 98.16 39.26 117.879366 5.1 193.38 5.1 196.325 0 120.82 7.80656356e-15 114.973219 2.009956e-14" />
          </svg>
        </a>
      </div>
      <div class="dc-copyright has-text-centered">
        &copy; {{ new Date().getFullYear() }}&nbsp;
        <a href="https://arnedc.me">Arne De Cock</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1;
    color: #fff;
  }

  footer {
    .dc-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media only screen and (min-width: $tablet) {
        flex-direction: row;
      }

      .dc-icon {
        margin: 1.5rem 0 2rem;
        font-size: 1.2rem;
        color: $primary-lightest;

        @media only screen and (min-width: $tablet) {
          margin: 0 2rem 0 1rem;
        }
      }
    }

    .dc-copyright {
     margin-top: 2rem;
    }

    a {
      color: $primary-lightest;

      &:hover {
        color: $primary-lightest;
        text-decoration: underline;
      }
    }
  }
</style>
