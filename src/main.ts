import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css' //css初始设置
import '@/assets/css/base.less'
import { getUser } from './service'

const app = createApp(App)

// element-plus全局引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
// element-plus全局引入
getUser()
app.use(store)
app.use(router)
app.mount('#app')
