<template>
  <el-form
    :model="account"
    :rules="accountRules"
    :hide-required-asterisk="true"
    ref="formRef"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password ">
      <el-input
        v-model="account.password"
        placeholder="请输入密码"
        showPassword
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    //引用form实例
    const formRef = ref<InstanceType<typeof ElForm>>()

    //表单验证规则
    const accountRules = {
      name: [
        { required: true, message: '必须输入用户名', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{6,20}$/,
          message: '必须是6~20个字母或者数字',
          trigger: 'blur'
        }
      ]
    }
    //处理登陆事件
    const handleLogin = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('正在登录')
        }
      })
    }

    return { account, accountRules, handleLogin, formRef }
  }
})
</script>

<style scoped></style>
