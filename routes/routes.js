import { BensPage, CadastroBemPage, CadastroEPIPage, CadastroMedicamentoPage, ComprasPage, DashboardPage, EstoquePage, MovimentosPage } from "../pages/Pages.js";


export const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/estoque", component: EstoquePage },
  { path: "/bens", component: BensPage },
  { path: "/movimentos", component: MovimentosPage },
  { path: "/compras", component: ComprasPage },
  { path: "/cadastro-medicamento", component: CadastroMedicamentoPage},
  { path: "/cadastro-bem", component: CadastroBemPage},
  { path: "/cadastro-epi", component: CadastroEPIPage},
  
];
