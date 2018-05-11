<template>
  <div class="channel-list" v-if="user.name">
    <div class="user-tile">
      <h1>{{user.name}}</h1>
      <div>{{$t('channelList.onlineFor', [loggedInDuration()])}}</div>
    </div>
    <div v-for="channel in channels.list"
      :key="channel.id"
      :class="{
        channel: true,
        active: activeChannel.id === channel.id,
      }"
      @click="gotoChannel(channel.id)">
      <span>{{channel.name}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'user',
      'channels',
      'activeChannel',
    ]),
  },
  methods: {
    loggedInDuration() {
      return Math.round((Date.now() - this.$store.state.user.loginTime) / 1000 / 60);
    },
    gotoChannel(id) {
      this.$router.push(`/channel/${id}`);
    },
  },
  async mounted() {
    const channels = await this.$store.dispatch('fetchChannelList');
    if (channels[0]) {
      this.$router.push(`/channel/${channels[0].id}`);
    }
  },
};
</script>

<style lang="scss">
@import '../assets/base';
.user-tile {
  height: 100px;
  text-align: left;
  padding: $unit;
  margin-bottom: $unit;
}
.channel-list {
  color: $white;
  text-align: left;
  background-color: $primary;
}
.channel {
  line-height: $unit * 4;
  cursor: pointer;
  height: $unit * 4;
  span {
    padding-left: $unit;
  }

  &.active {
    background-color: $dark-orange;
  }
}
</style>
