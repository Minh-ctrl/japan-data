<script>
export default {
    props: ['label', 'modelValue'],
    data: function (){
        // return {
        //     inputValue:''
        // }
    },
    computed: {
        inputValue: {
            get(){
               return this.modelValue;
            },
            set(value){
                console.log(value);
                this.$emit('update:modelValue', value);
            }
        }
    }
}
</script>

<template>
    <label> 
        {{label}}
        <input  v-model="inputValue" type="text"/>
    </label>
</template>

