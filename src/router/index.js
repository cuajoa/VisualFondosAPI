import Solicitudes from '@/components/Solicitudes.vue'
import Liquidaciones from '@/components/Liquidaciones.vue'
import Posicion from '@/components/Posicion.vue'
import Home from '@/components/Home.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/liquidaciones', component: Liquidaciones, name:'Liquidaciones' },
  { path: '/solicitudes', component: Solicitudes, name:'Solicitudes' },
  { path: '/posicion', component: Posicion, name:'Posicion' },
  { path: '/', component: Home, name:'Home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
