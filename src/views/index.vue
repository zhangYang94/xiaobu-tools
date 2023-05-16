<template>
  <div class="welcome-page art-text">
    <el-icon class="sunny"><Sunny /></el-icon>
    <div class="text-center">
      小布工具包 <i class="text-xl mr-8">@爱上蛋炒饭</i>

    </div>
    <div class="carousel">
      <el-carousel :interval="4000" type="card" @change="carouselChange">
        <el-carousel-item v-for="(item,index) in mainData" :key="index">
          <el-card class="box-card" :class="isActive === index ? 'isActive':''" shadow="hover">
            <template #header>
              <div class="card-header">
                <span>{{ item.title }}</span>
                <el-button class="btn" v-if="isActive === index" type="success" round @click="toTools(item)">
                  Go <el-icon class="ml-2"><Pointer /></el-icon>
                </el-button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="">{{ 'List item ' + o }}</div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 2023/5/15
 * @author zy
 * @description 主页面,欢迎页面
 */
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {mainData,mainDataType} from "@/const/BaseData";
import { useSettingStore } from  '@/stores/modules/useSettingStore'

const router = useRouter();
const isActive = ref(0);
const useSetting = useSettingStore();

// 前往工具页面
const toTools = (item: mainDataType) => {
  useSetting.updatePageData(item);
  router.push(item.name)
}
const carouselChange = (el) => {
  isActive.value = el;
}
</script>

<style lang="less" scoped>
.welcome-page{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 48px;
  position: relative;

  .sunny{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 200px;
    color: #fbbf24;
    opacity: 0.7;
  }

  .carousel{
    width: 80%;
    margin: 5rem auto;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .isActive{
    background-color: var(--base-success-color);
    color: var(--vt-c-white);

    .btn{
      border: 1px solid var(--vt-c-white);
    }
  }
}
</style>    