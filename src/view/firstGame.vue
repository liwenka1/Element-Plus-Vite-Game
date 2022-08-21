<template>
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="controls">
        <label for="animations">choose animation:</label>
        <el-select v-model="value" id="animations" @change="animationsChange">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch, toRefs, nextTick } from 'vue'
import img from '../assets/01/项目1.png'

const value = ref('idle')
const options = [
    {
        value: 'idle',
        label: 'Idle'
    },
    {
        value: 'jump',
        label: 'jump'
    },
    {
        value: 'fall',
        label: 'fall'
    },
    {
        value: 'run',
        label: 'run'
    },
    {
        value: 'dizzy',
        label: 'dizzy'
    },
    {
        value: 'sit',
        label: 'sit'
    },
    {
        value: 'roll',
        label: 'roll'
    },
    {
        value: 'bite',
        label: 'bite'
    },
    {
        value: 'ko',
        label: 'ko'
    },
    {
        value: 'getHit',
        label: 'getHit'
    }
]

// 创建和初始化2d画布
let ctx = ref(null)
let CANVAS_WIDTH = ref(null)
let CANVAS_HEIGHT = ref(null)
let playerState = ref('idle') //角色的运动状态
onMounted(() => {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    CANVAS_WIDTH = canvas.width = 600
    CANVAS_HEIGHT = canvas.height = 600
})

// 动画主要逻辑
nextTick(() => {
    const playerImage = new Image()
    playerImage.src = img
    //精灵表的宽度为6876最多有12行，所以精灵的宽度为6876/12=575
    const spriteWidth = 575
    //精灵表的宽度为5230一共有10行，所以精灵的高度为5230/10=523
    const spriteHeight = 523
    // 下面frameX,frameY两个变量用于控制精灵表的位置控制,X为控制哪一列的精灵图被选择，Y为控制哪一行的精灵图被控制

    let gameFrame = 0
    // 间隔帧，数字越大角色图片的切换越大看起来越卡顿
    const staggerFrames = 4

    const spriteAnimations = []
    // 对应的动作的图片张数是不一样的
    const animationStates = [
        {
            name: 'idle',
            frames: 7
        },
        {
            name: 'jump',
            frames: 7
        },
        {
            name: 'fall',
            frames: 7
        },
        {
            name: 'run',
            frames: 9
        },
        {
            name: 'dizzy',
            frames: 11
        },
        {
            name: 'sit',
            frames: 5
        },
        {
            name: 'roll',
            frames: 7
        },
        {
            name: 'bite',
            frames: 7
        },
        {
            name: 'ko',
            frames: 12
        },
        {
            name: 'getHit',
            frames: 4
        }
    ]
    // 创建对应动作X坐标和Y坐标的对象数组以便后面的角色移动使用
    animationStates.forEach((state, index) => {
        let frames = {
            loc: []
        }
        for (let j = 0; j < state.frames; j++) {
            let positionX = j * spriteWidth
            let positionY = index * spriteHeight
            frames.loc.push({ x: positionX, y: positionY })
        }
        spriteAnimations[state.name] = frames
    })

    console.log(spriteAnimations)

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        let position =
            Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState.value].loc.length
        let frameX = spriteWidth * position
        let frameY = spriteAnimations[playerState.value].loc[position].y
        ctx.drawImage(
            playerImage,
            frameX,
            frameY,
            spriteWidth,
            spriteHeight,
            0,
            0,
            spriteWidth,
            spriteHeight
        )
        gameFrame++
        requestAnimationFrame(animate)
    }
    animate()
})

// 监听动作改变
const animationsChange = val => {
    playerState.value = val
}
</script>

<style lang="scss" scoped>
#canvas {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
}
.controls {
    position: absolute;
    z-index: 10;
    top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
}
.controls,
select,
option {
    font-size: 25px;
}
</style>
