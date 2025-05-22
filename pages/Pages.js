import { LayoutComponent } from '../components/LayoutComponent.js';
import { DashboardComponent } from '../components/DashboardComponent.js';
import { EstoqueComponent } from '../components/EstoqueComponent.js';
import { ComprasComponent } from '../components/ComprasComponent.js';
import { BensComponent } from '../components/BensComponent.js';
import { MovimentoDiaComponente } from '../components/MovimentoDiaComponente.js';


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
export const MovimentoDiaPage = {
  render: () => {
    return LayoutComponent.render(MovimentoDiaComponente.render(), "Movimento Dia 19/10/2022");
  }
};
