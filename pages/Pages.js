import { LayoutComponent } from '../components/LayoutComponent.js';
import { DashboardComponent } from '../components/DashboardComponent.js';
import { EstoqueComponent } from '../components/EstoqueComponent.js';
import { ComprasComponent } from '../components/ComprasComponent.js';
import { BensComponent } from '../components/BensComponent.js';
import { CadastroComponent} from '../components/CadastroComponent.js';

import { detalhes, NovaCompraComponent } from '../components/NovaCompraComponent.js';
import { MovimentoDiaComponente } from '../components/MovimentoDiaComponente.js';
import { MarcarChegadaComponent } from '../components/MarcarChegadaComponent.js';


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
    return LayoutComponent.render(BensComponent.render(), "Patrimônios");
  }
};
export const ComprasPage = {
  render: () => {
    return LayoutComponent.render(ComprasComponent.render(), "Compras");
  }
};
export const NovaCompraPage = {
  render: () => {
    return LayoutComponent.render(NovaCompraComponent.render(detalhes), "Nova Compra");
  }
};

export const MovimentoDiaPage = {
  render: () => {
    return LayoutComponent.render(MovimentoDiaComponente.render(), "Movimentos");
  }
};
