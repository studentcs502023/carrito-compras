import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css' // estilos base de Quasar
import '@quasar/extras/material-icons/material-icons.css' // íconos opcionales

const app = createApp(App)

// Usa el plugin Quasar
app.use(Quasar, {
  plugins: {} // puedes agregar plugins de Quasar más adelante (Dialog, Notify, etc.)
})


createApp(App).mount('#app')
