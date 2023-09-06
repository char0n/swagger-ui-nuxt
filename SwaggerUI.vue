<script>
import { defineComponent } from 'vue'
import 'swagger-ui/dist/swagger-ui.css'
import SwaggerUI from 'swagger-ui'
import SwaggerUIStandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset'

export default defineComponent({
  mounted() {
    SwaggerUI({
      url: 'https://petstore.swagger.io/v2/swagger.json',
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUI.presets.apis,
        SwaggerUIStandalonePreset,
      ],
      layout: 'StandaloneLayout',
    })
  }
});
</script>

<template>
  <div id="swagger-ui"></div>
</template>

