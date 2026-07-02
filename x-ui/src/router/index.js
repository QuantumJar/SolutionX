import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // 根路径,一般来说根路径是默认放行的页面
    path: '/',
    redirect: '/login',
  },
  {
    /**
     * 一个路由配置项的3要素是 1.路径 2.组件名称 3.组件
     */
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
  },
  {

    //
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/register.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/dashboard.vue'),
  }, {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/404.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
