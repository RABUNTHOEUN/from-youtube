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
    <p class="text-gray-600 mb-4">We are committed to providing the best service possible.</p>
    <p class="text-gray-600 mb-4">Our team is dedicated to ensuring customer satisfaction.</p>
    <p class="text-gray-600 mb-4">Feel free to reach out to us with any questions or concerns.</p>
    <h2 class="text-xl font-semibold mt-6 mb-2">Our Products</h2>
    <p class="text-gray-600 mb-4">Here are some of our featured products:</p>
    <ul class="list-disc pl-5 mb-4">
      <li v-for="product in products" :key="product.id" class="mb-2">
        Porduct Name : <strong>{{ product.name }}</strong> - Price: {{ product.price }}
      </li>
    </ul>
  </div>

</template>
