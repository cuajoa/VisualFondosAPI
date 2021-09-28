<template>

    <div class=".container-fluid">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="./assets/logo-fondos.jpg" alt="" style="width:250px">
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="./solicitudes" class="nav-link">Solicitudes</router-link></li>
        <li class="nav-item"><router-link to="./liquidaciones" class="nav-link">Liquidaciones</router-link></li>
        <li class="nav-item"><router-link to="./posicion" class="nav-link">Posición Cuotapartista</router-link></li>
        <li class="nav-item"><a href="https://github.com/cuajoa/VisualFondosAPI" class="nav-link" target="_blank"><i class="bi bi-github"></i></a></li>

      </ul>
    </header>
 
  <router-view />

  </div>

</template>

<script>
import Solicitudes from '@/components/Solicitudes.vue'
import Liquidaciones from '@/components/Liquidaciones.vue'
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/liquidaciones', component: Liquidaciones, name:'Liquidaciones' },
  { path: '/solicitudes', component: Solicitudes, name:'Solicitudes' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// export default {
//   name: 'App',
//   router,
//   components: {
//     Solicitudes
//   }
// }


</script>
