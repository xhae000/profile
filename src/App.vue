<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

// onMounted(() => {
//   const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
//   if (isMobile) {
//     alert('이 페이지는 데스크탑 전용입니다. 모바일에서는 UI가 불안정할 수 있습니다.')
//   }
// })
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
