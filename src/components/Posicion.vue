<template>
<h1>Posición Cuotapartista</h1>

 <div class="col-sm-4">
    <select v-model="selected" class="form-select" aria-label="Seleccione una cuenta" @change="getPosicion($event)">
        <option v-for="cuenta in this.cuentas" :key="cuenta.cuotapartista.numero" v-bind:value="cuenta.cuotapartista.numero">Cuenta {{ cuenta.cuotapartista.numero }}</option>
    </select>
</div>
<br/>
 <div class="col-sm-4">

 </div>
 <div class="col-sm-6">

 <table class="table">
            <thead>
                <tr>
                    <th scope="col">Fondo</th>
                    <th scope="col">Cuotapartes Totales</th>
                    <th scope="col">Último VCP</th>
                    <th scope="col">Posición</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pos in this.cuentaSeleccionada" :key="pos.fondo.numFondo">
                    <td>Fondo {{ pos.fondo.numFondo }} - {{ pos.tipoValorCuotaparte.descripcion }}</td>
                    <td>{{ pos.cuotapartesTotal.toLocaleString() }}</td>
                    <td>{{ pos.ultimoValorCuotaparte.toLocaleString() }}</td>
                    <td>{{ pos.moneda.idMoneda }} {{ pos.cuotapartesValuadas.toLocaleString() }}</td>
                </tr>

            </tbody>
        </table>
 </div>


</template>

<script>
import moment from 'moment'

export default {
  name: 'Posicion',
  data: function(){
      return{
        cuentas:[{}],
        cuentaSeleccionada:[]
          }
  },
    methods: {
        async getCuentas() {
            const headers = {
                        'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                        'Content-Type':'application/json;',
                        'api-version': '2'
                    }

                fetch("https://api.sistemasesco.com/api/fondos/v2/reportes/posicionCuotapartista?fecha=2021-09-28&pageSize=150", { headers })
                .then(response => response.json())
                .then(data => {
                    this.cuentas = data.data
                })
                },
                changePage(page) {
                    this.page = (page <=0 || page > this.totalPages) ? this.page : page
                    this.getCuentas()
                },
                format_date(value){
                if (value) {
                    return moment(String(value)).format('DD/MM/YYYY')
                }
            },
        async getPosicion(event) {
            const headers = {
                    'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                    'Content-Type':'application/json;',
                    'api-version': '2'
                }
            fetch("https://api.sistemasesco.com/api/fondos/v2/reportes/posicionCuotapartista?fecha=2021-09-28&pageSize=50&numCuotapartista="+event.target.value, { headers })
            .then(response => response.json())
            .then(data => {
                this.cuentaSeleccionada = data.data
                console.log(this.cuentaSeleccionada)
            })
        }
    },
    created() {
        this.getCuentas();         
    }
}
</script>
