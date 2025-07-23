<!-- error.vue -->
<script setup>
const props = defineProps(['error'])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 flex flex-col justify-center items-center px-6 py-12">
    <div class="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
      <h1 class="text-5xl font-extrabold text-red-600 mb-4">
        {{ error?.statusCode || 'Error' }}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        {{ error?.statusMessage || 'Something went wrong' }}
      </h2>
      <p class="text-gray-600 mb-6">
        {{ error?.message || 'We are sorry for the inconvenience. Please try again later.' }}
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full transition"
      >
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>
