<template>
  <b-container class="flower-csa-container">
    <b-row id="flowers" class="row">
      <b-col lg="6" sm="12">
        <b-container>
          <b-row>
            <h2 class="text-left"> Flower CSA </h2>
            <p class="text-left">Our flower CSA’s are the perfect item to cheer up your home or business.  We work with you to decide frequency, types of flowers, and will even support you with our own small vases if that is what you require.  Below are estimates to help you get an idea of what is available but know we can customize any order to your needs.</p>
          </b-row>
          <b-row>
            <b-col cols="6">
            </b-col>            
            <b-col cols="3">
              <p class="text-cente small-font"> no vase </p>
            </b-col>
            <b-col cols="3">
              <p class="text-center small-font"> with vase </p>
            </b-col>            
          </b-row>
          
          <!-- small row --> 
          <b-row>
            <b-col cols="6">
              <h4 class="text-left"> SMALL</h4>
              <p class="text-left">  1-3 short stemmed floral pieces. </p>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$  </h4>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$ </h4>
            </b-col>
          </b-row>
      
          <!-- small row --> 
          <b-row>
            <b-col cols="6">
              <h4 class="text-left"> SMALL</h4>
              <p class="text-left">  1-3 short stemmed floral pieces. </p>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$ </h4>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$  </h4>
            </b-col>
          </b-row>

          <!-- small row --> 
          <b-row>
            <b-col cols="6">
              <h4 class="text-left"> SMALL</h4>
              <p class="text-left">  1-3 short stemmed floral pieces. </p>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$  </h4>
            </b-col>
            <b-col cols="3">     
              <h4 class="text-center"> 10$  </h4>
            </b-col>
          </b-row>
      
          <p class="text-left"> Prices will vary. Vase rental available with deposit. </p>
            
        </b-container>
      </b-col>
      <!-- begin carousel -->
      <b-col lg="6" sm="12">
        <b-carousel id="csa-carousel"
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

#flowers {
  margin-top: 32px;
}
.container {
  max-width: 100%;

}

.small-font {
  font-size: 2vh;
}

h2 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 11vh ;
}

h4 {
  font-family: 'bebas-neue', serif;
  color: #205473;
  font-size: 2.5em !important;
}
p {
  font-family: 'linotype-didot', serif;
  font-size: 2.5vmax;
  color: #205473;
}
.flower-csa-container {
  width:100%;
  max-width: 1366px;
  min-height: 85vh;
}

.image-wrapper {
  width: 48%;
  display:flex;
  height: 100%;
  flex-direction:column;
}

#csa-carousel {
  max-height: 100%;
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

}


</style>