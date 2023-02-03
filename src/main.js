import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
  // A DOM element to mount our view model.
  el: "#main",

  // This is the model.
  // Define properties and give them initial values.
  data: {
    active: "home",
  },

  // Functions we will be using.
  methods: {
    makeActive: function (item) {
      // When a model is changed, the view will be automatically updated.
      this.active = item;
    },
  },
});
