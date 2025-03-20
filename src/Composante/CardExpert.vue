<script setup>
const propos = defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card bg-transparent">
    <div class="card-title text-center text-[19px] text-yellow-950 my-2">
      <p class="">{{ card.poste }}</p>
    </div>
    <div class="card-entreprise text-justify underline">
      <p>{{ card.entreprise }}</p>
    </div>
    <div class="date my-2">
      <p class="indent-4 border-2 border-l-yellow-950 border-transparent">{{ card.date }}</p>
    </div>
    <div class="lieu text-right text-white">
      <p><i class="fas fa-street-view"></i> {{ card.lieu }}</p>
    </div>
    <div class="description-title my-4">
      <p
        class="indent-10 text-justify text-orange-950"
        v-html="
          card.description[0].title.replace(
            /#(\w+)|#(\w+)&(\w+)/g,
            `<span class='text-white cursor-pointer'> $1 </span>`,
          )
        "
      ></p>
    </div>
    <div class="description-liste text-justify text-lime-950 text-md">
      <ul>
        <li
          class="indent-8"
          v-for="(value, keys) in card.description[1].liste"
          :key="keys"
          v-html="
            value.replace(
              /#(\w+)/g,
              `<span class='bg-gradient-to-bl to-amber-950 from-yellow-900 bg-clip-text font-bold'>$1</span>`,
            )
          "
        ></li>
      </ul>
    </div>
  </div>
</template>
