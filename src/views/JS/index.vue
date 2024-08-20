<template>
  <div class='js-container'>
    <el-backtop :bottom="100">
        <div class="backtop">UP</div>
    </el-backtop>

    <el-card class="card" v-for="(item,index) in commonJS" :key="index">
            <template #header>
                <div class="card-header">
                    <span>{{ item.title }}</span>
                    <el-tooltip
                        effect="dark"
                        content="复制"
                        placement="top-start"
                    >
                        <el-button class="button" text @click="handleCopy(item.content)">
                            <el-icon><CopyDocument /></el-icon>
                        </el-button>
                    </el-tooltip>
                </div>
            </template>
        <div class="text item">{{ item.content }}</div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"; 
import { ElMessage } from 'element-plus'

import {useClipboard} from "@vueuse/core";

const { copy } = useClipboard();

const handleCopy = async (content: string)=>{
  await copy(content);
  ElMessage({
    message: 'copy成功',
    type: 'success',
  })
}
/**
* 数据部分
*/
const data = reactive({})


const commonJS = [
    { title:'1',content:'1213333333333333333333333333333333333333333333333333333333333333333333333333333333'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
    { title:'1',content:'1'},
]




</script>
<style scoped lang='less'>
</style>