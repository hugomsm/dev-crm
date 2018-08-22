<template>
  <q-page padding>
    <div class='q-title' align='center'><q-btn round     color=primary icon='arrow_back' to='/produtos'></q-btn>&ensp;CADASTRO DE PRODUTOS</div>
    
    <div>
      <q-field icon="category">
        <q-input clearable v-model="objProduto[0].nomeProduto" float-label="Nome do Produto" />
      </q-field>
             <q-field icon="blur_on">
        <q-input clearable v-model="objProduto[0].codigoProduto" float-label="Código" />
      </q-field>
      <br>
       <q-field
        icon="local_shipping"
      >
        <q-select
        float-label="Fornecedor"
        filter
        v-model="objProduto.fornecedorProduto"
        :options="optionsFornecedor"
      />
       </q-field>
    <q-field icon="iso">
        <q-input type='number' clearable v-model="objProduto[0].quantidadeProduto" float-label="Quantidade" />  
      </q-field>
      <br>
       <q-field
       class='unidade'
        icon="grain"
      >
       <q-select
       float-label="Unidade"
        v-model="objProduto.unidadeProduto"
        :options="optionsUnidade"
      />   
       </q-field>
        <q-field icon="description">
        <q-input type='textarea' clearable v-model="objProduto[0].descProduto" float-label="Descrição do produto" />
      </q-field>
      <div align=center>
          <p><br><q-btn size='la' rounded color=primary icon='save' @click='salvarProduto' >Salvar</q-btn>
           &ensp;<q-btn size='la' rounded color=primary icon='delete' @click='confirm.handler()' >Limpar</q-btn>
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
      objProduto: [
        {
          tipo: "PRODUTO",
          nomeProduto: "",
          codigoProduto: "",
          fornecedorProduto: "",
          quantidadeProduto: null,
          unidadeProduto: "",
          descProduto: ""
        }
      ],
      optionsUnidade: [
        {
          label: "km",
          value: "km"
        },
        {
          label: "m",
          value: "m"
        },
        {
          label: "cm",
          value: "cm"
        },
        {
          label: "mm",
          value: "mm"
        },
        {
          label: "l",
          value: "l"
        },
        {
          label: "ml",
          value: "ml"
        },
        {
          label: "ton",
          value: "ton"
        },
        {
          label: "kg",
          value: "kg"
        },
        {
          label: "g",
          value: "g"
        },
        {
          label: "mg",
          value: "mg"
        }
      ],
      optionsFornecedor: [],
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
  mounted() {
    for (let i = 0; i < this.$fornecedores.length; i++) {
      let c = { label: "", value: "" };
      console.log(c);
      c.label = this.$fornecedores[i].nomeEmpresaJ;
      c.value = this.$fornecedores[i].nomeEmpresaJ;
      console.log(c);
      console.log(this.optionsUnidade);
      this.optionsFornecedor.push(c);
    }
  },
  methods: {
    clearAll() {
      (this.objProduto[0].nomeProdutoF = ""),
        (this.objProduto[0].cpfProdutoF = ""),
        (this.objProduto[0].enderecoProdutoF = ""),
        (this.objProduto[0].telefoneProdutoF = ""),
        (this.objProduto[0].emailProdutoF = ""),
        (this.objProduto[0].obsProdutoF = "");
    },
    salvarProduto() {
      try {
        this.$clientes.push(this.objProduto[0]);
        this.$q.notify({
          message: "Produto cadastrado com sucesso!",
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
      // console.log(this.objProduto[0]);
      // console.log(this.$clientes);
      //   this.$q.localStorage.set(listaProdutos, this.$clientes);
    }
  },
  directives: {
    mask: AwesomeMask
  }
};
</script>

<style>
.unidade {
  width: 40%;
}
</style>
