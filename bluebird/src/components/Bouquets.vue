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
        <p> A mix of what is available, including common flowers, tropicals,
          edible botanicals, and exotics all blended in a beautiful craft-paper
          wrapped bouquet. </p>
        <b-col>
          <h4 class="text-right"> $15 &amp; UP / each </h4>
        </b-col>
        </b-row>
        <b-row no-gutters>
        <h4> TIME CONSTRAINTS</h4>
        <p> We are happy to put together something day of, if we have stock. 
          <a style="font-weight: bold;" href="tel:5417805510">Give us a call </a> or <router-link style="font-weight: bold;" 
          to="/request-form"> complete a request form</router-link> before noon to make sure we have enough time
          and product to fill your request.</p>
        <h4> DELIVERY </h4>
        <p> We offer free delivery to our downtown neighbors.  
        $5 delivery charge within 10 miles of our shop.</p>
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
        :img-src="image1" 
        alt="Couple holding a bouquet designed by Bluebird Flowers" >
      </b-carousel-slide>
      <b-carousel-slide 
        :img-src="image2" 
        alt="Girl with glasses holding a bouquet">
      </b-carousel-slide>
      <b-carousel-slide 
        :img-src="image3" 
        alt="Upclose photo of a bouquet">
      </b-carousel-slide>
      <b-carousel-slide 
        :img-src="image4" 
        alt="Upclose photo of a bouquet">
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

  import BouquetImage1 from '../assets/bluebird_bouquet_01.jpg'
  import BouquetImage2 from '../assets/bluebird_bouquet_02.jpg'
  import BouquetImage3 from '../assets/bluebird_bouquet_03.jpg'
  import BouquetImage4 from '../assets/bluebird_bouquet_04.jpg'
  import BouquetLongImage from '../assets/blue_bird_long_33.jpg'

  export default {
    components: {
      VLink,
    },
    props: {

    },
    computed: {

    },
    methods: { 
      onSlideStart(slide) {
        this.sliding = true;
      },
      onSlideEnd(slide) {
        this.sliding = false;
      }
    },
    data: function() {
      return {
        images: '',
        slide: 0,
        sliding: null,
        currentNumber: '',
        image1: BouquetImage1,
        image2: BouquetImage2,
        image3: BouquetImage3,
        image4: BouquetImage4,
        imageLong: BouquetLongImage
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
  height: 560px;
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