<template>

  <div class="container">
  
    <top-bar></top-bar>
    <splash-area> </splash-area>   
    <flower-csa> </flower-csa>   
    <events> </events>   
    <bouquets> </bouquets>   
    <live-plants> </live-plants>   

    
  </div>
  
</template>

<script>
  import VLink from '../components/VLink.vue'
  import TopBar from '../components/TopBar.vue'
  import SplashArea from '../components/SplashArea.vue'
  import FlowerCsa from '../components/FlowerCsa.vue'
  import Events from '../components/Events.vue'
  import Bouquets from '../components/Bouquets.vue'
  import LivePlants from '../components/LivePlants.vue'

  export default {
    components: {
      VLink,
      TopBar,
      SplashArea,
      FlowerCsa,
      Bouquets,
      Events,
      LivePlants,
    }
  }
</script>

<style >
  body {
   margin: 0 !important;
  }
  .container {
    width: auto%;
    margin: 0px;
  }
</style>
