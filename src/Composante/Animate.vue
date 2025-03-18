<script setup>
import { ref, useTemplateRef, computed, watchEffect } from 'vue'

defineProps(['start'])
</script>
<template>
  <div class="duration-1000" :class="start ? 'visible' : 'invisible'">
    <div class="h-screen flex justify-center items-center w-screen">
      <div class="w-[150px] h-[150px] flex flex-wrap" id="container">
        <div
          class="bg-white h-[75px] w-[75px] shadow-white"
          v-for="n in 4"
          :id="`square`"
          :key="n"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.visible {
  display: block;
}
.invisible {
  display: none;
  transition: 1s;
}
#square {
  background-color: blue;
  transition: all 0.4s;
  animation: fred 2s infinite ease-in-out;
  border-radius: 50%;
}
#container {
  transition: 0.5s;
  animation: circle 2s infinite;
}
@keyframes circle {
  0% {
    transform: rotateZ(0);
    overflow: 1;
  }
  100% {
    transform: rotateZ(180deg);
    opacity: 0;
  }
}
@keyframes fred {
  0% {
    transform: scale(0, 0), translateX(-50px);
    opacity: 0;
  }
  25% {
    filter: hue-rotate(180deg);
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(0.6, 0.6);
  }
}
#square:nth-child(1) {
  animation-delay: 0.5s;
}
#square:nth-child(2) {
  animation-delay: 1s;
}
#square:nth-child(3) {
  animation-delay: 1.5s;
}
#square:nth-child(4) {
  animation-delay: 2s;
}
</style>
