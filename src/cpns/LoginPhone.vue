<template>
  <el-form :hide-required-asterisk="true">
    <el-form-item label="手机号" prop="phoneNum">
      <el-input placeholder="请输入手机号码" />
    </el-form-item>
    <el-form-item label="验证码" prop="phoneCode " class="yanz">
      <el-input placeholder="请输入验证码" />
      <el-button type="primary">验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
/* .yanz {
  display: flex;
  justify-content: space-around;
} */
</style>
