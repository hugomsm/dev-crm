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
        <q-btn color=orange to='/clientes/cadastropj'>CADASTRAR EMPRESA (PESSOA JURÍDICA)</q-btn>
      </div>
      <br>
      <div>
        <q-btn color=primary to='/clientes/listaclientes'>LISTA DE CLIENTES</q-btn>
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
