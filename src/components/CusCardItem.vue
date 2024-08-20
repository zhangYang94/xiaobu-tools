<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <div>
          <el-tooltip content="获取灵感" placement="top" effect="light">
            <el-button class="button" type="success" round v-if="showCopy" @click="handleCopy">
              <el-icon><Pointer /></el-icon>
            </el-button>
          </el-tooltip>
          <el-tooltip content="跳转" placement="top" effect="light">
            <el-button class="button" type="warning" round v-if="showFly" @click="clickTo">
              <el-icon><Promotion /></el-icon>
            </el-button>
          </el-tooltip>
        </div>
      </div>
    </template>
    <div class="text item">{{ content }}</div>
  </el-card>
</template>

<script lang="ts" setup>
/**
 * 2023/5/17
 * @author zy
 * @description CusCardItem.vue
 */
import {ref,defineProps} from 'vue';
import {useClipboard} from "@vueuse/core";
import {ElMessage} from 'element-plus'

const { copy } = useClipboard();
// props属性值
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  href:{
    type: String,
    default: ''
  },
  showCopy:{
    type: Boolean,
    default: true
  },
  showFly:{
    type: Boolean,
    default: false
  }
})

const handleCopy = async ()=>{
  await copy(props.showFly ? props.href:props.content);
  ElMessage({
    message: 'copy成功',
    type: 'success',
  })
}
const clickTo = () => {
  window.open(props.href,'_blank')
}

</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: mainFont;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>    