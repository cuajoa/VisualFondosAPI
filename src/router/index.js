import Solicitudes from '@/components/Solicitudes.vue'
import Liquidaciones from '@/components/Liquidaciones.vue'
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/liquidaciones', component: Liquidaciones, name:'Liquidaciones' },
  { path: '/solicitudes', component: Solicitudes, name:'Solicitudes' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
