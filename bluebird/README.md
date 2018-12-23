# bluebird

> A Vue.js project

## Email Form 

Environment Variables are set using firebase config variables.  This is for the email that is sending the emails, the worker email.  

The email also, must enable unsafe signin to enable sending.  

    $ functions:config:set gmail.email=bluebirdflowerrs@gmail.com
    $ functions:config:set gmail.passwword=password



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
followed by firebase deploy 
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
