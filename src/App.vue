<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">vue pwa</span>
      </div>
      <!-- Tabs -->
      <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
        <router-link class="mdl-layout__tab" :to="{ name: 'Home' }" active-class="is-active" exact><i class="material-icons">home</i></router-link>
        <router-link class="mdl-layout__tab" :to="{ name: 'watchlist' }" active-class="is-active"><i class="material-icons">list</i></router-link>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">vue pwa</span>
      <nav class="mdl-navigation">
        <router-link v-on:click.native="hideMenu" class="mdl-navigation__link" :to="{ name: 'Home' }" active-class="is-active" exact>Home</router-link>
        <router-link v-on:click.native="hideMenu" class="mdl-navigation__link" :to="{ name: 'watchlist' }" active-class="is-active" exact>Watchlist</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <keep-alive include="home">
          <router-view></router-view>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

.home, .watchlist{
  margin: 0 1em;
}
</style>
