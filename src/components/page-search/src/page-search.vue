<template>
  <div class="page-search">
    <zj-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="refresh" @click="handleResetClick">重置</el-button>
          <el-button icon="search" type="primary">搜索</el-button>
        </div>
      </template>
    </zj-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZjForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { ZjForm },
  setup(props) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    const handleResetClick = () => {
      formData.value = formOriginData
    }
    return { formData, handleResetClick }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
