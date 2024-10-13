<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFived from './components/LayoutFived.vue';
</script>

<template>
    <div>
        <LayoutFived/>
        <LayoutNav />
        <LayoutHeader />
        <!-- 二级路由出口 -->
         <router-view/>
         <LayoutFooter />
    </div>
</template>