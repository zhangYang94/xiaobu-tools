/**
 * 设置信息
 */
import { defineStore } from 'pinia';

type pageDataType = {
    title: string,
    icon: string
}

export const useSettingStore = defineStore({
    id: 'useSettingStore',
    state: ()=>({
        globalData: {
            loading: false,
        },
        pageData: {
            title: '',//页面标题
            icon:'', //图标
        }
    }),
    persist: { //开启持久化
        enabled: true,
    },
    getters: {
        // 获取用户信息
        getGlobalData() {
            return {
                loading: this.globalData.loading
            };
        }
    },
    actions: {
        updatePageData(obj: pageDataType) {
           this.pageData = Object.assign(this.pageData, obj);
        },
    }
});