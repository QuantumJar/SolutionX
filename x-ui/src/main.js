import { createApp } from 'vue'
import './style.css'
// 引入element-plus的样式，不然样式不会生效
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'

//
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
