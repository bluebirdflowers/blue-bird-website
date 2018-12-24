<template>
  <div id="app">
    <div class="main-container">
      <splash-area> </splash-area>   
      <flower-csa> </flower-csa>   
      <events> </events>   
      <bouquets> </bouquets>   
      <live-plants> </live-plants>   
    </div>
  </div>
</template>
<script>

import SplashArea from './SplashArea.vue'
import FlowerCsa from './FlowerCsa.vue'
import Events from './Events.vue'
import Bouquets from './Bouquets.vue'
import TopBar from './TopBar.vue'
import LivePlants from './LivePlants.vue'
import FooterNav from './FooterNav.vue'
import RequestForm from './RequestForm.vue'

export default {
  components: {
      TopBar,
      SplashArea,
      FlowerCsa,
      Events,
      Bouquets,
      LivePlants,
      FooterNav,
      RequestForm   }
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
#home {
  min-height: 100vh
}

#events,
#flowers, 
#live-plants, 
#bouquets {
  width: 100%;
  min-height: calc(100vh - 132px) ;
  margin-top: 32px;
  margin-bottom: 32px;
}

.container {
  width:100%;
  max-width: 1200px;
  margin: auto;
}

@media (max-width: 991px) {

}
</style>
