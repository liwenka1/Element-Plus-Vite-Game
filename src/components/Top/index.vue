<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="1">first</el-menu-item>
        <el-menu-item index="2">second</el-menu-item>
        <el-menu-item index="3">third</el-menu-item>
        <el-menu-item index="4">fourth</el-menu-item>
        <el-menu-item index="8">fifth</el-menu-item>
        <el-menu-item index="6">sixth</el-menu-item>
        <el-menu-item index="7">seventh</el-menu-item>
        <el-menu-item index="8">eighth</el-menu-item>
        <el-menu-item index="9">ninth</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped></style>
