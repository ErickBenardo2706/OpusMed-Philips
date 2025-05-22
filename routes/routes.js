import { BensPage, CadastroPage, ComprasPage, DashboardPage, EstoquePage, MovimentosPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentosPage },
  { path: "/compras", component: ComprasPage },
  { path: "/cadastro-medicamento", component: CadastroPage},
  
];
