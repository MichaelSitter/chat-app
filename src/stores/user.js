export default {
  state() {
    return {
      name: '',
    };
  },
  mutations: {
    setUserName(state, name) {
      state.name = name;
    },
  },
};
