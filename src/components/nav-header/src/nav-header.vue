<template>
  <div class="nav-header">
    <el-icon :size="30" class="fold-menu" @click="handleFoldClick">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
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
  .fold-menu {
    cursor: pointer;
  }
}
</style>
