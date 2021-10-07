<template>
  <div class="container-fluid">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <router-link
        to="./"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <img src="./assets/logo-fondos.jpg" alt="" style="width:250px" />
      </router-link>

      <ul class="nav nav-pills">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Consultivo</a
          >
          <ul class="dropdown-menu">
            <li>
              <router-link to="./solicitudes" class="dropdown-item"
                >Solicitudes</router-link
              >
            </li>
            <li>
              <router-link to="./liquidaciones" class="dropdown-item"
                >Liquidaciones</router-link
              >
            </li>
            <li>
              <router-link to="./posicion" class="dropdown-item"
                >Posición Cuotapartista</router-link
              >
            </li>
            <li>
              <router-link to="./valorescp" class="dropdown-item"
                >Valores de Cuotaparte</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Transaccional</a
          >
          <ul class="dropdown-menu">
            <li>
              <router-link to="./suscripcion" class="dropdown-item"
                >Solicitudes de Suscripcion</router-link
              >
            </li>
            <li>
              <router-link to="./rescate" class="dropdown-item"
                >Solicitudes de Rescate</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Normativo Paraguay</a
          >
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="./py/cartera"
                >Composición de Cartera</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="./py/participes"
                >Cantidad de Partícipes</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="./py/solicitudes"
                >Solicitudes Diarias</router-link
              >
            </li>
            <li>
              <router-link class="dropdown-item" to="./py/valorizacion"
                >Valorización</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/cuajoa/VisualFondosAPI"
            class="nav-link"
            target="_blank"
            ><i class="bi bi-github"></i
          ></a>
        </li>
      </ul>
    </header>

    <router-view />
    <Home />
  </div>
</template>
