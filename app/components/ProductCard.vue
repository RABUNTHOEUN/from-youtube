<script setup>
const props = defineProps(["product"]); // Define props to receive product data from parent component
console.log(props.product); // Log the product data for debugging

</script>

<template>
  <div class="bg-white p-8 w-2/3 mx-auto">
    <NuxtLink :to="`/products/${props.product?.id}`"> <!-- Link to product details page -->
      <!-- Product card layout -->
      <div
        class="border p-4 rounded-lg hover:shadow-lg transition-shadow text-gray-600 hover:text-gray-900"
      >
        <img :src="props.product?.image" alt="No Image" class="w-full h-60 object-cover mb-3" /> <!-- Product image -->
        <h2 class="text-lg font-semibold truncate">{{ props.product?.title }}</h2> <!-- Product title -->
        <p class="text-gray-600 mt-1">${{ props.product?.price }}</p> <!-- Product price -->
      </div>
    </NuxtLink>
  </div>
</template>
