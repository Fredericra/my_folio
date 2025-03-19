<script setup>
import $ from 'jquery'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

function save() {
  window.print({ width: '50%' })
}
</script>
<template>
  <div>
    <div class="flex justify-between bg-gray-900 h-12 items-center opacity-80">
      <div class="">
        <p class="copy-right mx-2 text-white">&copy; 2025 Randriatsilavina Frederic</p>
      </div>
      <div class="mx-4">
        <button
          @click="save()"
          class="outline-1 outline-white py-1 px-1 rounded-md text-white cursor-pointer hover:shadow shadow-amber-600 hover:text-indigo-800 hover:outline-indigo-900 duration-1000"
        >
          <span class="mx-2">Telecharge</span><i class="fas fa-download"></i>
        </button>
      </div>
    </div>
  </div>
</template>
