<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn' // element中文化

export default defineComponent({
  name: 'App',
  setup() {
    const locale = ref(zhCn)
    return { locale }
  }
})
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>
