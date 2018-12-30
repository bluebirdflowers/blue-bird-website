<template>
  <b-container  id="flowers" class="flower-csa-container">
    <img :src="longImage"
              img-alt="Card image"
              img-top>         
    </img>
    <b-row class="flowers__row" align-v="center">
      <b-col lg="6" sm="12">
        <b-row no-gutters>
          <h2 class="text-left"> Flower CSA </h2>
          <p class="text-left">
            Our flower CSA’s are the perfect item to cheer up your home or business.  
            From frequency, types of flowers, and vases, packages are customizable 
            to your needs.
          </p>
        </b-row>
        <b-row no-gutters>
          <b-col  cols="8">
          </b-col>            
          <b-col cols="2">
            <p class="text-cente small-font"> no vase </p>
          </b-col>
          <b-col cols="2">
            <p class="text-center small-font"> with vase </p>
          </b-col>            
        </b-row>
        <!-- small row --> 
        <b-row no-gutters>
          <b-col cols="8">
            <h4 class="text-left"> SMALL</h4>
            <p class="text-left">  
              1-3 short stemmed floral pieces.
            </p>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 10$  </h4>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 15$ </h4>
          </b-col>
        </b-row>  
        <!-- small row --> 
        <b-row no-gutters>
          <b-col cols="8">
            <h4 class="text-left"> MEDIUM</h4>
            <p class="text-left">  
              5-7 medium stemmed floral pieces.
            </p>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 18$ </h4>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 25$  </h4>
          </b-col>
        </b-row>
        <!-- small row --> 
        <b-row no-gutters>
          <b-col cols="8">
            <h4 class="text-left"> LARGE</h4>
            <p class="text-left">  
              8-10 medium / large floral pieces. 
            </p>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 25$  </h4>
          </b-col>
          <b-col cols="2">     
            <h4 class="text-center"> 35$  </h4>
          </b-col>
        </b-row>

          <b-row>
            <b-col class="text-left" cols="12">
              <h4> FYI </h4>
            </b-col>
            <b-col cols="12">
              <p class="text-left"> Prices will vary. Vase rental available with deposit. </p>
            </b-col>
          </b-row no-gutters>
          <b-row class="button-row">
            <b-col>
            <router-link to="/request-form">
                Make a request 
                <font-awesome-icon class="request-icon" icon="hand-pointer" /> 
            </router-link>
            </b-col>
          </b-row>
      </b-col>
      <!-- begin carousel -->
      <b-col align-self="center" lg="6" sm="12">
        <b-carousel id="csa-carousel"
            style="text-shadow: 1px 1px 2px #333;"
            controls
            indicators
            background="#ababab"
            :interval="0"
            img-width="500"
            img-height="680"
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
    </b-row> 
  </b-container>
</template>

<script>
  import VLink from '../components/VLink.vue'
  import Vue from 'vue'
  import CsaImage1 from '../assets/bluebird_csa_01.jpg'
  import CsaImage2 from '../assets/bluebird_csa_02.jpg'
  import CsaImage3 from '../assets/bluebird_csa_03.jpg'
  import CsaImage4 from '../assets/bluebird_csa_04.jpg'
  import CsaLongImage from '../assets/blue_bird_long_22.jpg'
  import routes from '../routes'

  export default {
    components: {
      VLink
    },
    props: {

    },
    computed: {

    },
    methods: { 
      onSlideStart: function(slide) {
        this.sliding = true
      },
      onSlideEnd: function(slide) {
        this.sliding = false
      }
    },
    data: function() {
      return {
        slide: 0,
        sliding:null,
        currentNumber: '',
        image1: CsaImage1,
        image2: CsaImage2,
        image3: CsaImage3,
        image4: CsaImage4,
        longImage: CsaLongImage

      }
    }
  }
</script>

<style scoped>
#flowers {
}
.flowers-row {
  height: auto;
  min-height: calc( 100vh - 100px);
}
#flowers img {
  width: 100%;
  margin-top: 16px;
  display: none;
}

.image-wrapper {
  width: 48%;
  display:flex;
  height: 100%;
  flex-direction:column;
}

#csa-carousel {
  height: 560px;
  overflow: hidden;
}
.image-buttons {
  display:flex;
  justify-content: space-around;
  margin: 16px;
}

@media  only screen and (max-width: 990px) {

  #csa-carousel {
    display: none;
  }
  #flowers img {
  display: block;
}
}

@media  only screen and (max-width: 668px) {

}


</style>