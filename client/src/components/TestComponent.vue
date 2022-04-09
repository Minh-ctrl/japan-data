<script setup>
import axios from 'axios';
import { ref , computed, onMounted } from 'vue';
import BarChart from './BarChart.vue';
const ageData= ref(null);
async function pressed(){
    const info = await fetch('http://localhost:5000/fetch-population');
    const json = await info.json();
    ageData.value = json.ageData;
}
</script>
<template>
    <div>
        <button @click="pressed">press me</button>
            <div v-if="ageData">
                <BarChart :ageData="ageData"/>
            </div>
    </div>
</template>