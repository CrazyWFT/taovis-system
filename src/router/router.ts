import { createRouter, createWebHashHistory } from 'vue-router'

import Videos from '@/views/Videos.vue'
import Lives from '@/views/Lives.vue'
import Songs from '@/views/Songs.vue'
import Questions from '@/views/Questions.vue'
import Tools from '@/views/Tools.vue'
import Chats from '@/views/Chats.vue'
import Messages from '@/views/Messages.vue'
import Descriptions from '@/views/Descriptions.vue'

const routes = [
    {
        path: '/videos',
        component: Videos
    },
    {
        path: '/lives',
        component: Lives
    },
    {
        path: '/songs',
        component: Songs
    },
    {
        path: '/questions',
        component: Questions
    },
    {
        path: '/tools',
        component: Tools
    },
    {
        path: '/chats',
        component: Chats
    },
    {
        path: '/messages',
        component: Messages
    },
    {
        path: '/descriptions',
        component: Descriptions
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;