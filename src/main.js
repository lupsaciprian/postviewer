import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import { state } from './state/state';

Vue.config.productionTip = false;

new Vue({
  data: state,
  render: (h) => h(App),
}).$mount('#app');
