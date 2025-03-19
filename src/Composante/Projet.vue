<script setup>
import Titre from '@/Composante/Titre.vue'

const props = defineProps({
  titre: {
    type: String,
    required: true,
  },
  projet: {
    type: Object,
    required: true,
  },
})
const { titre, projet } = props
</script>
<template>
  <div class="my-10">
    <div class="ecran">
      <div class="col-span-4"></div>
      <div class="col-span-4">
        <div class="">
          <Titre :titre="titre" />
        </div>
        <div class="my-8">
          {{ projet }}
        </div>
      </div>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>
