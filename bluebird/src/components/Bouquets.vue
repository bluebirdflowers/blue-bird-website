<template>
  <b-container >
    <b-row >
      <b-col class="text-left" sm="12" lg="6">
        <h1 class="text-left" >BOUQUETS</h1>
        <p> There is nothing wrong with ordering yourself or your loved one a 
        one-off bouquet to show you care.  We work all budgets and all 
        sizes of requests.  We are happy to find the perfect mix for you 
        or your loved one.  Typically, we can fill requests same day, 
        ordering will depend on what’s available, just stop by!  </p>
           <h4> PRICE RANGE</h4>
           <p> A mix of what is available, common, tropical, edible, 
           and exotic all blended in a beautiful bouquet wrapped in 
           recycled paper. </p>
           <h4 class="text-right"> $15 &amp; UP / each </h4>
           <h4> TIME CONSTRAINTS</h4>
           <p> We are happy to put together something day of, try to get 
           a hold of us before noon to make sure we have enough time to 
           fill your request.</p>
           <h4> DELIVERY </h4>
           <p> We offer free delivery to our downtown neighbors.  
           5$ delivery charge for within 10 miles of our shop.</p>
      </b-col>

      <b-col sm="12" lg="6">
        <b-carousel id="bouquets-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <b-carousel-slide 
        img-src="/bluebird_bouquet_01.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_03.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_06.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_04.jpg">
      </b-carousel-slide>
    </b-carousel>
   </b-col>
  </b-row>
  </b-container>
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
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 72px;
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
  font-size: 2.5vmax;

}
.wrap-details {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.container {
  width:100%;
  max-width: 1200px;
  padding:48px;
  margin: auto;
}

.small-csa, .medium-csa, .large-csa {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#flowers {
  width: auto;
  min-height: 85vh !important;
}
.left-copy {
  display:inline-block;
  width: 49%;

}
@media  only screen and (max-width: 990px) {

#bouquets-carousel {
  display: none;
}

}

</style>