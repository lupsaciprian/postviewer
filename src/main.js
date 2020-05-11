import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";

import state from "@/store/state";
import { allActions } from "@/store/actions";

Vue.config.productionTip = false;

new Vue({
  data: state,
  methods: allActions,
  render: (h) => h(App),
}).$mount("#app");
