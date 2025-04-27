import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'
import './api'

const firebaseConfig = {
  apiKey: 'AIzaSyB1yTSKtcqud0m1rlZzq9ZGbBZVoveMYgI',
  authDomain: 'e-shop-8d4b7.firebaseapp.com',
  projectId: 'e-shop-8d4b7',
  storageBucket: 'e-shop-8d4b7.firebasestorage.app',
  messagingSenderId: '505878419475',
  appId: '1:505878419475:web:2559f2424a20ab85aa47e6',
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
