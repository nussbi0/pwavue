<template>
  <div class="details">
    <div v-show="this.loading" class="mdl-spinner mdl-js-spinner is-active"></div>
    <img class="backdrop" v-if="data.backdrop_path" v-bind:src="'https://image.tmdb.org/t/p/w780/' + data.backdrop_path"/>
    <div class="detailsDesc">
      <h3 v-if="data.name">{{ data.name }}</h3>
      <h3 v-if="data.title">{{ data.title }}</h3>
      <p>{{ data.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      data: {},
      loading: false
    }
  },
  beforeMount: function () {
    var self = this
    self.loading = true
    fetch('https://api.themoviedb.org/3/' + this.$route.params.type + '/' + this.$route.params.id + '?api_key=c9e2d81923fe8d1c8dea312286423de2').then(function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }

      // Examine the text in the response
      response.json().then(function (data) {
        self.data = data
        self.loading = false
      })
    }
    ).catch(function (err) {
      console.log('Fetch Error :-S', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backdrop {
    width: 100%;
  }
  .detailsDesc{
    margin: 0 1em;
  }
</style>
