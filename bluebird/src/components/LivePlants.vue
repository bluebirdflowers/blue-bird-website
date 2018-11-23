<template>

  <b-container class="container">

    <b-row id="live-plants" >

      <b-col sm="12" lg="6">
        <b-carousel id="plants-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
         >
        <b-carousel-slide 
          img-src="/bluebird_live_plants_01.jpg"
        ></b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_live_plants_02.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_live_plants_03.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_live_plants_04.jpg">
        </b-carousel-slide>
      </b-carousel>
    </b-col>

      <b-col sm="12" lg="6">

        <h1 class="text-left"> LIVE PLANTS  </h1>
        <p class="text-left">We love indoor plants as much as we love as we love 
        fresh cut flowers from the farmers market.  
        What we have available depends on what we’ve caught 
        sight of within the weeks surrounding your visit. 
         If you are looking for something specific, please call 
         ahead of your visit and we will be happy to help you source 
         unusual plants on our regular plant field trips around 
         the pacific north west.</p>

            <h4 class="text-left"> Typical plants around the shop </h4>
            <p class="text-left"> In order to ensure we are ready for your special day, we encourage 
            clients to let us know their request at least 10 days in advance. 
            This time will allow us ample time to ensure our stock is fresh 
            and ready for your special day.</p>

          <b-container class="text-left">
            <b-row>
              <b-col cols="6">
                <p> Succulents </p>
              </b-col>              
              <b-col cols="6">
                <p> Cacti </p> 
              </b-col>
            </b-row>            <b-row>
              <b-col cols="6">
                <p> Small Trees </p>
              </b-col>              
              <b-col cols="6">
                <p> Blooming Plants </p> 
              </b-col>
            </b-row>            <b-row>
              <b-col cols="6">
                <p> Philodendron </p>
              </b-col>              
              <b-col cols="6">
                <p> Air Plants </p> 
              </b-col>
            </b-row>            <b-row>
              <b-col cols="6">
                <p> Mounted Plants </p>
              </b-col>              
              <b-col cols="6">
                <p> Botanical Decor </p> 
              </b-col>
            </b-row>            <b-row>
              <b-col cols="6">
                <p> Outdoor Potted Landscape Design </p>
              </b-col>              
              <b-col cols="6">
                <p> And plenty more! </p> 
              </b-col>
            </b-row>
           </b-container>
         </b-col>
      </b-row>
  </b-container>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import Vue from 'vue'

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
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 9.5rem;;
}
h2 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 20px;
}


h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 2.5em !important;
}
p {
  font-family: 'linotype-didot', serif;
  color: #205473;
  font-size: 2vmax;
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
  padding:48px ;
  margin: auto;
  min-height: 85vh;

}

.description, .minimum-notice, .price-range {
}

#live-plants {
  width: auto;
}
.right-copy {
  display:inline-block;
  width: 49%;
  height: 100vh;

}

@media  only screen and (max-width: 990px) {

  #plants-carousel{
    display: none;
  }
}
</style>