<script >
import axios from 'axios';
import { ref , computed } from 'vue';
const result = ref(null);
const log = ref('what is going on');
console.log(log.value)
    export default{ 
        setup(){
        axios.get('http://localhost:5000/fetch-population')
            .then(data => result.value = data);
            return {result}
        }
    }

</script>
<template>
    <div>{{result}}</div>
</template>