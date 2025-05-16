<template>
    <div class="container d-flex flex-column align-items-center py-4">

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

    <div class="bg-dark rounded shadow px-3 py-3 w-100" id="calculator">
        <input type="text" class="form-control text-end mb-3" :value="display" readonly>

        <div class="row g-2 mb-2">
        <div class="col-6" v-for="(btn, index) in clear_btns" :key="btn">
            <button class="btn w-100" @click="handleButtonClick(btn)"
            :class="index === 1 ? 'btn-danger' : 'btn-warning'"> {{ btn }}</button>
        </div>
        </div>    

        <div v-if="currentMode === 'Programmer'">
        <div class="row g-2 mb-2">
        <div class="col-2" v-for="btn in hex_buttons" :key="btn">
            <button class="btn btn-info w-100" @click="handleButtonClick(btn)">
            {{ btn }}
            </button>
        </div>
        </div>
        </div>
        

        <div class="row g-2 mb-2" v-for="(row, rowIndex) in numberButtonRows" :key="rowIndex">
        <div class="col-3" v-for="(btn, index) in row" :key="btn">
            <button
            class="btn w-100"
            :class="index === row.length - 1 ? 'btn-secondary' : 'btn-light'"
            @click="handleButtonClick(btn)" >
            {{ btn }}
            </button>
        </div>
        </div>



        <div v-if="currentMode === 'Programmer'">
        <div class="row g-2 mt-4">
        <div class="col" v-for="btn in programmer_operations_buttons" :key="btn">
            <button class="btn btn-outline-light w-100" @click="handleButtonClick(btn)">
            {{ btn }}
            </button>
        </div>
        </div>
        <div class="row g-2 mt-2">
        <div class="col" v-for="btn in change_base_buttons" :key="btn">
            <button class="btn btn-outline-light w-100" @click="handleButtonClick(btn)">
            {{ btn }}
            </button>
        </div>     
        </div>   
        </div>
       

    </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useCalcStore } from '@/store/calcStore.js'

const calc = useCalcStore()

const display = computed(() => calc.display)
const currentMode = computed(() => calc.mode)


const mode_buttons = ['Normal', 'Programmer']
const clear_btns = ['CE', '⌫']
const hex_buttons = ['A', 'B', 'C', 'D', 'E', 'F'];
const programmer_operations_buttons = ['AND', 'OR', 'XOR', 'NOT'];
const change_base_buttons = ['BIN', 'DEC', 'HEX'];
const numberButtonRows = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '−'],
  ['0', '.', '=', '+']
];


const clearDisplay = () => {
  calc.processBtn('CE')
}

const setMode = (mode) => {
    calc.mode = mode;
    clearDisplay();
}

const handleButtonClick = (btn) => {
    calc.processBtn(btn)
}



</script>


<style>

</style>
