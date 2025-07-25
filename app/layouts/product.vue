<script setup>

</script>

<template>
    <div>
        <div class="bg-slate-600">
            <div class="mx-auto max-w-5xl">
                <nav class="flex justify-between items-center p-4 text-white">
                    <div class="text-lg font-bold">
                        <nuxt-link to="/">Logo</nuxt-link>
                    </div>
                    <ul class="flex space-x-4">
                        <li><NuxtLink class="hover:underline hover:text-slate-400" to="/">Home</NuxtLink></li>
                        <li><NuxtLink class="hover:underline hover:text-slate-400" to="/products">Products</NuxtLink></li>
                        <li><NuxtLink class="hover:underline hover:text-slate-400" to="/about">About</NuxtLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- <hr class="mb-4 text-gray-300"/> -->
        <main class="mx-auto max-w-5xl p-4">
            <slot />
        </main>
        <!-- <hr class="mt-4 text-gray-300"/> -->
        <footer class="text-center bg-slate-600 text-white p-4">
            &copy; 2023 THOEUN. All rights reserved.
        </footer>
    </div>
</template>
