export default ({ Vue }) => {
  var $clientes = [];
  
  new Vue({data:{ clientes: $clientes }});
  
  Vue.prototype.$clientes = $clientes;
};
