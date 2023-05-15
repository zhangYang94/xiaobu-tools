<template>
  <el-page-header :icon="ArrowLeft" class="page-header">
    <template #content>
      <span class="text-large font-600 mr-3"> {{ header_title }} </span>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
/**
 * 2023/5/15
 * @author zy
 * @description index.vue
 */
import {ref} from 'vue';
import { ArrowLeft } from '@element-plus/icons-vue'

const header_title = '';

</script>

<style lang="less" scoped>
.page-header{
  padding: 15px 20px;
  border-bottom: 1px solid var(--el-border-color);
}
</style>    