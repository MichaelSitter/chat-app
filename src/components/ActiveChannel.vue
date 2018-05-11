<template>
  <div class="active-channel">
    <div class="channel-title">
      <h1>{{activeChannel.name}}</h1>
      <span class="user-list">
        {{users}}
      </span>
    </div>
    <div class="message-area">
    </div>
    <div class="message-tray">
      <input
        v-model="message"
        @keyup.enter="send"
        :placeholder="$t('activeChannel.trayPlaceholder')"  />
      <button class="btn btn-link"
        @click="send">
        {{$t('activeChannel.submitButton')}}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    activeChannel: 'activeChannel',
    users: 'activeChannel.users',
  }),
  data() {
    return {
      message: '',
    };
  },
  created() {
    this.$store.dispatch('fetchChannel', this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('fetchChannel', to.params.id);
    next();
  },
  methods: {
    send() {
      console.log(this.message);
      this.message = '';
    },
  },
};
</script>

<style lang="scss">
.channel-title {
  width: 100%;
  position: absolute;
  top: 0;
}
.message-tray {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
