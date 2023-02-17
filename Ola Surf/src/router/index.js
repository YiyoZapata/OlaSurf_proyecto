import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/SobreNosotros.vue')
    },
    ,
    {
      path: '/alquileres',
      name: 'alquileres',
      component: () => import('../views/Alquiler.vue')
    } ,
    {
      path: '/rutas',
      name: 'rutas',
      component: () => import('../views/RutasSurf.vue')
    },
    {
      path: '/hospedajes',
      name: 'hospedajes',
      component: () => import('../views/Hospedaje.vue')
    },
    {
      path: '/clases',
      name: 'clases',
      component: () => import('../views/ClaseSurf.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
