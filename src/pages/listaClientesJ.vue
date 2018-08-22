<template>
  <q-page padding>
    <q-btn rounded absolute-top-left color=primary icon='arrow_back' to='/clientes'>VOLTAR</q-btn>
<div class='q-title' align='center'>
  LISTA DE PESSOAS JURÍDICAS
  <q-table
    title="Lista de Clientes"
    :data="tableDataPJ"
    :columns="columnsPJ"
    row-key="name"
  >
  </q-table>
</div>
  
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tableDataPJ: [],
      columnsPJ: [
        {
          name: "nomeEmpresaJ",
          required: true,
          label: "Nome da Empresa",
          align: "left",
          field: "nomeEmpresaJ",
          sortable: true
        },
        {
          name: "nomeClienteJ",
          required: true,
          label: "Nome do Responsável",
          align: "left",
          field: "nomeClienteJ",
          sortable: true
        },
        {
          name: "cnpjClienteJ",
          required: true,
          label: "CNPJ",
          align: "left",
          field: "cnpjClienteJ",
          sortable: true
        },

        {
          name: "enderecoClienteJ",
          required: true,
          label: "Endereço",
          align: "left",
          field: "enderecoClienteJ",
          sortable: true
        },
        {
          name: "telefoneClienteJ",
          required: true,
          label: "Telefone",
          align: "left",
          field: "telefoneClienteJ",
          sortable: true
        },
        {
          name: "emailClienteJ",
          required: true,
          label: "E-mail",
          align: "left",
          field: "emailClienteJ",
          sortable: true
        },
        {
          name: "obsClienteJ",
          required: true,
          label: "Observações",
          align: "left",
          field: "obsClienteJ",
          sortable: true
        }
      ]
    };
  },
  mounted() {
    for (let i = 0; i < this.$clientes.length; i++) {
      let c = this.$clientes[i];
      console.log(c);
      if (c.tipo === "PJ") {
        this.tableDataPJ.push(c);
      }
    }
  }
};
</script>

<style>
</style>
