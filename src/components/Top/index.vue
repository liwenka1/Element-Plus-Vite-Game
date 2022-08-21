<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="/home">home</el-menu-item>
        <el-menu-item index="/firstGame">first</el-menu-item>
        <el-menu-item index="/secondGame">second</el-menu-item>
        <el-menu-item index="/thirdGame">third</el-menu-item>
        <el-menu-item index="/fourthGame">fourth</el-menu-item>
        <el-menu-item index="/fifthGame">fifth</el-menu-item>
        <el-menu-item index="/sixthGame">sixth</el-menu-item>
        <el-menu-item index="/seventhGame">seventh</el-menu-item>
        <el-menu-item index="/eighthGame">eighth</el-menu-item>
        <el-menu-item index="/ninthGame">ninth</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const activeIndex = ref('0')
const route = useRoute()
const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    router.push(key)
}
</script>

<style lang="scss" scoped></style>
