<template>
  <div class="main-container">
    <top-bar></top-bar>
     <splash-area> </splash-area>   
     <flower-csa> </flower-csa>   
     <events> </events>   
     <bouquets> </bouquets>   
     <live-plants> </live-plants>   
</div>
  
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import SplashArea from '../components/SplashArea.vue'
  import FlowerCsa from '../components/FlowerCsa.vue'
  import Events from '../components/Events.vue'
  import Bouquets from '../components/Bouquets.vue'
  import TopBar from '../components/TopBar.vue'
  import LivePlants from '../components/LivePlants.vue'



  export default {
    components: {
      MainLayout,
      TopBar,
      SplashArea,
      FlowerCsa,
      Events,
      Bouquets,
      TopBar,
      LivePlants,
    }
  }
</script>
