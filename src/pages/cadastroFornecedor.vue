<template>
  <q-page padding>
    <div class='q-title' align='center'> <q-btn round   absolute-top-left  color=primary icon='arrow_back' to='/fornecedores'></q-btn> &ensp;CADASTRO DE FORNECEDOR</div>
    <div>
      <q-field icon="work">
        <q-input clearable v-model="objFornecedor[0].nomeEmpresaJ" float-label="Razão Social" />
      </q-field>
      <q-field icon="face">
        <q-input clearable v-model="objFornecedor[0].nomeFornecedorJ" float-label="Nome do responsável" />
      </q-field>
      <q-field icon="fingerprint">
        <q-input type='text' clearable v-model="objFornecedor[0].cnpjFornecedorJ" v-mask="'99.999.999/9999-99'" float-label="CNPJ" />
      </q-field>
      <q-field icon="place">
        <q-input type='textarea' clearable v-model="objFornecedor[0].enderecoFornecedorJ" float-label="Endereço do Fornecedor" />
      </q-field>
      <q-field icon="phone">
        <q-input type='tel' clearable v-model="objFornecedor[0].telefoneFornecedorJ" v-mask="'(99) 99999-9999'" float-label="Telefone" />
      </q-field>
      <q-field icon="alternate_email">
        <q-input type='email' clearable v-model="objFornecedor[0].emailFornecedorJ" float-label="E-mail" />
      </q-field>
      <q-field icon="description">
        <q-input type='textarea' clearable v-model="objFornecedor[0].obsFornecedorJ" float-label="Observações" />
      </q-field>
      <div align=center>
          <p><br><q-btn rounded color=primary icon='save' @click='salvarFornecedor' >Salvar</q-btn>
          &ensp;<q-btn rounded color=primary icon='delete' @click='confirm.handler()'>Limpar</q-btn>
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
      objFornecedor: [
        {
          tipo: "FORNECEDOR",
          nomeEmpresaJ: "",
          nomeFornecedorJ: "",
          cnpjFornecedorJ: "",
          enderecoFornecedorJ: "",
          telefoneFornecedorJ: "",
          emailFornecedorJ: "",
          obsFornecedorJ: ""
        }
      ],
      confirm: {
        label: "Confirmar",
        icon: "warning",
        handler: () => {
          this.$q
            .dialog({
              title: "Confirmar",
              message: "Tem certeza que deseja limpar?",
              ok: "Sim",
              cancel: "Não"
            })
            .then(() => {
              this.clearAll();
            })
            .catch(() => {});
        }
      }
    };
  },
  methods: {
    clearAll() {
      (this.objFornecedor[0].nomeEmpresaJ = ""),
        (this.objFornecedor[0].nomeFornecedorJ = ""),
        (this.objFornecedor[0].cnpjFornecedorJ = ""),
        (this.objFornecedor[0].enderecoFornecedorJ = ""),
        (this.objFornecedor[0].telefoneFornecedorJ = ""),
        (this.objFornecedor[0].emailFornecedorJ = ""),
        (this.objFornecedor[0].obsFornecedorJ = "");
    },
    salvarFornecedor() {
      try {
        this.$fornecedores.push(this.objFornecedor[0]);
        this.$q.notify({
          message: "Fornecedor cadastrado com sucesso!",
          timeout: 2000,
          type: "positive",
          color: "positive",
          textColor: "black",
          icon: "thumb_up",
          position: "center"
        });
      } catch {
      } finally {
      }
      //   this.$q.localStorage.set(listaFornecedor, this.$fornecedores);
    }
  },
  directives: {
    mask: AwesomeMask
  }
};
</script>
<style>
</style>
