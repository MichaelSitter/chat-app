<template>
  <div class="channel-list" v-if="user.name">
    <div class="user-tile">
      <div>{{user.name}}</div>
      <div>TODO: elapsed time</div>
    </div>
    <div v-for="channel in channels.list"
      :key="channel.id"
      class="channel"
      @click="gotoChannel(channel.id)">
      {{channel.name}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'user',
    'channels',
  ]),
  methods: {
    gotoChannel(id) {
      this.$router.push(`/channel/${id}`);
    },
  },
  created() {
    if (!this.$store.user) {
      this.$router.push('/');
    }
    this.$store.dispatch('fetchChannelList');
  },
};
</script>

<style lang="scss">
@import '../assets/base';
.user-tile {
  height: 100px;
}
.channel-list {
  color: $white;
  background-color: $primary;
}
.channel {
  cursor: pointer;
  height: 50px;
}
</style>
