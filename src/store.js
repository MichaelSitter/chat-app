import Vue from 'vue';
import Vuex from 'vuex';
import user from './stores/user';
import channels from './stores/channels';
import activeChannel from './stores/activeChannel';
import messages from './stores/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    channels,
    activeChannel,
    messages,
  },
});
