<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

import Apropos from '@/Json/apropos.json'
import Profil from '@/Composante/Profil.vue'
import Experience from '@/Composante/Experience.vue'
import Etude from '@/Composante/Etude.vue'
import Footer from '@/Composante/Footer.vue'
import MenuCentre from '@/Composante/MenuCentre.vue'
import Projet from '@/Composante/Projet.vue'
import Competence from '@/Composante/Competence.vue'

const Data = ref(Apropos[0])
</script>
<template>
  <div>
    <Profil :redaction="Data.redaction" :apropos="Data.apropos" :sociaux="Data.reseaux" />
    <Experience titre="Experience" :exper="Data.Experiences" />
    <Projet titre="Projet Personnel" :projet="Data.Projet" />
    <Etude titre="Etude et Formation" :etude="Data.Formation" />
    <Competence titre="Compétences" :data="Data.Competences" />
    <MenuCentre />
    <Footer />
  </div>
</template>
