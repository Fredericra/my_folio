<script setup>
const propos = defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card">
    <div class="card-title">
      <p class="">{{ card.poste }}</p>
    </div>
  </div>
</template>
