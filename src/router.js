import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import EmptyChannel from '@/components/EmptyChannel.vue';
import ActiveChannel from '@/components/ActiveChannel.vue';
import ChannelList from '@/components/ChannelList.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      components: {
        nav: Login,
        main: EmptyChannel,
      },
    },
    {
      path: '/channel',
      components: {
        nav: ChannelList,
        main: EmptyChannel,
      },
    },
    {
      path: '/channel/:id',
      components: {
        nav: ChannelList,
        main: ActiveChannel,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !store.getters.activeUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
