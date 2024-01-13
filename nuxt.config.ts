// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: true,
  },
  css: [
    '@fontsource-variable/commissioner/full.css'
  ],
  devtools: { enabled: true }
})
