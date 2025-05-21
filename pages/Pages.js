import { LayoutComponent } from '../components/LayoutComponent.js';
import { DashboardComponent } from '../components/DashboardComponent.js';
import { EstoqueComponent } from '../components/EstoqueComponent.js';
import { ComprasComponent } from '../components/ComprasComponent.js';
import { BensComponent } from '../components/BensComponent.js';
import { CadastroMedicamentoComponent} from '../components/CadastroMedicamentoComponent.js';
import { CadastroBemComponent } from '../components/CadastroBemComponent.js';
import { CadastroEPIComponent } from '../components/CadastroEPIComponent.js';


export const LoginPage = {
  render: () => {
    return LayoutComponent.render(DashboardComponent.render(), "Login");
  }
};
export const DashboardPage = {
  render: () => {
    return LayoutComponent.render(DashboardComponent.render(), "Dashboard");
  }
};
export const EstoquePage = {
  render: () => {
    return LayoutComponent.render(EstoqueComponent.render(), "Estoque");
  }
};
export const BensPage = {
  render: () => {
    return LayoutComponent.render(BensComponent.render(), "Bens");
  }
};
export const MovimentosPage = {
  render: () => {
    return LayoutComponent.render(DashboardComponent.render(), "Movimentos");
  }
};
export const ComprasPage = {
  render: () => {
    return LayoutComponent.render(ComprasComponent.render(), "Compras");
  }
};

export const CadastroMedicamentoPage = {
  render: () => {
    return LayoutComponent.render(CadastroMedicamentoComponent.render(), "Cadastrar Medicamento");
  }
};

export const CadastroBemPage = {
  render: () => {
    return LayoutComponent.render(CadastroBemComponent.render(), "Cadastrar Patrimônio");
  }
};

export const CadastroEPIPage = {
  render: () => {
    return LayoutComponent.render(CadastroEPIComponent.render(), "Cadastrar EPI's");
  }
};



