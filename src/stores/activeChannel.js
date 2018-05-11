import api from '../services/api';

export default {
  state() {
    return {
      id: '',
      name: '',
      users: [],
    };
  },
  mutations: {
    addUserToChannel(state, user) {
      state.users.push(user);
    },
    removeUserFromChannel(state, user) {
      const idx = state.users.indexOf(user);
      if (idx > -1) {
        state.users.splice(idx, 1);
      }
    },
    setActiveChannel(state, { id, name, users }) {
      state.id = id;
      state.name = name;
      state.users = users;
    },
  },
  actions: {
    async fetchChannel({ commit }, id) {
      const resp = await api.getRoom(id);
      commit('setActiveChannel', resp.body);
      return resp.body;
    },
  },
};
