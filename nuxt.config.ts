// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "node:url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    react: fileURLToPath(new URL('./node_modules/swagger-ui/node_modules/react/umd/react.production.min.js', import.meta.url)),
    'react-dom': fileURLToPath(new URL('./node_modules/swagger-ui/node_modules/react-dom/umd/react-dom.production.min.js', import.meta.url)),
  }
})
