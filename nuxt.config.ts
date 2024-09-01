// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss",
    [
      'yandex-metrika-module-nuxt3',
      {
        id: 98214979,
        defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      }
    ],
  ],
  css: ['~/assets/styles/main.css']

})