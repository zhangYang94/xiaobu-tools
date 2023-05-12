<template>
  <div class="page-container">
    <el-container class="layout-container-demo">
      <el-aside width="200px">
        <x-slider />
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>

        <el-main>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
/**
 * 2023/5/12
 * @author zy
 * @description index.vue
 */
import {ref} from 'vue';
import xSlider from './silder/index.vue'

</script>

<style lang="less" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;

  .layout-container-demo{
    height: 100%;

  }
}
</style>    