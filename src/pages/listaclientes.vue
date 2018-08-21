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

<div class='q-title' align='center'>
  LISTA DE PESSOAS JURÍDICAS
  <q-table
    title="Lista de Clientes"
    :data="tableDataPJ"
    :columns="columnsPJ"
    row-key="name"
  />
</div>
  
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tableDataPF: [],
      columnsPF: [
        {
          name: "desc",
          required: true,
          label: "Nome do Cliente",
          align: "left",
          field: "nomeClienteF",
          sortable: true
        }
      ],
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
          field: "cpnjClienteJ",
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
  created() {
    // let itens = this.$q.localStorage.get.item(listaClientes);
    var itens = this.$clientes;
    this.tableDataPJ.push(itens);
    console.log(this.tableDataPJ);
    // for (let i = 0; i < this.$clientes.lenght; i++) {
    //   if (itens[i].tipo.equals("PF")) {
    //     this.tableDataPF.push(itens[i]);
    //   } else {
    //     this.tableDataPJ.push(itens[i]);
    //   }
    // }
  }
  // name: 'PageName',
};
</script>

<style>
</style>
