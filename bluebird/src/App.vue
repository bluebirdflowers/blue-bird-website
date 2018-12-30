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
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import TermsOfUse from './components/TermsOfUse.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  
  },
  components: {
      TopBar,
      FooterNav,
      Home,
      RequestForm,
      PrivacyPolicy,
      TermsOfUse
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
  background-color: #e6e4e4;
}

.request-icon {
  display: inline;
-webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
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
  font-size: 36px;
}
h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 22px;
}
.small-font {
  font-size: 12px;
}
p {
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  color: #205473;
  font-size: 16px;
}


.button-row {
  border: 1px solid #E36940;
  height: 48px;
  float:right;
  max-width: 300px;
  border-radius: 30px;
  margin: 8px;
}
.button-row p,
.button-row a,
.button-row .request-icon  {
  color: #E36940 !important;
  font-size: 16px;
  font-family: 'Roboto Slab', 'serif';
  font-weight: 300;
  line-height: 48px;
  text-align:left;
}


@media (max-width: 991px) {
 
 p {
  font-size: 16px;
 }
 h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 24px;
}
.button-row {
  border: 2px solid #E36940;
  height: 48px;
  border-radius: 30px;
  margin: 0px;
}
.button-row p,
.button-row a,
.button-row .request-icon  {
  color: #E36940 !important;
  font-size: 16px;
  font-family: 'Roboto Slab', 'serif';
  font-weight: 500;
  line-height: 42px;
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
