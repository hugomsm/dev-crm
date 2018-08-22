export default ({ Vue }) => {
  var $fornecedores = [];

  new Vue({ data: { fornecedores: $fornecedores } });

  Vue.prototype.$fornecedores = $fornecedores;
};
