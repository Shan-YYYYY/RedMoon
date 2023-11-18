<template>
    <el-button size="small" round>{{text}}</el-button>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
defineProps<{ text: string}>()
</script>