<template>
  <div id="app" class="container">
    <channel-list class="channel-list"/>
    <router-view class="main-view" />
  </div>
</template>

<script>
import ChannelList from './ChannelList.vue';

export default {
  components: {
    ChannelList,
  },
};

</script>

<style lang="scss">
@import '../assets/base';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.channel-list {
  width: $left-menu-width;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.main-view {
  margin-left: $left-menu-width;
}
</style>
