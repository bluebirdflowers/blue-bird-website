<template>

  <div class="splash-section">
    <b-container class="splash-section__container">
      <b-row align-v="center" class="outline text-center justify-content-center">
        <b-col cols="12">
          <h1 > Bluebird </h1>
        </b-col>
        <b-col cols="12">
          <h3 class="text-center"> ~flowers~ </h3>
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col sm="12" lg="3">
          <a href="/#flowers">Flowers</a>
        </b-col>
        <b-col sm="12" lg="3">
          <a href="/#bouquets">Bouquets</a>
        </b-col>
        <b-col sm="12" lg="3">
          <a href="/#events">Events</a>
        </b-col>
        <b-col sm="12" lg="3">
          <a href="/#live-plants">Live Plants</a>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
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

    }

  }
</script>

<style scoped>
.splash-section__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 100%;
  
}

.splash-section__container .row {
}

.splash-section__container .outline {
  margin: 20px ;
  border: 2px solid white;
  border-radius: 8px;
  margin-top: 15vw;
}


h1 {
  font-size: 20vmin;
  color: white;
  font-family: 'bebas-neue', 'sans-serif';
  text-align: center !important;
}
h3 {
  font-family: 'bebas-neue', sans-serif;
  color: white;
  font-size: 10vmin;
  text-align: center;
}

 a:hover {
   font-family: 'bebas-neue', sans-serif;
    color: #E36940;
  }

.splash-section {
  min-height: calc(100vh - 80px);
  background-image: url("../assets/bluebird_storefront_wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: white;
  text-align:center;
  text-decoration: none;
  font-size: 2.7vmin;
  font-family: 'bebas-neue', sans-serif;
}



@media   only screen and (max-width: 991px) {


  a {
    width: 100%;
    display: block;
    font-size: 4vmax !important;
    text-align: center;
  }
}


@media  only screen and (max-width: 668px) {



}

</style>
