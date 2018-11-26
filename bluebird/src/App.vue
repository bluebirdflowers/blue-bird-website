<template>
  <div id="app">
      <top-bar></top-bar>
          <router-view></router-view>
      <footer-nav></footer-nav>
  </div>
</template>

<script>

import TopBar from './components/TopBar.vue'
import FooterNav from './components/FooterNav.vue'
import Home from './components/Home.vue'
import RequestForm from './components/RequestForm.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      TopBar,
      FooterNav,
      Home,
      RequestForm
      }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


h2 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  padding-top: 16px;
  font-size: calc(3.5vw + 3.5vh + .5vmin);
}
h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: calc(1.4vw + 1.4vh + .5vmin);
}

.small-font {
  font-size: calc(.6vw + .6vh + .5vmin);
}


p {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  color: #205473;
  font-size: calc(.65vw + .65vh + .5vmin);
}


.button-row {
  border: 1px solid #E36940;
  height: 4vmax;
  border-radius: 5px;
  margin: 8px;
}
.button-row p  {
  color: #E36940 !important;
  font-size: 2vmax;
  font-family: 'Roboto Slab', 'serif';
  font-weight: 300;
  line-height: 4vmax;
  text-align:left;
}
@media (max-width: 991px) {
 
 p {
font-size: calc(1.25vw + 1.25vh + .5vmin);
 }
 h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 4vmax !important;
}
.button-row {
  border: 2px solid #E36940;
  height: 8vmax;
  border-radius: 5px;
  margin: 0px;
}
.button-row p  {
  color: #E36940 !important;
  font-size: 3vmax;
  font-family: 'Roboto Slab', 'serif';
  font-weight: 500;
  line-height: 8vmax;
  text-align:left;
}
.button-row p:hover  {
  color: #E36940 !important;
  font-size: 3vmax;
  font-family: 'Roboto Slab', 'serif';
  font-weight: 500;
  line-height: 8vmax;
  text-align:left;
}
.small-font {
  font-size: 2vmax;
}
}
</style>
