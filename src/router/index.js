import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/',component: ()=>import('../views/Home.vue')},
      {path:'/index',component: ()=>import('../views/Home.vue')},
      {path:'/footprint',component: ()=>import('../views/Footprint.vue')},
      {path:'/aboutUs',component: ()=>import('../views/AboutUs.vue')},
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
