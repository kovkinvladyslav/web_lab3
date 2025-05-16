<template>
  <div class="row g-2 mb-2">
    <div class="col-2" v-for="btn in hexButtons" :key="btn">
      <button 
        class="btn btn-info w-100" 
        @click="handleButtonClick(btn)"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()
const hexButtons = ['A', 'B', 'C', 'D', 'E', 'F']

const handleButtonClick = (btn) => {
  calc.processBtn(btn)
}
</script>
