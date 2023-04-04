import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as Vue from 'vue' // in Vue 3
import axios from './plugins/axios'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios, {
  baseUrl: 'http://localhost:3000'
})
app.mount('#app')
