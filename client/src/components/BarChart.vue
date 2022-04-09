<script setup>
import {onMounted, ref, computed} from 'vue';
import * as d3 from 'd3';
import {axios} from 'axios';
import { scaleLinear, max, scaleBand, range } from 'd3';
import * as echarts from 'echarts';

const props = defineProps({
    ageData: Object,
});
const margin = {
    top :30,
    right: 45,
    bottom: 10,
    left: 45,
}
const barHeight = 25;
const width = 945;
const numAge = props.ageData[0].data;
const data= props.ageData[0].data;
const height = Math.ceil((props.ageData[0].data.length) * barHeight) + margin.top + margin.bottom;
console.log(numAge);
const x= computed(()=>scaleLinear().domain([0,max(numAge)]).range([margin.left, width - margin.right]));
const y = computed(() => scaleBand().domain(range(16)).rangeRound([margin.top, height - margin.bottom]).padding(0.1));
</script>
<template>
  <div id="container" class="svg-container" align="center">

        <h1> here where?</h1>
        <!-- <div> {{props.ageData}}</div> -->
        <div v-for="(entry, index) in data" :key="'bar-' +index">
            <div>{{index}}</div>    
        </div>      
        <svg :viewBox="`0 0 ${width} ${height}`" xmlns="http://www.w3.org/2000/svg" >
            <g v-for="(entry, index) in data" :key="'bar-' + index" fill="white">
                <rect :x="x(0)" :y="y(index)" :width="Number(x(entry)) - Number(x(0))" :height="y.bandwidth()"/>
            </g>
        </svg>
    </div>
</template>
<style scoped>

</style>