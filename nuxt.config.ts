// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-23',
  devtools: { enabled: true },
  ssr: true,
  css: ['bootstrap/dist/css/bootstrap.min.css',

  ],
  plugins: ['~/plugins/bootstrap.client']



  
})
