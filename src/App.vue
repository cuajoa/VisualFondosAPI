<template>

    <div class=".container-fluid">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <router-link to="./" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src="./assets/logo-fondos.jpg" alt="" style="width:250px">
      </router-link>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link to="./solicitudes" class="nav-link">Solicitudes</router-link></li>
        <li class="nav-item"><router-link to="./liquidaciones" class="nav-link">Liquidaciones</router-link></li>
        <li class="nav-item"><router-link to="./posicion" class="nav-link">Posición Cuotapartista</router-link></li>
        <li class="nav-item"><a href="https://github.com/cuajoa/VisualFondosAPI" class="nav-link" target="_blank"><i class="bi bi-github"></i></a></li>

      </ul>
    </header>
 
  <router-view />
  <Home />
  
  </div>

</template>

<script>


// export default {
//   name: 'App',
//   router,
//   components: {
//     Solicitudes
//   }
// }


</script>
