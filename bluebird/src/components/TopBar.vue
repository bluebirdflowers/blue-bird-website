<template>
<div>
  <b-nav class="bluebird-nav">
    <b-nav-item class="col" xs="12" md="3" >
          <a href="tel:+15417805510"> <font-awesome-icon icon="phone" /> Call Us</a>
    </b-nav-item>        

    <b-nav-item v-on:click="mapsSelector" class="col" xs="12" md="3" > 
        <font-awesome-icon icon="store" />
         Find Us 
      </b-nav-item>
    <b-nav-item class="col" xs="12" md="3"  disabled> 
      <a href="/request"> 
            <font-awesome-icon icon="list-alt" /> Request  </a>
    </b-nav-item>
  </b-nav>
</div>
  
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
            window.open("maps://maps.google.com/maps?daddr=44.051658,-123.092308&amp;ll=");
        else /* else use Google */
           window.open("https://maps.google.com/maps?daddr=44.051658,-123.092308&amp;ll=");
      }   
    }
  }
</script>

<style scoped>

.bluebird-nav {
  background-color: #205473;
  height: 100px;
}

.bluebird-nav a {
  color: white;
  font-family: 'bebas-neue', sans-serif;
  font-size: 2vmin;
  line-height: 100px;
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


 .bluebird-nav a {
  line-height: 80px;
}
}
</style>
