<script setup>
const props = defineProps(["product"]); // Define props to receive product data from parent component
console.log(props.product); // Log the product data for debugging
</script>

<template>
  <div class="grid grid-cols-2 gap-10">
    <div>
      <h1 class="text-gray-600 text-2xl font-bold">{{ props.product?.title }}</h1>
      <!-- Display product title -->
      <p class="text-gray-600 mt-1 font-semibold text-xl">
        Price - ${{ props.product?.price }}
      </p>
      <!-- Display product price -->
      <!-- Display product description -->

      <div class="text-gray-600 font-bold mt-5">Product description</div>
      <hr class="mb-2 text-gray-300" />
      <p class="text-gray-600">{{ props.product?.description }}</p>
    </div>
    <div class="ml-5">
      <img :src="props.product?.image" class="w-300 h-100 object-contain mx-auto p-8" />
      <!-- Display product image -->
    </div>
  </div>
</template>
