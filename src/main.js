import App from 'App';
import Vue from 'vue';
import store from 'store';
import router from 'router';

export default new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
});
