<template>

  <div class="container">
        <top-bar></top-bar>

    <form>
      
      <input v-model="message" placeholder="edit me">
      <input v-model="message" placeholder="edit me">
      <input v-model="message" placeholder="edit me">
      <input v-model="message" placeholder="edit me">
      <input v-model="message" placeholder="edit me">
    </form>
  </div>
  
</template>


<script>

  import VLink from '../components/VLink.vue'
  import TopBar from '../components/TopBar.vue'

  export default {
    components: {
      VLink,
      TopBar,
    },
    data() {
        return {
            requestForm: {
                'firstName': '',
                  'lastName': ''
            }
        }
    } 
  }
</script>