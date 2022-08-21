import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { Pages } from './pages'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: '/home',
            component: () => import('~/view/home.vue')
        },
        {
            path: '/firstGame',
            name: '/firstGame',
            component: () => import('~/view/firstGame.vue')
        },
        {
            path: '/secondGame',
            name: '/secondGame',
            component: () => import('~/view/secondGame.vue')
        },
        {
            path: '/thirdGame',
            name: '/thirdGame',
            component: () => import('~/view/thirdGame.vue')
        },
        {
            path: '/fourthGame',
            name: '/fourthGame',
            component: () => import('~/view/fourthGame.vue')
        },
        {
            path: '/fifthGame',
            name: '/fifthGame',
            component: () => import('~/view/fifthGame.vue')
        },
        {
            path: '/sixthGame',
            name: '/sixthGame',
            component: () => import('~/view/sixthGame.vue')
        },
        {
            path: '/seventhGame',
            name: '/seventhGame',
            component: () => import('~/view/seventhGame.vue')
        },
        {
            path: '/eighthGame',
            name: '/eighthGame',
            component: () => import('~/view/eighthGame.vue')
        },
        {
            path: '/ninthGame',
            name: '/ninthGame',
            component: () => import('~/view/ninthGame.vue')
        },
    ]
})

export default router
