<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-tabs align='justify'>
        <q-route-tab default slot="title" to='/' exact name="tab-1" icon="home" label='Home' />
        <q-route-tab slot="title" to='/produtos' exact name="tab-2" icon="shopping_cart" label='Produtos' />
        <q-route-tab slot="title" to='/clientes' exact name="tab-3" icon="account_box" label='Clientes' />
        <q-route-tab slot="title" to='/orcamento' exact name="tab-4" icon="attach_money" label='Orçamento' />
  
  
      </q-tabs>
  
      <!-- <q-toolbar
              color="primary"
              >
              <q-btn
                flat
                dense
                round
                @click="leftDrawerOpen = !leftDrawerOpen"
                aria-label="Menu"
              >
                <q-icon name="menu" />
              </q-btn>
      
              <q-toolbar-title>
                CRM
                <div slot="subtitle">Gerenciamento de orçamentos</div>
              </q-toolbar-title>
            </q-toolbar> -->
    </q-layout-header>
  
    <!-- <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>
          <q-item @click.native="openURL('http://quasar-framework.org')">
            <q-item-side icon="school" />
            <q-item-main label="Docs" sublabel="quasar-framework.org" />
          </q-item>
          <q-item @click.native="openURL('https://github.com/quasarframework/')">
            <q-item-side icon="code" />
            <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
          </q-item>
          <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
            <q-item-side icon="chat" />
            <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
          </q-item>
          <q-item @click.native="openURL('http://forum.quasar-framework.org')">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
          </q-item>
          <q-item @click.native="openURL('https://twitter.com/quasarframework')">
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework" />
          </q-item>
        </q-list>
      </q-layout-drawer> -->
  
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
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
</style>
