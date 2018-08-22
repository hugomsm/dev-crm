<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-tabs align='justify'>
        <q-route-tab default slot="title" to='/' exact name="tab-1" icon="home" label="Início"/>
        <q-route-tab slot="title" to='/fornecedores' exact name="tab-2" icon="local_shipping" label='Fornecedores' />
        <q-route-tab slot="title" to='/produtos' exact name="tab-3" icon="shopping_cart" label='Produtos' />
        <q-route-tab slot="title" to='/clientes' exact name="tab-4" icon="account_box" label='Clientes' />
        <q-route-tab slot="title" to='/orcamento' exact name="tab-5" icon="attach_money" label='Orçamento' />
  
  
      </q-tabs>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {};
  },
  methods: {
    openURL
  }
};
</script>

<style>
</style>
