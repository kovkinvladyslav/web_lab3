<template>
  <div class="row g-2 mb-2" v-for="(row, rowIndex) in numberButtonRows" :key="rowIndex">
    <div class="col-3" v-for="(btn, index) in row" :key="btn">
      <button
        class="btn w-100"
        :class="index === row.length - 1 ? 'btn-secondary' : 'btn-light'"
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
const numberButtonRows = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '−'],
  ['0', '.', '=', '+']
]

const handleButtonClick = (btn) => {
  calc.processBtn(btn)
}
</script>