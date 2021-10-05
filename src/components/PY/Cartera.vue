<template>
 <div class="col-sm-4">
    <select v-model="selected" class="form-select" aria-label="Seleccione un fondo" @change="getCartera($event)">
        <option v-for="fondo in this.fondos" :key="fondo.numFondo" v-bind:value="fondo.numFondo">Fondo {{ fondo.numFondo }}</option>
    </select>
</div>
<h2><span class="badge bg-light"><a href="https://github.com/cuajoa/VisualFondosAPI" class="nav-link" target="_blank" title="Descargar información en Excel"><i class="bi bi-arrow-down-square-fill"></i></a></span></h2>


 <table class="table">
            <thead>
                <tr>
                    <th scope="col" rowspan="2">afpisa</th>
                    <th scope="col" rowspan="2">rucAdministradora</th>
                    <th scope="col" rowspan="2">Instrumento</th>
                    <th scope="col" rowspan="2">Emisor</th>
                    <th scope="col" rowspan="2">Sector</th>
                    <th scope="col" rowspan="2">País</th>
                    <th scope="col" rowspan="2">Fecha Compra</th>
                    <th scope="col" rowspan="2">Fecha Vencimiento</th>
                    <th scope="col" rowspan="2">Moneda</th>
                    <th scope="col" rowspan="2">Monto</th>
                    <th scope="col" rowspan="2">Valor Compra</th>
                    <th scope="col" rowspan="2">Valor Contable</th>
                    <th scope="col" rowspan="2">Valor Nominal</th>
                    <th scope="col" rowspan="2">Precio de Mercado (%)</th>
                    <th scope="col" rowspan="2">Tasa de Interés</th>
                    <th scope="col" colspan="4">% de las inversiones</th>
                </tr>
                <tr>
                    <th scope="col">segun Reglam. Informe</th>
                    <th scope="col">con relacion al PN del fondo</th>
                    <th scope="col">por grupo económico</th>
                    <th scope="col">en relación al PN del emisor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in this.cartera" :key="c.fondo.numFondo">
                    <td>Administradora de Fondos</td>
                    <td>1798285937001</td>
                    <td>{{ c.instrumento }}</td>
                    <td>{{ c.emisor.descripcion }}</td>
                    <td>{{ c.emisor.sector.descripcion }}</td>
                    <td>{{ c.emisor.pais.descripcion }}</td>
                    <td>{{ format_date(c.fechaCompra) }}</td>
                    <td>{{ format_date(c.fechaVencimiento) }}</td>
                    <td>{{ c.moneda.simbolo }}</td>
                    <td>{{ c.monto.toLocaleString() }}</td>
                    <td>{{ c.valorCompra }}</td>
                    <td>{{ c.valorContable }}</td>
                    <td>{{ c.valorNominal }}</td>
                    <td>{{ c.precioMercadoPorcentaje }}</td>
                    <td>{{ c.tasaInteres }}</td>
                    <td>{{ c.porcentajeInversiones.segunReglamentoInterno }}</td>
                    <td>{{ c.porcentajeInversiones.relacionPNFondo }}</td>
                    <td>{{ c.porcentajeInversiones.grupoEconomico }}</td>
                    <td>{{ c.porcentajeInversiones.relacionPNEmisor }}</td>
                </tr>

            </tbody>
        </table>


</template>

<script>
import moment from 'moment'

export default {
  name: 'Cartera',
  data: function(){
      return{
        fondos:[{}],
        cartera:[]
          }
  },
    methods: {
        async getFondos() {
            const headers = {
                        'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                        'Content-Type':'application/json;',
                        'api-version': '2'
                    }

                fetch("https://api.sistemasesco.com/api/fondos/v2/get-fondos", { headers })
                .then(response => response.json())
                .then(data => {
                    this.fondos = data
                })
            },
        async getCartera(event) {
            const headers = {
                    'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                    'Content-Type':'application/json;',
                    'api-version': '2'
                }
            fetch("https://api.sistemasesco.com/api/fondos/v2/informesRegulatorios/py/composicionCartera?fecha=2015-10-01&pageSize=50&numFondo="+event.target.value, { headers })
            .then(response => response.json())
            .then(data => {
                this.cartera = data.data
            })
        },
            format_date(value){
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
            }
    },
    created() {
        this.getFondos();         
    }
}
</script>
