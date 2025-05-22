import { MovimentoDiaComponente } from "../components/MovimentoDiaComponente.js";
import { BensPage, ComprasPage, DashboardPage, EstoquePage, MovimentoDiaPage, MovimentosPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentosPage },
  { path: "/compras", component: ComprasPage },
  { path: "/movimento-dia", component: MovimentoDiaPage },
];
