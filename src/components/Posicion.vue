<template>
<h1>Posición Cuotapartista</h1>

 <div class="input-group mb-3" style="width:550px">
    <label class="input-group-text" for="inputGroupSelect01">Cuenta Cuotapartista</label>

    <select v-model="selected" class="form-select" aria-label="Seleccione una cuenta" @change="getPosicion($event)">
        <option v-for="cuenta in this.cuentas" :key="cuenta.cuotapartista.numero" v-bind:value="cuenta.cuotapartista.numero">Cuenta {{ cuenta.cuotapartista.numero }}</option>
    </select>
</div>
 <!-- <div class="input-group mb-3" style="width:550px">
    <label class="input-group-text" for="inputGroupSelect01">Posición al</label>
<input type="date" :value="fecha && new Date(fecha.getTime()-(fecha.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]"
                   @input="fecha = $event.target.valueAsDate">
                   </div> -->

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
        cuentaSeleccionada:[],
        fecha:  new Date('2021-10-05T00:01:01Z')
        }
  },
    methods: {
        format_date(value){
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        },
        async getCuentas() {
            const headers = {
                        'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                        'Content-Type':'application/json;',
                        'api-version': '2'
                    }
                    // console.log(this.fecha.toString("dd/MM/yyyy"))
                    const response = await fetch("https://api.sistemasesco.com/api/fondos/v2/reportes/posicionCuotapartista?fecha=2021-10-15&pageSize=150", { headers })
                    const data = await response.json()
                    this.cuentas = data.data
                
                },
        async getPosicion(event) {
            const headers = {
                    'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                    'Content-Type':'application/json;',
                    'api-version': '2'
                }
            const response = await fetch("https://api.sistemasesco.com/api/fondos/v2/reportes/posicionCuotapartista?fecha=2021-10-15&pageSize=50&numCuotapartista="+event.target.value, { headers })
            const data = await response.json()
            this.cuentaSeleccionada = data.data
        }
    },
    created() {
        this.getCuentas();

    }
}
</script>
