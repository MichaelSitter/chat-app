<template>
  <div class="active-channel">

    <div class="channel-title">
      <h1>{{activeChannel.name}}</h1>
      <span class="user-list">
        {{activeChannel.users.join(', ')}}
      </span>
    </div>

    <message-list class="messaging-area" />

    <div class="message-tray">
      <div class="input-group">
        <input type="text"
          class="form-control"
          v-model="message"
          @keyup.enter="send"
          :placeholder="$t('activeChannel.trayPlaceholder')" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
            :disabled="!message"
            type="button"
            @click="send">
            {{$t('activeChannel.submitButton')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MessageList from '@/components/MessageList.vue';

export default {
  components: {
    MessageList,
  },
  computed: {
    channelId() {
      return this.$route.params.id;
    },
    ...mapState([
      'activeChannel',
      'user',
    ]),
  },
  data() {
    return {
      message: '',
    };
  },
  async created() {
    this.loadChannel(this.channelId);
  },
  async beforeRouteUpdate(to, from, next) {
    await this.loadChannel(to.params.id);
    next();
  },
  updated() {
    window.scrollTo(0, document.body.scrollHeight);
  },
  methods: {
    async loadChannel(id) {
      // TODO: actions can be parallelized
      this.$store.commit('removeUserFromChannel', this.user.name);
      await this.$store.dispatch('fetchChannel', id);
      this.$store.commit('addUserToChannel', this.user.name);
      return this.$store.dispatch('fetchMessages', id);
    },
    async send() {
      if (!this.message) {
        return;
      }
      await this.$store.dispatch('sendMessage', {
        channelId: this.$route.params.id,
        name: this.user.name,
        message: this.message,
      });
      this.message = '';
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/base';

.channel-title {
  width: calc(100% - #{$left-menu-width});
  position: fixed;
  top: 0;
  height: $top-title-height;
  background-color: $white;
  box-shadow: 0 3px 3px grey;
}
.messaging-area {
  margin-top: $top-title-height;
  margin-bottom: $bottom-tray-height;
}
.message-tray {
  width: calc(100% - #{$left-menu-width});
  height: $bottom-tray-height;
  position: fixed;
  bottom: 0;
  padding: $unit;
  background-color: $white;
  box-shadow: inset 0 $unit $unit -16px grey;
}
</style>
