<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <!-- <Header /> -->
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 60px 0 0;
}
</style>
