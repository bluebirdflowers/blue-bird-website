<template>

  
    <top-bar></top-bar>
    
  
</template>

<script>
  import VLink from '../components/VLink.vue'
  import TopBar from '../components/TopBar.vue'
  import "bootstrap/dist/css/bootstrap.min.css"
  import "bootstrap-vue/dist/bootstrap-vue.css"
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
