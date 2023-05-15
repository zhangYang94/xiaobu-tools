<template>
  <el-container class="page-container">
    <custom-slider />
    <el-container direction="vertical">
      <custom-header />
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
/**
 * 2023/5/15
 * @author zy
 * @description 自定义布局
 */
import {ref} from 'vue';
import customSlider from '@/customLayout/slider/index.vue'
import customHeader from '@/customLayout/header/index.vue'

</script>

<style lang="less" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;

  .layout-container{
    height: 100%;
  }
}
</style>    