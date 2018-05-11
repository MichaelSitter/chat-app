export default {
  state() {
    return {
      name: '',
      loginTime: NaN,
    };
  },
  getters: {
    activeUser: state => state.name,
    loggedInDuration: state =>
      Math.round((Date.now() - state.loginTime) / 1000 / 60),
  },
  mutations: {
    setUserName(state, name) {
      state.name = name;
      state.loginTime = Date.now();
    },
  },
};
