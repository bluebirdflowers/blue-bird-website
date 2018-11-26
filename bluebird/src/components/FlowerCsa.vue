<template>
  <b-container  id="flowers" class="flower-csa-container">
      <img src="/blue_bird_long_11.jpg"
                img-alt="Card image"
                img-top>         
      </img>


    <b-row  align-v="center">
      <b-col lg="6" sm="12">
          <b-row no-gutters>
            <h2 class="text-left"> Flower CSA </h2>
            <p class="text-left">
              Our flower CSA’s are the perfect item to cheer up your home or business.  
              From frequency, types of flowers, and vases, packages are customizable to your needs.</p>
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
              <a>
                <p>Make a request </p>
              </a>
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
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
         >
        <b-carousel-slide 
          img-src="/bluebird_csa_01.jpg"
        ></b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_csa_02.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_csa_03.jpg">
        </b-carousel-slide>
        <b-carousel-slide 
          img-src="/bluebird_csa_05.jpg">
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
        currentNumber: ''
      }
    }
  }
</script>

<style scoped>

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
  height: calc(100vh - 132px);
  max-height: 600px;
  overflow: hidden;
}
.image-buttons {
  display:flex;
  justify-content: space-around;
  margin: 16px;
}
.one-image {
  background-image: url("./../assets/bluebird_csa_01.jpg");
}
.two-image {
  background-image: url("./../assets/bluebird_csa_02.jpg");
}
.three-image {
  background-image: url("./../assets/bluebird_csa_03.jpg");
}
.four-image {
  background-image: url("./../assets/bluebird_csa_04.jpg");
}
.five-image {
  background-image: url("./../assets/bluebird_csa_05.jpg");
}
.right-image{
  background-image: url("./../assets/bluebird_csa_04.jpg");
  background-size: cover;
  height: 90%;
  background-position: center;
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