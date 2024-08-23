<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')

</script>

<template>
    <div class="messages-main">
        <el-input
            v-model="textarea"
            :rows="5"
            type="textarea"
            placeholder="Please input"
        />
        <div>

        </div>
    </div>
</template>