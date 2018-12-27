<template>
  <b-container id="events"  class="container">
        <img :src="imageLong"
              img-alt="Card image"
              img-top>         
    </img>
    <b-row align-v="center" class="row">
      <b-col sm="12" lg="6">
        <b-carousel id="events-carousel"
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
          :img-src="image1"
        ></b-carousel-slide>
        <b-carousel-slide 
          :img-src="image2">
        </b-carousel-slide>
        <b-carousel-slide 
          :img-src="image3">
        </b-carousel-slide>
        <b-carousel-slide 
          :img-src="image4">
        </b-carousel-slide>
      </b-carousel>
    </b-col>

    <b-col class="text-section" align-self="center" sm="12" lg="6">
      <b-row no-gutters>
      <h2 class="text-left" style="display: block; width: 100%;"> 
        EVENTS 
      </h2>
      <p class="text-left" style="display: block; width: 100%;">
        Need flowers to celebrate a special event or holiday? 
      </p>       
      <h4 class="text-left" style="display: block;">
        MINIMUM  NOTICE 
      </h4>
      <p class="text-left"> 
        In order to ensure we are ready for your special day, 
        we encourage clients to <router-link style="font-weight: bold;" to="/request-form"> get in touch </router-link> atleast ten days before the event. 
        This will ensure our stock is fresh and ready with enough time to 
        prepare for your celebration.
      </p>

      <h4 class="text-left"> 
        PRICE  RANGE 
      </h4>

      <p class="text-left">
      Price range varies depending on your special preferences, the time of year, and 
      the mix of product utilized.  We work with all budgets and are ready to help you 
      bring life your special moments and celebrations.
      </p> 
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
  import EventImage1 from '../assets/bluebird_events_04.jpg'
  import EventImage2 from '../assets/bluebird_events_01.jpg'
  import EventImage3 from '../assets/bluebird_events_05.jpg'
  import EventImage4 from '../assets/bluebird_events_02.jpg'
  import EventLongImage from "../assets/blue_bird_long_44.jpg"
  import Vue from 'vue'

  export default {
    components: {
      VLink

    },
    props: {

    },
    computed: {

    },
    methods: { 
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    },
    data: function() {
      return {
        slide: 0,
        sliding:null,
        image1: EventImage1,
        image2: EventImage2,
        image3: EventImage3,
        image4: EventImage4,
        imageLong: EventLongImage
      }
    }
  }
</script>

<style scoped>

.wrap-details {
  display: flex;
  flex: 1;
  flex-direction: column;
}


#events img {
  width: 100%;
  display: none;
}

#events-carousel {
  height: 600px;
  margin-top: 32px;
  overflow: hidden;
}

@media  only screen and (max-width: 990px) {

  #events-carousel{
    display: none;
  }
  #events img {
  display: block;
  }

}

</style>