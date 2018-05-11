<template>
<div class="message-container">
  <div class="message-list">
    <div v-for="(m, index) in messages.messages"
      :class="{
        'message-item': true,
        'message-owner': m.name === user.name,
      }"
      :key="index">
      <div class="message-text">
        {{m.message}}
      </div>
      <div v-if="m.name !== user.name" class="message-user">
        {{m.name}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'user',
    'messages',
  ]),
};
</script>

<style lang="scss">
@import '../assets/base';

.message-container {
  display: flex;
  flex-direction: column;
}

.message-item {
  width: 50%;
  padding: $unit;
  text-align: left;

  .message-text {
    border-radius: $unit;
    padding: $unit;
    background-color: $white;
  }

  .message-user {
    padding: $unit;
  }

  &.message-owner {
    .message-text {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
