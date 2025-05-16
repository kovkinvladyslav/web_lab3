<template>
  <input type="text" class="form-control text-end mb-3" :value="display" readonly>
</template>

<script setup>
import { computed } from 'vue'
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()
const display = computed(() => calc.display)
</script>
