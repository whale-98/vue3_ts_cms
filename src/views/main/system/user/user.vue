<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>

    <page-content :contentTableConfig="contentTableConfig" page-name="user"></page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageSearch, PageContent },
  setup() {
    const selectionChange = (value: any) => {
      console.log(value, '选中')
    }

    return {
      selectionChange,
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
