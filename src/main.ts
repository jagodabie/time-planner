import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import * as Vue from 'vue' // in Vue 3
import axios from './plugins/axios'

const app = createApp(App)

library.add(faPlus)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(axios, {
  baseUrl: 'http://localhost:3000'
})
app.mount('#app')
