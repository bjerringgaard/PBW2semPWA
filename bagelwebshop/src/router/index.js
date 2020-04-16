import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Admin from '../views/Admin.vue'
import Orders from '../views/Orders.vue'
import AddNewItems from '../components/admin/AddNewItems.vue'
import Login from '../components/admin/Login.vue'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {requiresAuth : true},
    component: Admin
  },
  {
    path: '/orders',
    name: 'orders',
    meta: {requiresAuth : true},
    component: Orders
  },
  {
    path: '/addNew',
    name: 'addNew',
    meta: {requiresAuth : true},
    component: AddNewItems
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach ((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else next();
})

export default router
