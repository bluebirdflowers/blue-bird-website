<template >

  <b-container id="bouquets" >
    <img src="/blue_bird_long_33.jpg"
              img-alt="Card image"
              img-top>         
    </img>

    <b-row align-v="center" >
      <b-col class="text-left" sm="12" lg="6">
        <b-row no-gutters>
        <h2 class="text-left" >BOUQUETS</h2>
        <p> 
          There is nothing wrong with ordering yourself or your loved one a one-off bouquet to show you care.  We work all budgets and all sizes of requests.  We are happy to find the perfect mix for you or your loved one.  Typically, we can fill requests same day, ordering will depend on what’s available, just stop by!  
        </p>
        <h4> PRICE RANGE</h4>
        <p> A mix of what is available, common, tropical, edible, 
        and exotic all blended in a beautiful bouquet wrapped in 
        recycled paper. </p>
        <b-col>
          <h4 class="text-right"> $15 &amp; UP / each </h4>
        </b-col>
        </b-row>
        <b-row no-gutters>
        <h4> TIME CONSTRAINTS</h4>
        <p> We are happy to put together something day of, try to get 
        a hold of us before noon to make sure we have enough time to 
        fill your request.</p>
        <h4> DELIVERY </h4>
        <p> We offer free delivery to our downtown neighbors.  
        5$ delivery charge for within 10 miles of our shop.</p>
        </b-row>
              <b-row class="button-row">
            <b-col>
            <router-link to="/request-form">
              <a>
                <p>Make a request </p>
              </a>
            </router-link>
            </b-col>
          </b-row>
      </b-col>
      

      <b-col align-self="center" sm="12" lg="6">
        <b-carousel id="bouquets-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
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

.wrap-details {
  display: flex;
  flex: 1;
  flex-direction: column;
}



#bouquets img {
  width: 100%;
  display: none ;
  margin-top: 32px;
}
.left-copy {
  display:inline-block;
  width: 49%;

}

#bouquets-carousel {
  height: calc(100vh - 132px);
  max-height: 600px;
  overflow: hidden;
}

@media  only screen and (max-width: 990px) {

  #bouquets-carousel {
    display: none;
  }


  #bouquets img {
    display: block;
  }
}

</style>