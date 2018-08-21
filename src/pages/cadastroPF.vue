<template>
  <q-page padding>
    <div class='q-title' align='center'><q-btn round     color=primary icon='arrow_back' to='/clientes'></q-btn>CADASTRO DE PESSOA FÍSICA</div>
    
    <div>
      <q-field icon="face">
        <q-input clearable v-model="objCliente[0].nomeClienteF" float-label="Nome" />
      </q-field>
      <q-field icon="fingerprint">
        <q-input type='text' clearable v-model="objCliente[0].cpfClienteF" v-mask="'999.999.999-99'" float-label="CPF" />
      </q-field>
      <q-field icon="place">
        <q-input type='textarea' clearable v-model="objCliente[0].enderecoClienteF" float-label="Endereço" />
      </q-field>
      <q-field icon="phone">
        <q-input type='tel' clearable v-model="objCliente[0].telefoneClienteF" v-mask="'(99) 99999-9999'" float-label="Telefone" />
      </q-field>
      <q-field icon="alternate_email">
        <q-input type='email' clearable v-model="objCliente[0].emailClienteF" float-label="E-mail" />
      </q-field>
      <q-field icon="description">
        <q-input type='textarea' clearable v-model="objCliente[0].obsClienteF" float-label="Observações" />
      </q-field>
      <div align=center>
          <p><br><q-btn rounded color=primary icon='save' @click='salvarCliente' >Salvar</q-btn>
          <q-btn rounded color=primary icon='delete' @click='clearAll' >Limpar</q-btn>
              </p>         
          </div>
    </div>
    
  </q-page>
</template>

<script>
import AwesomeMask from "awesome-mask";
export default {
  data() {
    return {
      objCliente: [
        {
          tipo: "PF",
          nomeClienteF: "",
          cpfClienteF: "",
          enderecoClienteF: "",
          telefoneClienteF: "",
          emailClienteF: "",
          obsClienteF: ""
        }
      ]
    };
  },
  methods: {
    clearAll() {
      (this.objCliente[0].nomeClienteF = ""),
        (this.objCliente[0].cpfClienteF = ""),
        (this.objCliente[0].enderecoClienteF = ""),
        (this.objCliente[0].telefoneClienteF = ""),
        (this.objCliente[0].emailClienteF = ""),
        (this.objCliente[0].obsClienteF = "");
    },
    salvarCliente() {
      this.$clientes.push(this.objCliente[0]);
      console.log(this.objCliente[0]);
      console.log(this.$clientes);
      //   this.$q.localStorage.set(listaClientes, this.$clientes);
    }
  },
  directives: {
    mask: AwesomeMask
  }
};
</script>

<style>
</style>
