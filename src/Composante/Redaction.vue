<script setup>
import { computed, onMounted, ref } from 'vue'
const props = defineProps({
  redaction: {
    type: String,
    required: true,
  },
})

const { redaction } = props
</script>
<template>
  <div class="indent-12"></div>
  <div
    class="indent-10 text-justify outline-1 outline-yellow-900 p-3 relative rounded-md"
    v-html="
      redaction.replace(
        /#(\w+)/g,
        `<span class='bg-gradient-to-bl to-amber-950 from-yellow-900 bg-clip-text font-bold'>$1</span>`,
      )
    "
  ></div>
</template>
