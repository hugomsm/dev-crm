<template>
  <q-page padding>
    <router-view></router-view>
    <div class='q-title' align='center'>CLIENTES</div>
    <div>
      <q-btn to='/clientes/cadastropf'>CADASTRAR PESSOA FÍSICA</q-btn>
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
      emailClienteF: ""
    };
  }
};
</script>

<style>
</style>
