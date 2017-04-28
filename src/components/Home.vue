<template>
    <div class="home">
      <h3>{{ msg }}</h3>
      <form v-on:submit.prevent="onSubmit">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input"
                type="text"
                id="sample3"
                v-model="searchterm">
          <label class="mdl-textfield__label"
                for="sample3">Search...</label>
        </div>
      </form>
      <div class="results">
        <div v-show="this.loading" class="mdl-spinner mdl-js-spinner is-active"></div>
        <div v-for="(value, key, index) in this.results">
          <div class="result-category">
            {{key}}
            <div v-for="result in value">
              <router-link v-if="result.name" :to="{ name: 'details', params: { id: result.id, type: result.media_type }}">{{result.name}}</router-link>
              <router-link v-if="result.title" :to="{ name: 'details', params: { id: result.id, type: result.media_type }}">{{result.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Home Component',
      searchterm: '',
      results: [],
      loading: false
    }
  },
  methods: {
    onSubmit: function () {
      var self = this
      self.loading = true
      fetch('https://api.themoviedb.org/3/search/multi?api_key=c9e2d81923fe8d1c8dea312286423de2&language=en-US&query=' + this.searchterm).then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          return
        }

        // Examine the text in the response
        response.json().then(function (data) {
          self.results = _.groupBy(data.results, function (b) { return b.media_type })
          self.loading = false
        })
      }
      ).catch(function (err) {
        console.log('Fetch Error :-S', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-category{
  margin-bottom: 1em;
}
</style>
