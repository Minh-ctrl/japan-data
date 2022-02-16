<template>
  <div id="app">
    <button @click="toggleData">Show</button>

    <br />
    <input type="text" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  el: "#data",
  data: function () {
    return {
      info: null,
      isVisible: false,
      message: "Hello Vue!",
    };
  },
  methods: {
    async toggleData() {
      await console.log(this.info.ageData);
    },
  },
  mounted: function () {
    axios
      .get("http://localhost:5000/fetch-population")
      .then((res) => (this.info = res.data));
  },
};
</script>

<style scoped>
</style>
