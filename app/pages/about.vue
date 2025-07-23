<script setup>
useHead({
  title: "About Page", // Set the title for the home page
});

const { data: products } = await useFetch('/api/products') // Fetch about page information

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">About Us</h1>
    <p class="text-gray-600 mb-4">Welcome to our about page. Here you can find information about our company and what we do.</p>
    <div>{{ products }}</div>
  </div>

</template>
