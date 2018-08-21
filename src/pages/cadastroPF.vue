<template>
  <q-page padding>
    <div class='q-title' align='center'>CADASTRO DE PESSOA FÍSICA</div>
    <div>
      <q-field icon="face">
        <q-input clearable="true" v-model="nomeClienteF" float-label="Nome do cliente" />
      </q-field>
      <q-field icon="fingerprint">
        <q-input type='number' v-model="cpfClienteF" float-label="CPF do cliente" />
      </q-field>
      <q-field icon="place">
        <q-input type='textarea' clearable="true" v-model="enderecoClienteF" float-label="Endereço do cliente" />
      </q-field>
      <q-field icon="phone">
        <q-input type='tel' v-model="telefoneClienteF" float-label="Telefone do cliente" />
      </q-field>
      <q-field icon="alternate_email">
        <q-input type='email' clearable="true" v-model="emailClienteF" float-label="E-mail do cliente" />
      </q-field>
      <q-field icon="description">
        <q-input type='textarea' clearable="true" v-model="obsClienteF" float-label="Observações" />
      </q-field>
    </div>
  </q-page>
</template>

<script>
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
  }
};
</script>

<style>
</style>
