<template>
    <div class="inline-block px-3 py-[0.2rem] text-[0.75rem] rounded-2xl mr-1"
        :style="{
            backgroundColor : boxColor,
            color : textColor,
        }">
        {{ name }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// props 정의
defineProps({
    name: {
        type: String,
        required: true,
    },
    boxColor: {
        type: String,
        required: true,
    },
    textColor: {
        type: String,
        required: true,
    },
})
</script>
