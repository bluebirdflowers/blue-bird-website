<template>

  <section class="container">

    <div id="flowers" class="flower-section">
      
      <div class="left-copy">
         <div class="wrap-details"> 

        <h1> Flower CSA </h1>
        <p>Our flower CSA’s are the perfect item to cheer up your home or business.  We work with you to decide frequency, types of flowers, and will even support you with our own small vases if that is what you require.  Below are estimates to help you get an idea of what is available but know we can customize any order to your needs.</p>
        <div class="small-csa">
         <div class="name">
           <h2> SMALL</h2>
           <p> 1-3 short stemmed floral pieces. </p>
         </div>
         <div class="price-vase">
          <h2> 10$ / each </h2>
         </div>         
         <div class="price-no-vase">
          <h2> 15$ / each </h2>
         </div>
        </div>

        <div class="medium-csa">
         <div class="name">
           <h2> MEDIUM</h2>
           <p> 1-3 short stemmed floral pieces. </p>
         </div>
         <div class="price-vase">
          <h2> 10$ / each </h2>
         </div>         
         <div class="price-no-vase">
          <h2> 15$ / each </h2>
         </div>
        </div>
      </div>

        <div class="large-csa">
         <div class="name">
           <h2> LARGE</h2>
           <p> 1-3 short stemmed floral pieces. </p>
         </div>
         <div class="price-vase">
          <h2> 10$ / each </h2>
         </div>         
         <div class="price-no-vase">
          <h2> 15$ / each </h2>
         </div>
        </div>
        <div class="fyi">
        <p> You are only charged the vase price for first order, after that the vase is yours!  
            Have a special request for a particular vase?  Reach out to me and I’ll be happy to help you find them. 
            Vase size may determine number of stems in the arrangement, price will reflect this. 
            Vase rental available with deposit. </p>
        </div>
      </div>
      <div class="right-image">
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
  flex-direction: column;
}
.container {
  width:100%;
  max-width: 1200px;
  padding:16px;
  margin: auto;
}

.small-csa, .medium-csa, .large-csa {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#flowers {
  width: auto;
  height: 100vh !important;
}
.left-copy {
  display:inline-block;
  width: 49%;

}
.right-image {

}

</style>