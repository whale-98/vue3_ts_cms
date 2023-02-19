<template>
  <div class="page-content">
    <zj-table :listData="dataList" v-bind="contentTableConfig" @selectionChange="selectionChange">
      <!--1.header中的插槽-->
      <template #headerHandler>
        <el-button type="primary" icon="plus">新建用户</el-button>
      </template>
      <!--2.列中的插槽-->
      <template #enable="scope">
        <el-button plain size="small" :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="Edit" type="primary" size="small" link>编辑</el-button>
          <el-button icon="Delete" type="primary" size="small" link>删除</el-button>
        </div>
      </template>
      <!--3.footer中的插槽-->
      <template></template>
    </zj-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ZjTable from '@/base-ui/table'
import { useStore } from '@/store'
export default defineComponent({
  components: { ZjTable },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))
    // const userCount = computed(() => store.state.system.userCount)
    return { dataList }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
