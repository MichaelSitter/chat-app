import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import App from '@/components/App.vue';
import router from './router';
import store from './store';
import messages from './messages';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueResource);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
