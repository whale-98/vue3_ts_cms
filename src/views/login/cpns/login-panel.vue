<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="20" style="vertical-align: text-bottom"><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="20" style="vertical-align: text-bottom"><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-button" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        // phoneRef.value?.lo
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  text-align: center;
  margin-bottom: 200px;
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .login-button {
    width: 100%;
  }
}
</style>
