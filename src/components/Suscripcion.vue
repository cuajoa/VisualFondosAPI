<template>
  <h1>Alta Suscripción</h1>
  <div class="container">
    <form class="g-3 needs-validation" novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label"
          >Cuenta Cuotapartista</label
        >
        <select v-model="selected" class="form-select" required>
          <option
            v-for="cuenta in this.cuentas"
            :key="cuenta.cuotapartista.numero"
            v-bind:value="cuenta.cuotapartista.numero"
            >Cuenta {{ cuenta.cuotapartista.numero }}</option
          >
        </select>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Fondo</label>
        <select v-model="selected" class="form-select" required>
          <option
            v-for="fondo in this.fondos"
            :key="fondo.numFondo"
            v-bind:value="fondo.numFondo"
            >Fondo {{ fondo.fondo.numFondo }} -
            {{ fondo.tipoValorCuotaparte.descripcion }}</option
          >
        </select>
      </div>

      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Importe</label>
        <input
          type="numeric"
          class="form-control"
          id="validationCustom05"
          required
        />
        <div class="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const headers = {
  accept: "application/json;odata.metadata=minimal;odata.streaming=true",
  "Content-Type": "application/json;",
  "api-version": "2",
};

const apiURL = "http://192.168.22.14:6003/api/fondos/v3";
const apiURLv2 = "https://api.sistemasesco.com/api/fondos/v2";

const login = { userName: "sa", password: "sasa" };

export default {
  name: "Suscripcion",
  data: function() {
    return {
      suscripcion: null,
      cuentas: [{}],
      fondos: [{}],
      cuentaSeleccionada: [],
    };
  },
  methods: {
    async getCuentas() {
      // const responseToken = await axios.post(apiURL + "/login", login, {
      //   headers,
      // });
      // const token = responseToken.data.access_token;

      // const headerToken = {
      //   accept: "application/json;odata.metadata=minimal;odata.streaming=true",
      //   "Content-Type": "application/json;",
      //   "api-version": "3",
      //   Authorization: "Bearer " + token,
      // };

      const response = await fetch(
        apiURLv2 +
          "/reportes/posicionCuotapartista?fecha=2021-10-15&pageSize=150",
        { headers }
      );
      const data = await response.json();
      this.cuentas = data.data;
    },
    async getFondos() {
      const response = await fetch(
        apiURLv2 + "/reportes/valorCuotapartes?fecha=2015-10-10&pageSize=50",
        { headers }
      );
      const data = await response.json();
      this.fondos = data.data;

      console.log(this.fondos);
    },
  },
  created() {
    this.getFondos();
    this.getCuentas();
  },
};
</script>
