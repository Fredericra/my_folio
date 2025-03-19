<script setup>
const propos = defineProps({
  titre: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div>
    <div class="titre">
      <div class="" v-for="n in 6" :key="n" :class="`boule${n}`"></div>
      <div class="titre-text">
        <p>
          {{ titre }}
        </p>
      </div>
    </div>
  </div>
</template>
