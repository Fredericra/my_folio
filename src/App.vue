<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Animate from '@/Composante/Animate.vue'
import Acceuil from '@/Page/Acceuil.vue'

const route = useRoute()
let start = ref(false)
window.addEventListener('load', (event) => {
  const time = event.timeStamp
  start.value = time > 0 ? true : false
  setTimeout(() => {
    return (start.value = false)
  }, time)
  console.log('page is fully loaded' + event.timeStamp)
})
</script>
<template>
  <div class="bg-linear-to-b from-indigo-50 via-indigo-500 to-indigo-950 h-auto">
    <div class="" data="page-trouve" v-if="route.name === 'Acceuil'">
      <div class="animate" :class="start ? 'scale-100' : 'scale-0'">
        <Animate :start="start" />
      </div>
      <div class="">
        <Acceuil />
      </div>
      <div class="page-actif"></div>
    </div>
    <div class="" data="page-non-trouve" v-else></div>
  </div>
</template>
<style scoped></style>
