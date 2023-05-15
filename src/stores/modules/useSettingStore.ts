/**
 * 设置信息
 */
import { defineStore } from 'pinia';


export const useSettingStore = defineStore({
    id: 'useSettingStore',
    state: ()=>({
        globalData: {
            loading: false,
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

    }
});