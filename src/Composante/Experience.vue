<script setup>
import Titre from '@/Composante/Titre.vue'
import CardExpert from '@/Composante/CardExpert.vue'

const props = defineProps({
  exper: {
    type: Object,
    required: true,
  },
  titre: {
    type: String,
    required: true,
  },
})

const { exper, titre } = props
</script>
<template>
  <div class="ecran">
    <div class="col-span-4"></div>
    <div class="col-span-4">
      <div class="pt-8 pb-8">
        <Titre titre="Experience" />
      </div>
      <div class="mt-2 space-y-10">
        <div class="" v-for="(value, index) in exper" :key="index">
          <div class="">
            <CardExpert class="p-3 transition duration-1000" :card="value" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4"></div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 10px 1px var(--indigo-950);
}
.card:hover {
  box-shadow: -5px -10px 1px var(--indigo-950);
}
</style>
