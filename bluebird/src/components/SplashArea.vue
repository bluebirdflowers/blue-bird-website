<template>

  <div class="splash-section">

    <b-container class="splash-section__container">

      <b-row align-v="center" class="outline text-center justify-content-center">
        <b-col sm="11" md="10" lg="8">
          <h1 > Blue Bird </h1>
        </b-col>
        <b-col cols="12">
          <h3 class="text-center"> ~flowers~ </h3>
        </b-col>
      </b-row>

      <b-row align-v="center" class="text-center justify-content-center">
        <b-col sm="11" md="10" lg="8">
          <b-row align-v="center">
            <b-col class="p-2" sm="12" md="6" lg="3">
              <b-button variant="outline" v-on:click="scrollToItem('flowers')">
                Flowers CSA
              </b-button>
            </b-col>
            <b-col class="p-2" sm="12" md="6" lg="3">
              <b-button variant="outline" v-on:click="scrollToItem('bouquets')">
                Bouquets
              </b-button>
            </b-col>
            <b-col class="p-2" sm="12" md="6" lg="3">
              <b-button variant="outline" v-on:click="scrollToItem('events')">
                Events
              </b-button>
            </b-col>
            <b-col class="p-2" sm="12" md="6" lg="3">
              <b-button variant="outline" v-on:click="scrollToItem('live-plants')">
                Live Plant
              </b-button>
            </b-col>
          </b-row>
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
    data: function() {
      return {      
        scrollMargin: '100',
        scrollId: '',
      }
    },
    computed: {

    },
    methods: {
      scrollToItem: function (scrollId) {
        var element = document.getElementById(scrollId);
        var elementLocation = element.offsetTop;
        var elementOffset = elementLocation - 100;
        window.scrollTo(0, elementOffset);
      }

      
    }

  }
</script>

<style scoped>
.splash-section__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.splash-section__container .row {
}

.btn {
  font-family: 'bebas-neue', sans-serif;
  font-size: 20px;
  width: 100%;
  background-color: rgba(255,255,255,.8) !important;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.btn:hover {
  font-family: 'bebas-neue', sans-serif;
  font-size: 20px;
  width: 100%;
  color: white;
  background-color: rgba(227,105,64,.8) !important;
}

.splash-section__container .outline {
  margin: 20px ;
  background-color: rgba(255,255,255,.8);
  border-radius: 8px;
  margin: 12vw auto 32px auto;
  padding: 24px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}


h1 {
  font-size: 20vmin;
  color: black;
  font-family: 'bebas-neue', 'sans-serif';
  text-align: center !important;
}
h3 {
  font-family: 'bebas-neue', sans-serif;
  color: black;
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
