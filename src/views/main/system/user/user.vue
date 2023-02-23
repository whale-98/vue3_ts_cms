<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      page-name="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: { PageSearch, PageContent },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const selectionChange = (value: any) => {
      console.log(value, '选中')
    }

    return {
      pageContentRef,
      selectionChange,
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
