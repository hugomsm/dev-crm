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
        path: "clientes",
        component: () => import("pages/clientes")
      },
      {
        path: "clientes/cadastroPF",
        component: () => import("pages/cadastroPF.vue")
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
