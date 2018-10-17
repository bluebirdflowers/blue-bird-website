<template>
  <section class="container">
    <div id="bouquets" class="row">
      <div class="col-6">
        <h1>BOUQUETS</h1>
        <p> There is nothing wrong with ordering yourself or your loved one a 
        one-off bouquet to show you care.  We work all budgets and all 
        sizes of requests.  We are happy to find the perfect mix for you 
        or your loved one.  Typically, we can fill requests same day, 
        ordering will depend on what’s available, just stop by!  </p>
           <h2> PRICE RANGE</h2>
           <p> A mix of what is available, common, tropical, edible, 
           and exotic all blended in a beautiful bouquet wrapped in 
           recycled paper. </p>
           <h2> $15 &amp; UP / each </h2>
           <h2> TIME CONSTRAINTS</h2>
           <p> We are happy to put together something day of, try to get 
           a hold of us before noon to make sure we have enough time to 
           fill your request.</p>
           <h2> DELIVERY </h2>
           <p> We offer free delivery to our downtown neighbors.  
           5$ delivery charge for within 10 miles of our shop.</p>
      </div>

      <div class="col-6">
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
        img-src="./../src/assets/bluebird_bouquet_01.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="./../src/assets/bluebird_bouquet_03.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="./../src/assets/bluebird_bouquet_06.jpg">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="./../src/assets/bluebird_bouquet_04.jpg">
      </b-carousel-slide>
    </b-carousel>
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
.wrap-details {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.container {
  width:100%;
  max-width: 1200px;
  padding:16px;
  margin: auto;
}

.small-csa, .medium-csa, .large-csa {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#flowers {
  width: auto;
  height: 100vh !important;
}
.left-copy {
  display:inline-block;
  width: 49%;

}
.right-image {

}

</style>