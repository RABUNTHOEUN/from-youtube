<script setup>
definePageMeta({
  layout: "product", // Set the layout for this page
});

import { useRoute } from "vue-router"; // Import useRoute to access route parameters
import ProductDetails from "~/components/ProductDetails.vue";

const route = useRoute(); // Access the route object to get the product ID
const id = route.params.id; // Get the product ID from the route parameters
const url = `https://fakestoreapi.com/products/${id}`; // Construct the URL using the ID from the route
const { data: product } = await useFetch(url); // Fetch the product data based on the ID

// Check if the product data is available, if not throw an error
if(!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    message: "The product you are looking for does not exist."
  });
}
</script>

<template>
  <div>
    <ProductDetails :product="product" /> <!-- Pass the fetched product data to the ProductDetails component -->
  </div>
</template>
