<script setup>
import Titre from '@/Composante/Titre.vue'

const props = defineProps({
  titre: { type: String, required: true },
  etude: { type: Object, required: true },
})
</script>
<template>
  <div class="">
    <div class="ecran">
      <div class="col-span-4"></div>
      <div class="col-span-4">
        <div class="">
          <Titre :titre="titre" />
        </div>
        <div class="my-8">
          {{ etude }}
        </div>
      </div>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>
