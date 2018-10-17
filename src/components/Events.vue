<template>
  <section class="container">
    <div id="events" class="row">
       
      <div class="col-6">
        <b-carousel id="events-carousel"
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
          img-src="./../src/assets/bluebird_csa_01.jpg"
        ></b-carousel-slide>
        <b-carousel-slide 
          img-src="./../src/assets/bluebird_csa_02.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="./../src/assets/bluebird_csa_03.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="./../src/assets/bluebird_csa_05.jpg">
        </b-carousel-slide>
      </b-carousel>
    </div>

    <div class="col-6">

      <h1> EVENTS </h1>
      <p>Special events. such as a wedding, graduation party, senior prom, 
      promotion, Christmas Thanksgiving, Anniversary, Valentine’s Day, 
      Mother’s Day, Birthday’s and just because.  We’ve got you covered!</p>       
      

      <h2> MINIMUM  NOTICE </h2>
      <p> In order to ensure we are ready for your special day, we encourage 
      clients to let us know their request at least 10 days in advance. 
      This time will allow us ample time to ensure our stock is fresh 
      and ready for your special day.</p>

      <h2> PRICE  RANGE </h2>

      <p>
      Price range for special events ranges depending on your needs, 
      number of items requested, timing, and what you would like in 
      the mix.  We work with all budgets and are ready to help you 
      decorate your celebrations.
      </p>

  </div>

  </div>
  </section>
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
.left-image {
  display:inline-block;
  width: 49%;

}

</style>