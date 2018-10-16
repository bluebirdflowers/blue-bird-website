<template>

  <section class="container">

    <div id="events" class="event-section">
       
      <div class="left-image-section">
        <div class="image-slider">
        </div>
        <div class="image-buttons">
          <font-awesome-icon icon="circle" />
          <font-awesome-icon icon="circle" />
          <font-awesome-icon icon="circle" />
          <font-awesome-icon icon="circle" />
          <font-awesome-icon icon="circle" />
          </div>

      </div>

      <div class="right-copy">
              <div class="wrap-details"> 

        <h1> LIVE PLANTS  </h1>
        <p>We love indoor plants as much as we love as we love 
        fresh cut flowers from the farmers market.  
        What we have available depends on what we’ve caught 
        sight of within the weeks surrounding your visit. 
         If you are looking for something specific, please call 
         ahead of your visit and we will be happy to help you source 
         unusual plants on our regular plant field trips around 
         the pacific north west.

          <div class="typical-plants">
            <h2> Typical plants around the shop </h2>
            <p> In order to ensure we are ready for your special day, we encourage 
            clients to let us know their request at least 10 days in advance. 
            This time will allow us ample time to ensure our stock is fresh 
            and ready for your special day.</p>
          </div>

          <div class="price-list">
            <ul class="left-plant-list">
              <li> Succulents </li>
              <li> Cacti </li>
              <li> Small Trees </li>
              <li> Philodendron </li>
              <li> Air Plants </li>
            </ul>
            <ul class="right-plant-list">
              <li> Small Trees </li>
              <li> Blooming Plants </li>
              <li> Mounted Plants </li>
              <li> Air Plants </li>
              <li> Botanical Decor </li>
              <li> Outdoor Potted Landscape Design </li>
            </ul


            
            </p>
          </div>

         </div>

        </div>

      </div>
  </section>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import Vue from 'vue'
  import routes from '../routes'

  export default {
    components: {
      VLink,

    },
    props: {

    },
    computed: {

    },
    methods: { 
    },
    data: function() {
      return {
        images: '',
        currentNumber: ''
      }
    }
  }
</script>

<style scoped>
h1 {
  font-family: Bebas;
  color: #205473;
  font-size: 72px;
}
h2 {
  font-family: Bebas;
  color: #205473;
  font-size: 20px;
}
p {
  font-family: Bidoni;
  color: #205473;
  line-height: 132%;
}
.left-image-section {
  height: 100vh;
  display:inline-block;
  width: 49%;
}
.image-slider {
  background-image: url("../assets/bluebird_live_plants_01.jpg");
  background-size: cover;
  height: 100vh;
}

.image-buttons {
  display: flex;
  flex-directions: row;
}
.wrap-details {
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between !important;
}
.container {
  width:100%;
  max-width: 1200px;
  padding:16px;
  margin: auto;
}

.description, .minimum-notice, .price-range {
}

#events {
  width: auto;
  height: 100vh !important;
}
.right-copy {
  display:inline-block;
  width: 49%;
  height: 100vh;


}

</style>