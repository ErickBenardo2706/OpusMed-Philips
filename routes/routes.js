import { BensPage, ComprasPage, DashboardPage, EstoquePage, MovimentoDiaPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentoDiaPage },
  { path: "/compras", component: ComprasPage },
];
