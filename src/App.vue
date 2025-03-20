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
  <div class="bg-linear-to-t from-purple-400 via-purple-700 to-indigo-900 h-auto opacity-100">
    <div class="" data="page-trouve" v-if="route.name === 'Acceuil'">
      <div class="animate" :class="start ? 'scale-100' : 'scale-0'">
        <Animate :start="start" />
      </div>
      <div class="" :class="start ? 'scale-0' : 'scale-100'">
        <Acceuil />
      </div>
      <div class="page-actif"></div>
    </div>
    <div class="" data="page-non-trouve" v-else></div>
  </div>
</template>
<style scoped></style>
