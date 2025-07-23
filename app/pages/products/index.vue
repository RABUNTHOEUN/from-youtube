<script setup>
definePageMeta({
  layout: "product", // Set the layout for this page
});

const { data: products } = await useFetch("https://fakestoreapi.com/products"); // Fetch all products from the API
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products"> <!-- Loop through each product -->
      <ProductCard :product="product" /> <!-- Using ProductCard component to display each product -->
    </div>
  </div>
</template>
