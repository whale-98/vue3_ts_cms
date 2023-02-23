<template>
  <div class="page-search">
    <zj-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="refresh" @click="handleResetClick">重置</el-button>
          <el-button icon="search" type="primary" @click="handleQueryClick">搜索</el-button>
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
  emit: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 1.优化一： formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    // 2.优化二：用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    // 优化三：点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
