<template>
  <div class="row g-2 mb-2">
    <div class="col-6" v-for="(btn, index) in clearButtons" :key="btn">
      <button 
        class="btn w-100" 
        @click="handleButtonClick(btn)"
        :class="index === 1 ? 'btn-danger' : 'btn-warning'"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()
const clearButtons = ['CE', '⌫']

const handleButtonClick = (btn) => {
  calc.processBtn(btn)
}
</script>
