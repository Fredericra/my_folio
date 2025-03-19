<script setup>
import Titre from '@/Composante/Titre.vue'

const props = defineProps({
  titre: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="my-4">
    <div class="ecran">
      <div class="col-span-4"></div>
      <div class="col-span-4">
        <div class="">
          <Titre :titre="titre" />
        </div>
        <div class="my-4">
          {{ data }}
        </div>
      </div>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>
