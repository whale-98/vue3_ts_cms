<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig"></page-search>

    <PageContent :contentTableConfig="contentTableConfig" page-name="role"></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageContent, PageSearch },
  setup() {
    return { contentTableConfig, searchFormConfig }
  }
})
</script>

<style scoped></style>
