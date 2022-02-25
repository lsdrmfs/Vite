<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from '@/cpns/LoginPanel.vue'
export default defineComponent({
  components: { LoginPanel }
})
</script>

<style lang="less" scoped>
.login {
  // 居中
  display: flex;
  justify-content: center;
  align-items: center;
  //背景图
  position: absolute;
  top: 22.5px;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/img/bg.svg');
}
</style>
