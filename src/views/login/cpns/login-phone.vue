<template>
  <div class="login-phone">
    <el-form :model="phone" :rules="rules">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button>获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .el-button {
    margin-left: 5px;
  }
}
</style>
