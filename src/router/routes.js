const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "produtos",
        component: () => import("pages/produtos")
      },
      {
        path: "orcamento",
        component: () => import("pages/orcamento")
      },
      {
        path: "fornecedores",
        component: () => import("pages/fornecedores")
      },
      {
        path: "produtos",
        component: () => import("pages/produtos")
      },
      {
        path: "produtos/cadastroproduto",
        component: () => import("pages/cadastroProduto.vue")
      },
      {
        path: "fornecedores/listaFornecedores",
        component: () => import("pages/listaFornecedores.vue")
      },
      {
        path: "fornecedores/cadastroFornecedor",
        component: () => import("pages/cadastroFornecedor.vue")
      },
      {
        path: "clientes",
        component: () => import("pages/clientes")
      },
      {
        path: "clientes/cadastroPF",
        component: () => import("pages/cadastroPF.vue")
      },
      {
        path: "clientes/cadastroPJ",
        component: () => import("pages/cadastroPJ.vue")
      },
      {
        path: "clientes/listaClientesJ",
        component: () => import("pages/listaClientesJ.vue")
      },
      {
        path: "clientes/listaClientesF",
        component: () => import("pages/listaClientesF.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
