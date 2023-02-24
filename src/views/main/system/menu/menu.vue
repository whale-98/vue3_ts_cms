<template>
  <div class="menu">
    <page-content ref="pageContentRef" :contentTableConfig="contentTableConfig" page-name="menu">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageContent },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
