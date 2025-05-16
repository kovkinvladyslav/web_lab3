<template>
  <div>
    <div class="row g-2 mt-4">
      <div class="col" v-for="btn in programmerOperationsButtons" :key="btn">
        <button 
          class="btn btn-outline-light w-100" 
          @click="handleButtonClick(btn)"
        >
          {{ btn }}
        </button>
      </div>
    </div>
    <div class="row g-2 mt-2">
      <div class="col" v-for="btn in changeBaseButtons" :key="btn">
        <button 
          class="btn btn-outline-light w-100" 
          :class="{ 'active': isCurrBase(btn) }"
          @click="handleButtonClick(btn)"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()
const programmerOperationsButtons = ['AND', 'OR', 'XOR', 'NOT']
const changeBaseButtons = ['BIN', 'DEC', 'HEX']

const handleButtonClick = (btn) => {
  calc.processBtn(btn)
}

const isCurrBase = (btn) => calc.base === btn ? true : false
</script>