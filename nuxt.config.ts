import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Nuxt 3 Tailwind CSS Example',
      meta: [
        { name: 'description', content: 'A Nuxt 3 project with Tailwind CSS' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.googleleapis.com/icons?family=Material+Icons' },
      // ],
    },
  }
})
