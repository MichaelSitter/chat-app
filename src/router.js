import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import EmptyChannel from '@/components/EmptyChannel.vue';
import ActiveChannel from '@/components/ActiveChannel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/channel',
      component: EmptyChannel,
    },
    {
      path: '/channel/:id',
      component: ActiveChannel,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
