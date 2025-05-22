import { LoginComponent } from "../components/LoginComponent.js";
import { BensPage, ComprasPage, DashboardPage, EstoquePage, MovimentosPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: LoginComponent },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentosPage },
  { path: "/compras", component: ComprasPage },
];
