import { createApp } from 'vue'
//引入我们导出的路由
import router from './routes'
// 引入我们导出的vuex
import store from './store'
// elementPlus完整引入
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue'
createApp(App)
// 通过use的方法把路由信息挂载到app中
    .use(router)
// 通过use的方法把vuex信息挂载到vue中
    .use(store)
    .use(ElementPlus)
    .mount('#app')
