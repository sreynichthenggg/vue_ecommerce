<template>
  <input type="text" v-model="input" placeholder="Search ..." />
  <div class="item products" v-for="products in TodoList()" :key="products">
    <p>{{ products }}</p>
  </div>
  <div class="item error" v-if="input && !TodoList().length">
    <p>No results found!</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
let input = ref("");
const products = [];
function TodoList() {
  return products.title(() =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>
