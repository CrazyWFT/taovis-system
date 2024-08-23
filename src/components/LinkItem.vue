<script setup lang="ts">
defineProps<{
  linkUrl: string
}>()

const openNewPage = (linkUrl: string) => {
  window.open(linkUrl)
}
</script>

<template>
  <div class="item">
    <el-icon :size="30" style="cursor: pointer;" @click="openNewPage(linkUrl)">
      <slot name="icon"></slot>
    </el-icon>
    <div class="details">
      <el-text style="cursor: pointer;" @click="openNewPage(linkUrl)">
        <slot name="title"></slot>
      </el-text>
    </div>
  </div>
</template>

<style scoped type="scss">
.item {
  line-height: 1em;
  text-align: center;
  padding: 12px 0;
}
</style>