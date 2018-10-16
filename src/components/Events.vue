<template>

  <section class="container">

    <div id="events" class="event-section">
       
      <div class="left-image">

      </div>

      <div class="right-copy">
              <div class="wrap-details"> 

        <h1> EVENTS </h1>
        <p>Special events. such as a wedding, graduation party, senior prom, 
        promotion, Christmas Thanksgiving, Anniversary, Valentine’s Day, 
        Mother’s Day, Birthday’s and just because.  We’ve got you covered!</p>       
        

          <div class="minimum-notice">
            <h2> MINIMUM  NOTICE </h2>
            <p> In order to ensure we are ready for your special day, we encourage 
            clients to let us know their request at least 10 days in advance. 
            This time will allow us ample time to ensure our stock is fresh 
            and ready for your special day.</p>
          </div>

          <div class="price-range">
            <h2> PRICE  RANGE </h2>

            <p>
            Price range for special events ranges depending on your needs, 
            number of items requested, timing, and what you would like in 
            the mix.  We work with all budgets and are ready to help you 
            decorate your celebrations.
            </p>
          </div>

         </div>

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
    },
    data: function() {
      return {
        images: '',
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
.wrap-details {
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between !important;
}
.container {
  width:100%;
  max-width: 1200px;
  padding:16px;
  margin: auto;
}

.description, .minimum-notice, .price-range {
}

#events {
  width: auto;
  height: 100vh !important;
}
.right-copy {
  display:inline-block;
  width: 49%;
  height: 100vh;

}
.left-image {
  display:inline-block;
  width: 49%;

}

</style>