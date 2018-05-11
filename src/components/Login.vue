<template>
<div class="login-splash">
  <div class="content">
    <div>
      <input @keyup.enter="saveName"
        v-model="name"
        :placeholder="$t('login.placeholder')">
    </div>
    <div>
      <button class="btn btn-primary"
        :disabled="!name"
        @click="saveName">
        {{$t('login.button')}}
      </button>
    </div>
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
      this.$router.push('/channel');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/base.scss';
.login-splash {
    position: fixed;
    width: 100%;
    background: $white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    .content {
      padding-top: 30vh;
      margin-left: auto;
      margin-right: auto;
      input {
        width: 300px;
        border-radius: $border-radius;
        margin-bottom: 3px;
      }
      button {
        width: 300px;
        border-color: none;
      }
    }
}
</style>
