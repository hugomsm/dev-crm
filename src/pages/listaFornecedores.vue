<template>
  <q-page padding>
    <q-btn rounded absolute-top-left color=primary icon='arrow_back' to='/fornecedores'>VOLTAR</q-btn>
<div class='q-title' align='center'>
    <br>
  LISTA DE FORNECEDORES
  <q-table
    title="Lista de fornecedores"
    :data="tableDataFornecedores"
    :columns="columnsFornecedores"
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
      tableDataFornecedores: [],
      columnsFornecedores: [
        {
          name: "nomeEmpresaJ",
          required: true,
          label: "Nome da Empresa",
          align: "left",
          field: "nomeEmpresaJ",
          sortable: true
        },
        {
          name: "nomeFornecedorJ",
          required: true,
          label: "Nome do Responsável",
          align: "left",
          field: "nomeFornecedorJ",
          sortable: true
        },
        {
          name: "cnpjFornecedorJ",
          required: true,
          label: "CNPJ",
          align: "left",
          field: "cnpjFornecedorJ",
          sortable: true
        },

        {
          name: "enderecoFornecedorJ",
          required: true,
          label: "Endereço",
          align: "left",
          field: "enderecoFornecedorJ",
          sortable: true
        },
        {
          name: "telefoneFornecedorJ",
          required: true,
          label: "Telefone",
          align: "left",
          field: "telefoneFornecedorJ",
          sortable: true
        },
        {
          name: "emailFornecedorJ",
          required: true,
          label: "E-mail",
          align: "left",
          field: "emailFornecedorJ",
          sortable: true
        },
        {
          name: "obsFornecedorJ",
          required: true,
          label: "Observações",
          align: "left",
          field: "obsFornecedorJ",
          sortable: true
        }
      ]
    };
  },
  mounted() {
    for (let i = 0; i < this.$fornecedores.length; i++) {
      let c = this.$fornecedores[i];
      console.log(c);
      if (c.tipo === "FORNECEDOR") {
        this.tableDataFornecedores.push(c);
      }
    }
  }
};
</script>

<style>
</style>
