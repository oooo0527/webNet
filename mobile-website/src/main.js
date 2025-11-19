import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/mobile.css'

const app = createApp(App)

// 初始化用户状态
store.dispatch('initializeStore')

app.use(store).use(router).mount('#app')