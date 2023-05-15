<template>
  <div class="welcome-page">
    小布工具包 <i class="text-xl mr-8">@爱上蛋炒饭</i>
    <el-button type="success" round @click="start">Go!</el-button>
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
const router = useRouter();

const start = () => {
  router.push('/home');
}

</script>

<style lang="less" scoped>
.welcome-page{
  height: 100%;
  width: 100%;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgb(202, 216, 228) 0%, hsl(209, 36%, 86%) 10%, hsl(0, 5%, 96%) 50%);
  font-family: mainFont;
  font-size: 48px;
  padding-top: 15%;
  text-align: center;
}
</style>    