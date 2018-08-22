<template>
  <div>
    <q-page padding>
      <div class='q-title' align='center'>CLIENTES</div>
      <div align=center>
        <br>
        <div>
          <q-btn color=secondary to='/clientes/cadastropf'>CADASTRAR PESSOA FÍSICA</q-btn>
        </div>
        <br>
        <div>
          <q-btn color=secondary to='/clientes/listaClientesF'>LISTA DE CLIENTES - PESSOA FÍSICA</q-btn>
        </div>
        <br>
        <div>
          <q-btn color=orange to='/clientes/cadastropj'>CADASTRAR EMPRESA</q-btn>
        </div>
        <br>
        <div>
          <q-btn color=orange to='/clientes/listaClientesJ'>LISTA DE CLIENTES - EMPRESAS</q-btn>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
