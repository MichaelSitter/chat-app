import Vue from 'vue';

// TODO: inject server route from config
const server = 'http://localhost:8080/api/';

export default {
  getRooms() {
    return Vue.http.get(`${server}rooms`);
  },
  getRoom(id) {
    return Vue.http.get(`${server}rooms/${id}`);
  },
  getRoomMessages(id) {
    return Vue.http.get(`${server}rooms/${id}/messages`);
  },
  sendMessage(id, { name, message, reaction }) {
    return Vue.http.post(`${server}/rooms/${id}/messages`, {
      name,
      message,
      reaction,
    });
  },
};
