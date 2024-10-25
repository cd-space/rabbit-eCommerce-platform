<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFived from './components/LayoutFixed.vue';


//触发获取导航列表的action
import { useCategoryStore } from '@/stores/categories';
import { onMounted } from 'vue';

const categoryStore= useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>

<template>
    <div>
        <LayoutFived/>
        <LayoutNav />
        <LayoutHeader />


        <!-- 二级路由出口 -->
         <!-- 添加key破坏复用机制强制销毁重建 -->
         <!-- <router-view :key="$route.fullPath"/> -->
         <router-view />
         <LayoutFooter />
    </div>
</template>