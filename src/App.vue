<script lang="ts" setup>
import { ref } from 'vue'
import { VideoPlay, VideoCamera, Mic, Document, Link, ChatLineSquare, MessageBox, Guide } from '@element-plus/icons-vue'

import LinkItem from '@/components/LinkItem.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'
import TimeDisk from '@/components/TimeDisk.vue'

import IconBilibili from '@/components/icons/IconBilibili.vue'
import IconTiktok from '@/components/icons/IconTiktok.vue'
import IconYoutube from '@/components/icons/IconYoutube.vue'
import IconXiaohongshu from '@/components/icons/IconXiaohongshu.vue'
import avatarUrl from '@/assets/images/peach-head.png'

const activeIndex = ref('/videos')

</script>

<template>
    <div class="peach-main">
        <el-container class="pm-container">
            <el-aside class="pm-aside hidden-md-and-down" width="66px">
                <div class="pm-aside-div">
                    <div style="padding: 20px 0;">
                        <el-avatar :size="60" :src="avatarUrl" />
                        <el-text>
                            小小桃纸哟
                        </el-text>
                    </div>
                    <LinkItem link-url="https://space.bilibili.com/6867955">
                        <template #icon>
                            <IconBilibili />
                        </template>
                        <template #title>主页</template>
                    </LinkItem>
                    <LinkItem link-url="https://www.douyin.com/user/MS4wLjABAAAAn8yt9Sui7QLM26ntDxmTFHLxM4N6FiAyzApHBlmLEak">
                        <template #icon>
                            <IconTiktok />
                        </template>
                        <template #title>主页</template>
                    </LinkItem>
                    <LinkItem link-url="https://www.youtube.com/@xiaoxiaotaozhiyo">
                        <template #icon>
                            <IconYoutube />
                        </template>
                        <template #title>主页</template>
                    </LinkItem>
                    <LinkItem link-url="https://www.xiaohongshu.com/user/profile/583a5df96a6a69514720a5b2">
                        <template #icon>
                            <IconXiaohongshu />
                        </template>
                        <template #title>主页</template>
                    </LinkItem>
                    <LinkItem link-url="https://live.bilibili.com/22725947">
                        <template #icon>
                            <IconBilibili />
                        </template>
                        <template #title>直播</template>
                    </LinkItem>
                    <LinkItem link-url="https://www.douyin.com/user/MS4wLjABAAAAn8yt9Sui7QLM26ntDxmTFHLxM4N6FiAyzApHBlmLEak">
                        <template #icon>
                            <IconTiktok />
                        </template>
                        <template #title>直播</template>
                    </LinkItem>
                    <LinkItem link-url="https://space.bilibili.com/1275764327">
                        <template #icon>
                            <IconBilibili />
                        </template>
                        <template #title>录播</template>
                    </LinkItem>
                </div>
                <MusicPlayer />
            </el-aside>
            <el-main class="pm-main">
                <div class="pm-main-div">
                    <el-menu
                        class="pm-main-menu"
                        :default-active="activeIndex"
                        background-color="transparent"
                        text-color="#e1f6ff"
                        active-text-color="#f796e1"
                        mode="horizontal"
                        :router="true"
                    >
                        <el-menu-item index="/videos"><el-icon><VideoPlay /></el-icon>视 频 整 合</el-menu-item>
                        <el-menu-item index="/lives"><el-icon><VideoCamera /></el-icon>直 播 录 播</el-menu-item>
                        <el-menu-item index="/songs"><el-icon><Mic /></el-icon>直 播 点 歌</el-menu-item>
                        <el-menu-item index="/questions"><el-icon><Document /></el-icon>问 题 查 询</el-menu-item>
                        <el-menu-item index="/tools"><el-icon><Link /></el-icon>工 具</el-menu-item>
                        <el-menu-item index="/chats"><el-icon><ChatLineSquare /></el-icon>聊 天 室</el-menu-item>
                        <el-menu-item index="/messages"><el-icon><MessageBox /></el-icon>留 言 板</el-menu-item>
                        <el-menu-item index="/descriptions"><el-icon><Guide /></el-icon>理 解 与 尊 重</el-menu-item>
                    </el-menu>
                    <div class="pm-main-view">
                        <router-view></router-view>
                    </div>
                </div>
            </el-main>
        </el-container>
        <TimeDisk class="peach-time-disk" />
        <el-text class="peach-text" size="small">
            &copy; 2024 &nbsp;
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32092302000129" rel="nofollow">
                <img style="height: 12px; width: 12px; vertical-align: text-top;" src="@/assets/images/beian.png" />
                苏公网安备 32092302000129号
            </a>
            <a href="https://beian.miit.gov.cn" rel="nofollow">
                苏ICP备2021033281号
            </a>
        </el-text>
    </div>
</template>

<style lang="scss" scoped>
.peach-main {
    position: relative;
    height: 100%;
    width: 100%;
    .pm-container {
        height: 100%;
        .pm-aside {
            height: 100%;
        }
        .pm-main {
            height: 100%;
            background-image: url("@/assets/images/peach-bg-t80.png");
            background-size: 100% 100%;
        }
    }
}
.peach-text {
    position: absolute;
    bottom: 0;
    right: 20px;
    color: var(--el-menu-border-color);
}
.peach-text > a {
    color: var(--el-menu-border-color);
    text-decoration: none;
}
.peach-time-disk {
    position: absolute;
    top: 20px;
    right: 20px;
}
.pm-aside-div {
    height: calc(100% - 66px);
    width: 100%;
    & > div {
        text-align: center;
    }
}
.pm-aside-aplayer {
    margin: 0;
}
.pm-main-div {
    height: 100%;
    width: 100%;
    border-bottom: 1px solid var(--el-menu-border-color);
}
.pm-main-menu {
    border-bottom: 0;
    width: calc(100% - 110px);
}
.pm-main-menu > .el-menu-item {
    font-size: 18px;
    border-bottom: 0;
}
.pm-main-view {
    height: calc(100% - 60px);
    padding: 10px 0;
}
</style>

