import { BensPage, ComprasPage, DashboardPage, EstoquePage, MovimentosPage, NovaCompraPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentosPage },
  { path: "/compras", component: ComprasPage },
  { path: "/nova-compra", component: NovaCompraPage },
];
