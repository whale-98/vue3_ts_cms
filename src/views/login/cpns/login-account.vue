<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 1. 判断是否要记住密码
        if (isKeepPassword) {
          // 本地存储
          localCache.setCache('name', account.name)
          localCache.setCache('password', account.password)
        } else {
          localCache.deleteCache('name')
          localCache.deleteCache('password')
        }
        // 2. 开始登录验证
        store.dispatch('login/accountLoginAction', { ...account })
        console.log(valid)
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style lang="less" scoped></style>
