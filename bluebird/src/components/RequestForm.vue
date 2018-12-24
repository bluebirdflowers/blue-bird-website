<template>
  <div id="app">
    <div class="request-container">
      <h2 :class="contactFormClass"> Get in touch! </h2>

      <b-container :class="contactFormClass">
        <b-row>
          <b-form @submit="onSubmit" class="text-left" id="bluebirdRequestForm">
 
          <label for="firstName">First Name</label>
          <b-input 
            v-model="form.firstName" 
            class="text-left mb-2 mr-sm-2 mb-sm-0" 
            id="firstName" 
            placeholder="Ryan" />
           
          <label for="lastName">
            Last Name
          </label>
          <b-input 
            v-model="form.lastName"  
            class="mb-2 mr-sm-2 mb-sm-0" 
            id="lastName" 
            placeholder="Gosling" />
          
          <label for="phoneNumber">
            Phone Number 
          </label>
          <b-input 
            v-model="form.phoneNumber"  
            class="mb-2 mr-sm-2 mb-sm-0" 
            id="phoneNumber" 
            placeholder="555-867-5309" />
                  
          <label for="emailAddress">
            Email
          </label>
          <b-input 
            v-model="form.emailAddress"
            class="mb-2 mr-sm-2 mb-sm-0" 
            id="emailAddress" 
            placeholder="mark.zuckerburg@gmail.com" />
          
          <label for="specialMessage">
            Comments or more info 
          </label>
          <b-form-textarea 
            id="specialMessage"
            state=""
            v-model="form.specialMessage"
            placeholder="My mom loves daisies.  Favorite color is pink.I can't stand the smell of roses."
            :rows="3">
          </b-form-textarea>        
           <b-button class="btn" type="submit" id="submit" variant="primary">
             Submit
            </b-button>
        </b-form>
      </b-row>
    </b-container>
    <b-container v-bind:class="thanksMessageClass">
      <h2> Thank you, we will be in touch! </h2>
    </b-container>
    </div>
  </div>
</template>

<script>

import SplashArea from './SplashArea.vue'
import FlowerCsa from './FlowerCsa.vue'
import Events from './Events.vue'
import Bouquets from './Bouquets.vue'
import TopBar from './TopBar.vue'
import LivePlants from './LivePlants.vue'
import FooterNav from './FooterNav.vue'
import RequestForm from './RequestForm.vue'

export default {
  data: function() {
    return {
      form: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        specialMessage: ''
      },
      contactFormClass: 'show-contact-form',
      thanksMessageClass: 'hide-thanks-message'
    }
  },
  components: {
    TopBar,
    SplashArea,
    FlowerCsa,
    Events,
    Bouquets,
    LivePlants,
    FooterNav,
    RequestForm   
  },
  /* mounted: function() {
      login:  {
        console.log("this", this);
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            alert("Well done, bravo!", JSON.stringify(user))
          },
          function(err) {
            alert('ooops', + err)
          }
        )
      }
  },*/
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      //Handling Contact Form

      if(this.form.phoneNumber != "" && this.form.emailAddress != "" && this.form.firstName != "") {

        const leadTimestamp = Math.floor(Date.now() / 1000);
        this.contactFormClass = 'hide-contact-form';
        this.thanksMessageClass = 'show-thanks-message';
        firebase.database().ref('leads').once('value', snapshot => {
          var totalLeads = snapshot.numChildren();
          totalLeads++;
          var database = firebase.database();
          database.ref('leads').child(totalLeads).set({
            first: this.form.firstName,
            last: this.form.lastName,
            phone: this.form.phoneNumber,
            email: this.form.emailAddress,
            message: this.form.specialMessage,
            time: leadTimestamp
          });
        });
      
      }
    }
  }
}
</script>




<style>

.show-contact-form {
  display: block;
}

.hide-contact-form {
  display: none;
}

.show-thanks-message {
  display: block;
}

.hide-thanks-message {
  display: none;
}


h1, h2, label {
  font-weight: normal;
  font-family: 'bebas-neue', 'sans-serif';

}

h2 {
  margin-top: 64px;
}

form {
  margin: auto;
  width: 100%;
  max-width: 640px;
  padding: 16px;

}
.btn {
  height: 6vmax;
  background-color: #E36940;
  border-radius: 5px;
  width: 100%;
  margin-top: 16px;
  color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}
.btn:hover {
  background-color:#E0A591;
  	box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
}
.btn:active {
  background-color: #E36940;
  box-shadow: none;
}

label {
  margin-top: 16px;
  text-align: left !important;
}

placeholder {
  color: rgba(211,211,211, .5);
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

p {
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
  color: rgba(211,211,211, .5);
}

.request-container {
  min-height: calc( 100vh - 100px );
}

@media (max-width: 991px) {
 
 p {
   font-size: 2vw ;
 }
}
</style>
