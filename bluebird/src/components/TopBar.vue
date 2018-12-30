<template>
  <b-container class="bluebird-nav-wrapper">
    <b-row class="bluebird-nav" sticky="true">
      <b-col class="text-left" cols="8" md="6">
        <a class="title-link" href="/"> Blue Bird Flowers</a>
      </b-col>
      <b-col cols="1" md="2">
        <a href="tel:1-541-780-5510"> 
          <font-awesome-icon icon="phone" /> 
          <p> Call Us </p> 
        </a>
      </b-col>
      <b-col cols="1" md="2" class="find-us" v-on:click="mapsSelector">
          <font-awesome-icon class="find-us__icon" icon="store" /> 
          <p>Find Us </p>
      </b-col>
      <b-col cols="1" md="2">
        <router-link to="/request-form">
          <a>
            <font-awesome-icon icon="list-alt" /> 
            <p>Request</p>
          </a>
        </router-link>
      </b-col>
      </b-row>  
      </b-container>
</template>

<script>
  import routes from '../routes'

  export default {
    props: {

    },
    computed: {
    },
    methods: {
      mapsSelector: function() {
        if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) || 
        (navigator.platform.indexOf("iPad") != -1) || 
        (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=44.046380,-123.092330&amp;ll=");
        else /* else use Google */
           window.open("https://maps.google.com/maps?daddr=44.046380,-123.092330&amp;ll=");
      }   
    }
    /* mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("nav")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    },*/
  }
</script>

<style scoped>
a:hover,
a p:hover,
.find-us:hover .find-us__icon,
.find-us:hover p {
  color: #E0A591;
  text-decoration:underline;
}

.bluebird-nav-wrapper {
  width: 100%;
  position: sticky;
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
  max-width: 100%;
  margin: 0px;
  padding: 0px;
  z-index: 1200;

  background-color: #205473;
}
.bluebird-nav {
  background-color: #205473;
  height: 100px;
  max-width: 1200px;
  margin: auto;
  padding-left: 32px;
  padding-right: 32px;
}

.bluebird-nav p,
.find-us p,
.find-us__icon {
  display: inline;
}
.bluebird-nav a, 
.bluebird-nav p, 
.find-us,
.find-us p,
.find-us__icon {
  color: white;
  font-family: 'bebas-neue', sans-serif;
  font-size: 1.8vmax;
  line-height: 100px;
}
.title-link {
  font-size: 3vmax !important;
}
.bluebird-nav a:hover {
  color: #E0A591;
}

@media   only screen and (max-width: 991px) {
  .title-header {
    width: 100% !important;
    display: block !important;
  }
    .title-header a {
    font-size: 4vmax;
  }
   .bluebird-nav p {
     font-size: 2vmax;
    display: none !important;
  }
}

@media only screen and (max-width: 720px) {


}

 @media only screen and (max-width: 320px) {
   .bluebird-nav {
     padding-left: 8px !important;
     padding-right: 8px !important;
   }
}
</style>
