<script setup>
import ProfilImage from '@/Composante/ProfilImage.vue'
import PresantationName from '@/Composante/PresantationName.vue'
import Redaction from '@/Composante/Redaction.vue'
import Apropos from '@/Composante/Apropos.vue'

defineProps(['redaction', 'apropos', 'sociaux'])
</script>
<template>
  <div>
    <div class="ecran mx-2 py-2">
      <div class="col-span-4"></div>
      <div class="col-span-4">
        <div class="flex justify-center items-center">
          <div class="">
            <div class="Presentation">
              <PresantationName />
            </div>
            <div class="imageProfile">
              <ProfilImage />
            </div>
            <div>
              <Apropos :apropos="apropos" />
            </div>
            <div class="PrecisionPresantation">
              <Redaction :redaction="redaction" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4"></div>
    </div>
  </div>
</template>
