<template>
  <b-container class="bluebird-footer">
    <b-row class="bluebird-footer__row">
        <b-col class="text-center text-md-left" cols="12" md="4">
          <ul>
            <li>
              <a  href="https://www.facebook.com/pages/Blue-Bird-Flowers/256188174927013?__tn__=%2CdkC-R-R&eid=ARBbBDb5Ps5hNiAhtIcOCVD8WSgXX8DOqw5e6dBu0lpkzi4-bb32dHbQCwo4KMPuOSnaxldwz0e1B8mn&hc_ref=ARQyFiGstLOnoHIMvFA5nIP-u0EPfZIjvZ-HIj1isKzb1JdnePZpPDwhbgg_75mElyg&fref=tag"> 
                <font-awesome-icon :icon="['fab', 'facebook']" /> 
                <p>Facebook </p>
              </a>
            </li>
            <li>
              <a  href="https://www.instagram.com/flowersbluebird/">
                <font-awesome-icon :icon="['fab', 'instagram']" /> 
                <p class="ml-8"> Instagram </p> 
              </a>
            </li>
            <li>
              <a  href="mailto:bluebirdflowersllc@gmail.com"> 
                <font-awesome-icon icon="envelope" /> 
                <p> Email </p>
              </a>
            </li>
            </ul>
        </b-col>
        <b-col class="text-center" cols="12" md="4">
          <b-row class="bluebird-footer__row">
            <address>
            <p> Open daily 2-9pm 
            <br>
             1203 Willamette Street 
            <br>
             Eugene Oregon 97401 </p>
            </address>
          </b-row>
        </b-col>
        <b-col class="text-center text-md-right" cols="12" md="4">
          <ul>
            <li><router-link to="/privacy-policy">
              <a  href="/"> 
                <p >Privacy Policy </p>
              </a></router-link>
            </li>
            <li>
              <router-link to="/terms-of-use">
                <a  href="/">
                  <p> Terms of Use </p> 
                </a>
              </router-link>
            </li>
            <li>
                <p> Copyright Bluebird Flowers 2018 </p>
            </li>
            </ul>
        </b-col>
      </b-row>  
    </b-container>
</template>


<style>
.bluebird-footer {
    background-color: #205473;
    color: white;
    height: auto;
    font-family: 'bebas-neue', sans-serif;
    width: 100%;
    margin: 0px;
    padding: 0px;
    max-width: 100%;
}
.bluebird-footer__row,
address {
  max-width: 1366px;
  margin: auto;
  padding: 16px;
}


.bluebird-footer ul {
  margin: auto;
}
.bluebird-footer ul li {
  display:block;
  font-family: 'bebas-neue', sans-serif;
  line-height: 32px;
  margin: auto !important;
  color: white;
}

.bluebird-footer p {
  display:block;
  font-family: 'bebas-neue', sans-serif;
  margin: auto !important;
  color: white;

}

.bluebird-footer ul li p,
.bluebird-footer  p {
  display: inline;
  margin-left: 8px;
  font-size: 14px;
  color: #9FBFD0 !important;
  font-family: 'bebas-neue', sans-serif;
}

.bluebird-footer ul li a {
  display: inline;
  font-family: 'bebas-neue', sans-serif;
  color: #9FBFD0 !important;
}

.bluebird-footer ul a:hover,
 {
  color: #E0A591;
}
.fab {
  margin-right: 8px !important;
}
</style>