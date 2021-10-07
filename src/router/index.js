import Solicitudes from '@/components/Solicitudes.vue'
import Liquidaciones from '@/components/Liquidaciones.vue'
import Posicion from '@/components/Posicion.vue'
import ValoresCP from '@/components/ValoresCP.vue'
import Suscripcion from '@/components/Suscripcion.vue'
import Rescate from '@/components/Rescate.vue'
import Home from '@/components/Home.vue'
import Cartera from '@/components/PY/Cartera.vue'
import Participes from '@/components/PY/Participes.vue'
import SolicitudesPY from '@/components/PY/Solicitudes.vue'
import Valorizacion from '@/components/PY/Valorizacion.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/liquidaciones', component: Liquidaciones, name:'Liquidaciones' },
  { path: '/solicitudes', component: Solicitudes, name:'Solicitudes' },
  { path: '/posicion', component: Posicion, name:'Posicion' },
  { path: '/valorescp', component: ValoresCP, name:'ValoresCP' },
  { path: '/suscripcion', component: Suscripcion, name:'Suscripcion' },
  { path: '/rescate', component: Rescate, name:'Rescate' },
  { path: '/', component: Home, name:'Home' },
  { path: '/py/cartera', component: Cartera, name:'Cartera' },
  { path: '/py/participes', component: Participes, name:'Participes' },
  { path: '/py/solicitudes', component: SolicitudesPY, name:'SolicitudesPY' },
  { path: '/py/valorizacion', component: Valorizacion, name:'Valorizacion' }
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
