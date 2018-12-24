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
          Ordering yourself or your loved one a one-off bouquet?  We work with all budgets and requests,  
          and are happy to find to find the perfect mix for you or your loved ones.  Currently requests, 
          can only be made in advanced due to limited availability in the store. Please complete 
          a <router-link style="font-weight: bold;" to="/request-form" >request form</router-link> to 
          start the conversation.
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
        <p> We are happy to put together something day of, if we have avaialble stock. 
          <a style="font-weight: bold;" href="tel:5417805510">Give us a call </a> or <router-link style="font-weight: bold;" 
          to="/request-form"> complete a request form</router-link> before noon to make sure we have enough time
          and product to fill your request.</p>
        <h4> DELIVERY </h4>
        <p> We offer free delivery to our downtown neighbors.  
        5$ delivery charge for within 10 miles of our shop.</p>
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
        img-src="/bluebird_bouquet_05.jpg" alt="Couple holding a bouquet designed by Bluebird Flowers" >
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_03.jpg" alt="Girl with glasses holding a bouquet">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_03.jpg" alt="Upclose photo of a bouquet">
      </b-carousel-slide>
      <b-carousel-slide 
        img-src="/bluebird_bouquet_04.jpg" alt="Upclose photo of a bouquet">
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