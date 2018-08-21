<template>
  <q-page padding>
    <div class='q-title' align='center'><q-btn round     color=primary icon='arrow_back' to='/clientes'></q-btn>CADASTRO DE PESSOA FÍSICA</div>
    
    <div>
      <q-field icon="face">
        <q-input clearable="true" v-model="nomeClienteF" float-label="Nome do cliente" />
      </q-field>
      <q-field icon="fingerprint">
        <q-input type='text' v-model="cpfClienteF" v-mask="'999.999.999-99'" float-label="CPF do cliente" />
      </q-field>
      <q-field icon="place">
        <q-input type='textarea' clearable="true" v-model="enderecoClienteF" float-label="Endereço do cliente" />
      </q-field>
      <q-field icon="phone">
        <q-input type='tel' v-model="telefoneClienteF" v-mask="'(99) 99999-9999'" float-label="Telefone do cliente" />
      </q-field>
      <q-field icon="alternate_email">
        <q-input type='email' clearable="true" v-mask="'999.999.999-99'" v-model="emailClienteF" float-label="E-mail do cliente" />
      </q-field>
      <q-field icon="description">
        <q-input type='textarea' clearable="true" v-model="obsClienteF" float-label="Observações" />
      </q-field>
      <div align=center>
          <p><br><q-btn rounded color=primary icon='save' >Salvar</q-btn>
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
      nomeClienteF: "",
      cpfClienteF: "",
      enderecoClienteF: "",
      telefoneClienteF: "",
      emailClienteF: "",
      obsClienteF: ""
    };
  },
  methods: {
    clearAll() {
      (this.nomeClienteF = ""),
        (this.cpfClienteF = ""),
        (this.enderecoClienteF = ""),
        (this.telefoneClienteF = ""),
        (this.emailClienteF = ""),
        (this.obsClienteF = "");
    }
  },
  directives: {
    mask: AwesomeMask
  }
};
</script>

<style>
</style>
