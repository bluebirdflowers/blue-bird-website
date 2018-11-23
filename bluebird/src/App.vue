<template>
  <div id="app">
        <div class="main-container">
    <top-bar></top-bar>
     <splash-area> </splash-area>   
     <flower-csa> </flower-csa>   
     <events> </events>   
     <bouquets> </bouquets>   
     <live-plants> </live-plants>   
</div>
  </div>


</template>

<script>

import VLink from './components/VLink.vue'
  import MainLayout from './layouts/Main.vue'
  import SplashArea from './components/SplashArea.vue'
  import FlowerCsa from './components/FlowerCsa.vue'
  import Events from './components/Events.vue'
  import Bouquets from './components/Bouquets.vue'
  import TopBar from './components/TopBar.vue'
  import LivePlants from './components/LivePlants.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      VLink,
      TopBar,
      MainLayout,
      SplashArea,
      FlowerCsa,
      Events,
      Bouquets,
      LivePlants
    }
}
</script>

<style>
#app {
  font-family: 'linotype-didot', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
    font-family: 'bebas-neue', 'sans-serif';

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

p {
  font-size: 16px;
  font-family: 'linotype-didot', serif;
}

@media (max-width: 991px) {
 
 p {
   font-size: 2vw ;
 }
}
</style>
