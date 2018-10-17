<template>

  <div class="splash-section">
    <div class="splash-wrapper-top">
      <div class="splash-box">
        <p class="splash-copy-large"> Bluebird </p>
        <p class="splash-copy-accent"> ~flowers~ </p>
      </div>
    </div>
    <div class="splash-wrapper-2">
      <div class="splash-links">
        <div>
            <v-link href="/#flowers">Flowers</v-link>
        </div>
        <div>
            <v-link href="/#bouquets">Bouquets</v-link>
        </div>
        <div>
            <v-link href="/#events">Events</v-link>
        </div>
        <div>
            <v-link href="/#live-plants">Live Plants</v-link>
        </div>     
      </div>
    </div>
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
.splash-wrapper-top {
  height: 80%;
}
.splash-wrapper-2 {
  height: 20%;
}
.splash-section {
  height: 85vh;
  margin-top: 15vh;
  background-image: url("./../assets/bluebird_storefront_wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.splash-section img {
  filter: brightness(50%);
  top:0;
  right:0;
  left:0;
}

.splash-links  {
  display:block;
  width:100%;
  margin:auto;
  max-width:800px;
  color: white;
  margin: auto;
}

.splash-links div {
  width: 24%;
  display: inline-block;
  text-align: center;
}

a {
  color: white;
  text-align:center;
  text-decoration: none;
  font-family: bebas;
}
.splash-box {
  border: 1px solid white;
  margin: auto;
  display: block;
  clear:both;
  width:80%;
  max-width: 800px;
  transform: translate(0%, 40%)
}

.splash-copy-large {
  color: white;
  font-size: 64px;
  text-align: center;
}

.splash-copy-accent {
  color: white;
  font-style: italic;
  text-align: center;
  font-size: 52px;
}

</style>
