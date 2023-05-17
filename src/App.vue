<template>
  <el-page-header class="page-header" v-if="state.showMenu" @back="goBack">
    <template #content>
      <div class="flex items-center">
        <el-avatar v-if="pageData.icon" :size="32" class="mr-3" :src="pageData.icon"/>
        <span class="text-large font-600 mr-3 art-text"> {{ pageData.title }} </span>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-icon color="#fbbf24" :size="24"><Sunny /></el-icon>
      </div>
    </template>
  </el-page-header>
  <div class="page-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useSettingStore } from  '@/stores/modules/useSettingStore'
import {storeToRefs} from "pinia";
const { pageData } = storeToRefs(useSettingStore());

const router = useRouter()
const noMenu = ['/']

const state = reactive({
  showMenu: true,
  currentPath: '/'
})
// 页面跳转
router.beforeEach((to, from, next) => {
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
  next()
})
// 返回上一层
const goBack = () => {
  router.back();
}

</script>

<style lang="less">
@import "@/assets/main.css";
.page-header{
  padding: 20px 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}
.page-container{
  width: 100%;
  flex: 1;
  padding: 20px 30px 0;
}
</style>
