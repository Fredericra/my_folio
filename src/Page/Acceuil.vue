<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

import Apropos from '@/Json/apropos.json'
import Profil from '@/Composante/Profil.vue'
import Experience from '@/Composante/Experience.vue'
import Etude from '@/Composante/Etude.vue'
import Footer from '@/Composante/Footer.vue'
import MenuCentre from '@/Composante/MenuCentre.vue'

const Data = ref(Apropos[0])
</script>
<template>
  <div>
    <Profil :redaction="Data.redaction" :apropos="Data.apropos" :sociaux="Data.reseaux" />
    <Experience titre="Experience" :exper="Data.Experiences" />
    <Etude />
    <MenuCentre />
    <Footer />
  </div>
</template>
