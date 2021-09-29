<template>
<h1>Liquidaciones</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fondo</th>
                    <th scope="col">Fecha Concertacion</th>
                    <th scope="col">Fecha Acreditación</th>
                    <th scope="col">Moneda</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Cuotapartes</th>
                    <th scope="col">Valor Cuotaparte</th>
                    <th scope="col">Cuotapartista</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="liq in this.liquidaciones" :key="liq.idLiquidacion">
                    <th scope="row">{{ liq.numero }}</th>
                    <td>{{ liq.tipo.descripcion }}</td>
                    <td>Fondo {{ liq.fondo.numFondo }} - {{ liq.tipoValorCuotaparte.descripcion }}</td>
                    <td>{{ format_date(liq.fechaConcertacion) }}</td>
                    <td>{{ format_date(liq.fechaLiquidacion) }}</td>
                    <td>{{ liq.moneda.simbolo }}</td>
                    <td>{{ liq.importeNeto }}</td>
                    <td>{{ liq.cuotapartes }}</td>
                    <td>{{ liq.valorCuotaparte.valorCuotaparte }}</td>
                    <td> Cuenta {{ liq.cuotapartista.numero }}</td>
                </tr>

            </tbody>
        </table>

        <nav role="navegation" aria-label="pagination">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" v-on:click="changePage(1)">Primera</a></li>
            <li class="page-item"><a class="page-link" v-on:click="changePage(previousPageNumber)">Anterior</a></li>
            <li class="page-item"><a class="page-link">{{ page }}</a></li>
            <li class="page-item"><a class="page-link" v-on:click="changePage(nextPageNumber)">Siguiente</a></li>
            <li class="page-item"><a class="page-link" v-on:click="changePage(totalPages-1)">Ultima</a></li>
        </ul>
        </nav>

</template>

<script>
 import moment from 'moment'

export default {
  name: 'Liquidaciones',
  data: function(){
      return{
        liquidaciones:[{}],
        page:1,
        hasPreviousPage: false,
        hasNextPage: true,
        nextPageNumber: 2,
        pageSize: 10,
        previousPageNumber: 1,
        totalPages: 98,
        totalItems: 975
          }
  },
    methods: {
    async getLiquidaciones() {

        const headers = {
                    'accept':'application/json;odata.metadata=minimal;odata.streaming=true',
                    'Content-Type':'application/json;',
                    'api-version': '2'
                }

            fetch("https://api.sistemasesco.com/api/fondos/v2/reportes/liquidaciones?fechaDesde=2017-04-01&fechaHasta=2017-05-01&pageSize=15&pageNumber="+ this.page, { headers })
            .then(response => response.json())
            .then(data => {
                this.page = data.pageNumber,
                this.hasPreviousPage = data.hasPreviousPage
                this.hasNextPage = data.hasNextPage
                this.nextPageNumber = data.nextPageNumber
                this.pageSize = data.pageSize
                this.previousPageNumber = data.previousPageNumber
                this.totalPages = data.totalPages
                this.totalItems = data.totalItems
                this.liquidaciones = data.data
            })
            
            },
            changePage(page) {
                this.page = (page <=0 || page > this.totalPages) ? this.page : page
                this.getLiquidaciones()
            },
            format_date(value){
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
      }
    },
    created() {
        this.getLiquidaciones();         
    }
}
</script>

