<template>
  <div class="loginPanel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登陆">
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="手机登陆">
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="other">
      <el-checkbox v-model="isKeepPassword" label="记住密码" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>

    <el-button type="primary" class="button" @click="loginClick"
      >登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from '@/cpns/LoginAccount.vue'
import LoginPhone from '@/cpns/LoginPhone.vue'

export default defineComponent({
  name: 'LoginPanel',
  components: { LoginAccount, LoginPhone },
  setup() {
    //记住密码
    const isKeepPassword = ref(true)
    //处理登陆事件
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginClick = () => {
      loginAccountRef.value?.handleLogin(isKeepPassword.value)
    }

    return { loginAccountRef, loginClick, isKeepPassword }
  }
})
</script>
<style lang="less" scoped>
h1 {
  text-align: center;
}
.loginPanel {
  margin-top: -150px;
  width: 320px;
}
.other {
  display: flex;
  justify-content: space-between;
}
.button {
  margin-top: 10px;
  height: 35px;
  width: 100%;
}
</style>
