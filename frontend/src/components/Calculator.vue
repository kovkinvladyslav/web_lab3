<template>
  <div class="bg-dark rounded shadow px-3 py-3 w-100" id="calculator">
    <DisplayScreen />
    <ClearButtons />
    <HexButtons v-if="currentMode === 'Programmer'" />
    <NumberPad />
    <ProgrammerControls v-if="currentMode === 'Programmer'" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCalcStore } from '@/store/calcStore.js'
import DisplayScreen from './calculator/DisplayScreen.vue'
import ClearButtons from './calculator/ClearButtons.vue'
import HexButtons from './calculator/HexButtons.vue'
import NumberPad from './calculator/NumberPad.vue'
import ProgrammerControls from './calculator/ProgrammerControls.vue'

const calc = useCalcStore()
const currentMode = computed(() => calc.mode)
</script>

