import api from '../services/api';

export default {
  state() {
    return {
      messages: [],
    };
  },
  mutations: {
    addMessage(state, { name, message, reaction = null }) {
      state.messages.push({
        name,
        message,
        reaction,
      });
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },
  actions: {
    async fetchMessages({ commit }, channelId) {
      const resp = await api.getRoomMessages(channelId);
      commit('setMessages', resp.body);
      return resp.body;
    },
    async sendMessage({ commit }, {
      channelId, name, message, reaction = null,
    }) {
      const resp = await api.sendMessage(channelId, { name, message, reaction });
      commit('addMessage', { name, message, reaction });
      return resp;
    },
  },
};
