<template>
  <custom-layout v-if="state.showMenu"/>
  <RouterView v-else />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import customLayout from '@/customLayout/index.vue'

const router = useRouter()
const noMenu = ['/', '/welcome']

const state = reactive({
  showMenu: true,
  currentPath: '/'
})

router.beforeEach((to, from, next) => {
  state.showMenu = !noMenu.includes(to.path)
  state.currentPath = to.path
  // 判断是否包含左侧边栏
  if (noMenu.includes(to.path)) {
    next()
  } else {
    next()
    // 如果不是首页，判断是否有 token
    /*if (!Storage.getLocalStorage('token')) {
      $message.error('请重新登录')
      next({ path: '/' })
    } else {
      next()
    }*/
  }
})

</script>

<style lang="less">
body{
  margin: 0;
  height: 100vh;
  width: 100vw;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
