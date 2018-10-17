<template>
  <section class="container">
    <div id="flowers" class="row">
      <div class="col-6">
          <h1> Flower CSA </h1>
          <p>Our flower CSA’s are the perfect item to cheer up your home or business.  We work with you to decide frequency, types of flowers, and will even support you with our own small vases if that is what you require.  Below are estimates to help you get an idea of what is available but know we can customize any order to your needs.</p>
              <h2> SMALL</h2>
              <p> 1-3 short stemmed floral pieces. </p>
              <h2> 10$ / each </h2>
              <h2> 15$ / each </h2>

              <h2> MEDIUM</h2>
              <p> 1-3 short stemmed floral pieces. </p>
              <h2> 10$ / each </h2>
              <h2> 15$ / each </h2>

            <h2> LARGE</h2>
            <p> 1-3 short stemmed floral pieces. </p>
            <h2> 10$ / each </h2>
            <h2> 15$ / each </h2>

          <p> You are only charged the vase price for first order, after that the vase is yours!  
            Have a special request for a particular vase?  Reach out to me and I’ll be happy to help you find them. 
            Vase size may determine number of stems in the arrangement, price will reflect this. 
            Vase rental available with deposit. </p>
      </div>


      <div class="col-6">
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
.container {
  width:100%;
  max-width: 1200px;
  padding:16px;
  margin: auto;
  height: 85vh;
}

#flowers {
  width: auto;
  height: 100% !important;
  display:flex;
  justify-content: space-between;
}
.left-copy {
  display:inline-block;
  width: 48%;
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

</style>