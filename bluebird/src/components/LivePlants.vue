<template>

  <b-container id="live-plants" class="container">
    <img src="/blue_bird_long_44.jpg"
              img-alt="Card image"
              img-top>         
    </img>
    <b-row align-v="center" class="text-left"  >

      <b-col sm="12" lg="6">
        <b-carousel id="plants-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
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
      <h2 class="text-left"> LIVE PLANTS  </h2>
      <p class="text-left">We love indoor plants as much as we love as we love 
      fresh cut flowers.   
      Available offerings depend on availability.</p>

      <h4 class="text-left"> Sourcing </h4>
      <p class="text-left"> We source our live plants from growers in the area who 
        care for and love their plants as much as we do.  This leaves us the most
        confident that you will be able to enjoy your plant at home for many years to come.
      </p>

      <h4 class="text-left"> Typical plants around the shop </h4>

      <b-row class="plant-list">
        <b-col cols="6">
          <p> Succulents </p>
        </b-col>              
        <b-col cols="6">
          <p> Cacti </p> 
        </b-col>
        <b-col cols="6">
          <p> Small Trees </p>
        </b-col>              
        <b-col cols="6">
          <p> Blooming Plants </p> 
        </b-col>
        <b-col cols="6">
          <p> Philodendron </p>
        </b-col>              
        <b-col cols="6">
          <p> Air Plants </p> 
        </b-col>
        <b-col cols="6">
          <p> Mounted Plants </p>
        </b-col>              
        <b-col cols="6">
          <p> Botanical Decor </p> 
        </b-col>
        <b-col cols="6">
          <p> Outdoor Potted Landscape Design </p>
        </b-col>              
        <b-col cols="6">
          <p> And plenty more! </p> 
        </b-col>
        </b-row>
                  <b-row class="button-row">
            <b-col>
            <router-link to="/request-form">
                Make a request 
                <font-awesome-icon class="request-icon" icon="hand-pointer" /> 
            </router-link>
            </b-col>
          </b-row>
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

.plant-list p {
  font-size: calc(.75vw + .75vh + .5vmin);
  font-weight: 400;
}

.fill-orange {
  background-color: #E36940;
  margin-top: 16px;
  margin-bottom: 16px;

}
.fill-orange  p{
color: white !important;
text-align: center !important;
font-style: italic !important;


}
.left-image-section {
  display:inline-block;
  width: 49%;
}

#plants-carousel {
  height: calc(100vh - 132px);
  max-height: 600px;
  overflow: hidden;
}
.image-slider {
  background-image: url("../assets/bluebird_live_plants_01.jpg");
  background-size: cover;
}

.image-buttons {
  display: flex;
  flex-direction: row;
}
.wrap-details {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between !important;
}

#live-plants img {
  width: 100%;
  display: none;
}
.right-copy {
  display:inline-block;
  width: 49%;

}

@media  only screen and (max-width: 990px) {

  #plants-carousel{
    display: none;
  }
  #live-plants {
  width: auto;
}
  #live-plants img {
  display: block;
}
}
</style>