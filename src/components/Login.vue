<template>
<div class="login-splash">
  <div class="content">
    <input class="" v-model="name" :placeholder="$t('login.placeholder')">
    <button class="btn btn-primary" :disabled="!name" @click="saveName">
      {{$t('login.button')}}
    </button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    saveName() {
      if (!this.name) {
        return;
      }

      this.$store.commit('setUserName', this.name);
      this.$router.push('/chat');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/base.scss';
.login-splash {
    position: absolute;
    background: $white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    .content {
      display: flex;
      flex-direction: column;

      input {
        width: 300px;
        border-radius: $border-radius;
      }
      button {
        width: 300px;
        border-color: none;
      }
    }
}
</style>
