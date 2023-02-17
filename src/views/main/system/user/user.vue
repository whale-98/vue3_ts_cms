<template>
  <div class="user">
    <zj-form v-bind="searchFormConfig"></zj-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZjForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { ZjForm },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
