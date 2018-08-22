export default ({ Vue }) => {
  var $produtos = [];

  new Vue({ data: { produtos: $produtos } });

  Vue.prototype.$produtos = $produtos;
};
