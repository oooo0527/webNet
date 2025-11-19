import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StarProfile from '../views/StarProfile.vue'
import DataWorkshop from '../views/DataWorkshop.vue'
import WorksPromotion from '../views/WorksPromotion.vue'
import FanVoice from '../views/FanVoice.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/star-profile',
    name: 'StarProfile',
    component: StarProfile
  },
  {
    path: '/data-workshop',
    name: 'DataWorkshop',
    component: DataWorkshop
  },
  {
    path: '/works-promotion',
    name: 'WorksPromotion',
    component: WorksPromotion
  },
  {
    path: '/fan-voice',
    name: 'FanVoice',
    component: FanVoice
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router