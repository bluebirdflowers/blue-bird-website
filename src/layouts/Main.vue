<template>

  
    <top-bar></top-bar>
    
  
</template>

<script>
  import VLink from '../components/VLink.vue'
  import TopBar from '../components/TopBar.vue'


  export default {
    components: {
      VLink,
      TopBar,
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
