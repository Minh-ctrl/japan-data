<template>
  <form @submit.prevent="handleSubmit">
    <h1>{{ title }}</h1>
    <!-- <li v-for="str in inputs > {{str}} </li> -->
    <p v-bind:test="inputs">{{ inputs }}</p>
    <InputComponent v-model="email" v-bind:label="emailLabel" />
    <InputComponent v-model="password" v-bind:label="passwordLabel" />
    <button>Submit</button>
  </form>
</template>

<script>
import InputComponent from "./InputComponent.vue";

export default {
  components: {
    InputComponent,
  },
  data: function () {
    return {
      title: "Login Form",
      email: "asdf",
      inputs: ["email", "password", "name"],
      password: "asdf",
      emailLabel: "Email",
      passwordLabel: "Password",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px;
  display: block;
}
</style>