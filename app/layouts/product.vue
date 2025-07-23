<script setup>

</script>

<template>
    <div>
        <div class="mx-auto max-w-5xl p-4">
            <nav class="flex justify-between items-center">
                <div class="text-lg font-bold">
                    <nuxt-link to="/">Logo</nuxt-link>
                </div>
                <ul class="flex space-x-4">
                    <li><NuxtLink class="hover:underline hover:text-blue-600" to="/">Home</NuxtLink></li>
                    <li><NuxtLink class="hover:underline hover:text-blue-600" to="/products">Products</NuxtLink></li>
                    <li><NuxtLink class="hover:underline hover:text-blue-600" to="/about">About</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <hr class="mb-4 text-gray-300"/>
        <main class="mx-auto max-w-5xl p-4">
            <slot />
        </main>
        <hr class="mt-4 text-gray-300"/>
        <footer class="mx-auto max-w-5xl p-4">
            <p>&copy; 2023 My Company</p>
        </footer>
    </div>
</template>
