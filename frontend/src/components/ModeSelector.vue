<template>
  <div class="btn-group mb-4" role="group" id="change-mode">
    <button
      v-for="mode in mode_buttons"
      :key="mode"
      type="button"
      class="btn"
      :class="currentMode === mode ? 'btn-dark' : 'btn-outline-dark'"
      @click="setMode(mode)"
    >
      {{ mode }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()
const currentMode = computed(() => calc.mode)
const mode_buttons = ['Normal', 'Programmer']

const setMode = (mode) => {
  calc.mode = mode
  calc.processBtn('CE')
}
</script>
