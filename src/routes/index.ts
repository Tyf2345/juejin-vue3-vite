import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 加载当前文件夹下modules文件夹下所有的ts结尾的文件
const  modules = import.meta.glob("./modules/*.ts")

const routes: RouteRecordRaw[] = []

// 遍历 modules 对象的 key 值来访问相应的模块
for (const path in modules) {
   const mod =  await modules[path]()
//    数据添加到routes中
  routes.push(...mod.default)
}

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, format, next) => {
    // 判断路由是否要去登录页面
    // 是的话 清除sessionStorage存储 放行
    // 否则进行验证，用户是否已经登录
        // 有登陆记录的话放行
        // 否则清除sessionStorage存储，并重定向到login
    if(to.path === '/login') {
        //清除sessionStorage存储
        sessionStorage.clear()
        next()
    }else {
       let user = sessionStorage.getItem('user')
        if(user) {
            next()
        }else {
            //清除sessionStorage存储
            sessionStorage.clear()
            // 重定向到login
            next("/login?url="+to.path)
        }
    }
})

export default router