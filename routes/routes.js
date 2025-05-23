import { LoginComponent } from "../components/LoginComponent.js";
import { BensPage, ComprasPage, DashboardPage, EstoquePage, MovimentoDiaPage, NovaCompraPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: LoginComponent },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentoDiaPage },
  { path: "/compras", component: ComprasPage },
  { path: "/nova-compra", component: NovaCompraPage },
];
