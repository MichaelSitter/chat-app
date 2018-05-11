import api from '../services/api';

export default {
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    setChannels(state, channels) {
      state.list = channels;
    },
  },
  actions: {
    async fetchChannelList({ commit }) {
      const resp = await api.getRooms();
      commit('setChannels', resp.body);
      return resp.body;
    },
  },
};
