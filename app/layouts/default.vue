<script setup>

</script>

<template>
    <div class="mx-auto max-w-5xl p-4 bg-slate-50">
        <nav class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold">
                <nuxt-link to="/">THOEUN</nuxt-link>
            </div>
            <ul class="flex space-x-4">
                <li><NuxtLink class="hover:underline hover:text-blue-600" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="hover:underline hover:text-blue-600" to="/products">Products</NuxtLink></li>
                <li><NuxtLink class="hover:underline hover:text-blue-600" to="/about">About</NuxtLink></li>
            </ul>
        </nav>
        <hr class="mb-4 text-gray-300"/>
        <slot />
        <hr class="mt-4 text-gray-300"/>
        <footer class="mt-8 text-center text-gray-600">
            &copy; 2023 THOEUN. All rights reserved.
        </footer>
    </div>
</template>
