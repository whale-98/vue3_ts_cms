<template>
  <div class="nav-header">
    <el-icon :size="30" class="fold-menu" @click="handleFoldClick">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: { UserInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
