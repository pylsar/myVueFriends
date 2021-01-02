import Vue from 'vue'
import VueRouter from 'vue-router'
import Quize from '../views/Quize.vue'
import SingleQuize from '../views/SingleQuize.vue'
import StartQuize from '../views/StartQuize.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Quize',
    component: Quize
  },
  {
    path: '/start-quize',
    name: 'StartQuize',
    component: StartQuize
  },
  {
    path: '/single-quize/:id',
    name: 'SingleQuize',
    component: SingleQuize,
    props: true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
