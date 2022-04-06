<script>
import TestComponent from "../components/TestComponent.vue"
export default {
  name:"AboutView",
  components: {
    TestComponent
  }
}
</script>
<template>
  <div class="about">
    <Suspense>
      <template #default>
        <TestComponent/>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
