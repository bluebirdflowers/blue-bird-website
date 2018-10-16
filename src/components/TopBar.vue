<template>
  <div class="top-bar">
    <div class="top-bar-logo">
      <span>
        <p class="logo-bluebird"> BLUEBIRD</p>
      </span>
      <span class="logo-flowers">
        <p> ~flowers ~ </p>
      </span>
    </div>
    
    <div class="top-links">
      <div class="top-link-wrapper">
          <span class="top-link-span">
            <font-awesome-icon icon="phone" />
            <p class="top-link-p"> call us </p>
          </span>
      </div>
      <div>
          <span class="top-link-span">
            <font-awesome-icon icon="list-alt" />
            <p class="top-link-p"> find us </p>
          </span>
      </div>
      <div>
          <span class="top-link-span">
            <font-awesome-icon icon="store" />
            <p class="top-link-p"> order </p>
          </span>
      </div>
    </div>
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

    }
  }
</script>

<style scoped>
.top-bar-logo {
  line-height: 0px;
}
.logo-bluebird {
  text-align: center;
  font-family: Bebas;
  font-size: 36px;
}
.logo-flowers {
  text-align: center;
  font-family: Didot;
  font-size: 24px;
}
.top-links {
  color: #ffffff;
  display:inline;
}
.top-link-span {
  display: inline;
  margin: 16px 8px;
  line-height: 100px;
}
.top-link-p {
    display: inline;
    font-family: Bebas;
    font-weight: 200;
}

  .top-bar {
    width: auto;
    display: flex;
    justify-content: space-between;
    background-color: #205473;
    padding:16px;
    margin: 0;
  }
  .top-bar-logo {
    color: white;
  
  }
  .top-links {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
