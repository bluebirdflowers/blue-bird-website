<template>
  <container>
  
    <top-bar></top-bar>

    <footer></footer>

  </container>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import TopBar from '../components/TopBar.vue'
  import SplashArea from '../components/SplashArea.vue'
  import FlowerCsa from '../components/FlowerCsa.vue'
  import Events from '../components/Events.vue'
  import Bouquets from '../components/Bouquets.vue'
  import LivePlants from '../components/LivePlants.vue'
  import FooterNav from '../components/FooterNav.vue'


  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap-vue/dist/bootstrap-vue.css"
  
  
  export default {
    components: {
      VLink,
      TopBar,
      SplashArea,
      FlowerCsa,
      Events,
      Bouquets,
      LivePlants,
      FooterNav
      
    }
  }
</script>

<style >
  body {
   margin: 0 !important;
  }
  .container {
    width: auto;
    margin: 0px;
  }
</style>
