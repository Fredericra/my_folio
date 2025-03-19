<script setup>
import { computed, ref, toRefs } from 'vue'

const props = defineProps({
  apropos: {
    type: Object,
    required: true,
  },
})

const { apropos } = props
console.log(apropos)
</script>
<template>
  <div class="">
    <div v-for="(value, index) in apropos" :key="index">
      <div class="grid grid-cols-2 space-y-2 text-md">
        <div class="col-span-1 text-center text-white">
          <i :class="value.icon"></i>
        </div>
        <div class="col-span-1 text-left">
          <p class="text-transparent bg-clip-text bg-linear-to-b to-yellow-950 from-indigo-950">
            <span class="" v-if="index === 0">{{ value.Adresse }}</span>
            <span class="" v-else-if="index === 1">{{ value.Email }}</span>
            <span class="" v-else>{{ value.what }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-stroke-3 {
  -webkit-text-stroke: 0.01px rgb(226, 188, 188);
}
</style>
