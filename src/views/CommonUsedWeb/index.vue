<template>
  <el-scrollbar>
    <el-space wrap :size="20">
      <cus-card-item
          v-for="(item,index) in webData" :key="index"
          :title="item.title"
          :content="item.content"
          :href="item.href"
          showFly
      />
    </el-space>
  </el-scrollbar>
</template>

<script lang="ts" setup>
/**
 * 2023/5/17
 * @author zy
 * @description 常用网站
 */
import {ref} from 'vue';
import { webData,webDataType } from '@/const/BaseData'
import CusCardItem from '@/components/CusCardItem.vue'


</script>

<style lang="less" scoped>

</style>    