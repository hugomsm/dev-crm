<template>
  <q-page padding>
    <q-btn rounded absolute-top-left color=primary icon='arrow_back' to='/clientes'>VOLTAR</q-btn>
    <div class='q-title' align='center'>
      LISTA DE PESSOAS FÍSICAS</div>
    <q-table
    title="Lista de Clientes"
    :data="tableDataPF"
    :columns="columnsPF"
    row-key="name"
  />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tableDataPF: [],
      columnsPF: [
        {
          name: "nomeClienteF",
          required: true,
          label: "Nome do Cliente",
          align: "left",
          field: "nomeClienteF",
          sortable: true
        },
        {
          name: "cnpjClienteF",
          required: true,
          label: "CPF",
          align: "left",
          field: "cpfClienteF",
          sortable: true
        },

        {
          name: "enderecoClienteF",
          required: true,
          label: "Endereço",
          align: "left",
          field: "enderecoClienteF",
          sortable: true
        },
        {
          name: "telefoneClienteF",
          required: true,
          label: "Telefone",
          align: "left",
          field: "telefoneClienteF",
          sortable: true
        },
        {
          name: "emailClienteF",
          required: true,
          label: "E-mail",
          align: "left",
          field: "emailClienteF",
          sortable: true
        },
        {
          name: "obsClienteF",
          required: true,
          label: "Observações",
          align: "left",
          field: "obsClienteF",
          sortable: true
        }
      ]
    };
  },
  mounted() {
    for (let i = 0; i < this.$clientes.length; i++) {
      let c = this.$clientes[i];
      console.log(c);
      if (c.tipo === "PF") {
        this.tableDataPF.push(c);
      }
    }
  }
};
</script>

<style>
</style>
