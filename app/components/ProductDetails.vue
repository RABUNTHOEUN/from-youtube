<script setup>
const props = defineProps(["product"]); // Define props to receive product data from parent component
console.log(props.product); // Log the product data for debugging

useHead({
  title: props.product?.title || "Product Details", // Set the title for the page based on product title
  meta: [
    {
      name: "description",
      content: props.product?.description || "Product details page", // Set meta description
    },
  ],
});
definePageMeta({
  layout: "product", // Set the layout for this page
});

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
    <div class="my-5">
      <button
        class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition"
      >
        Add to Cart
      </button>
      <!-- Add to Cart button -->
      <button
        class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full transition ml-3"
      >
        Buy Now
      </button>
      <!-- Buy Now button -->   
    </div>


  </div>
</template>
