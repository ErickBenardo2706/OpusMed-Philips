import { ButtonComponent } from "./ButtonComponent.js";
import { ButtonDeleteComponent } from "./ButtonDeleteComponente.js";
import { TableComponent } from "./TableComponent.js";

export const NovaCompraComponent = {
    render: () => {
      const list = TableComponent.render(
              {
                  id: 1,
                  items: [
                      {
                          Forncedor: "Fornecedor",
                          Produto: "Produto",
                          quantidade: "Quantidade",
                          acao: " ",
                    },
                      {
                          Forncedor: "Fornecedor A",
                          Produto: "Produto A",
                          quantidade: "96 Caixas",
                          acao: ButtonDeleteComponent.render(),
                      },
                       {
                          Forncedor: "Fornecedor A",
                          Produto: "Produto B",
                          quantidade: "24 Caixas",
                          acao: ButtonDeleteComponent.render(),
                      },
                       {
                          Forncedor: "Fornecedor A",
                          Produto: "Produto C",
                          quantidade: "69 Caixas",
                          acao: ButtonDeleteComponent.render(),
                      },
                       {
                          Forncedor: "Fornecedor A",
                          Produto: "Produto D",
                          quantidade: "11 Caixas",
                          acao: ButtonDeleteComponent.render(),
                      },
                  ]
              }
            )
        return `
      <section>

        <input type="text" placeholder="Fornecedor...">
        <input type="text" placeholder="Produto...">
        <input type="number" placeholder="Quantidade">

        <div class="btAdicionar">
            ${ButtonComponent.render({ label: "Adicionar" })}
        </div>

        <div class="corpo">
            ${list}
        </div>
        
        <div class="btConfirmar">
            ${ButtonComponent.render({ label: "Confirmar Compra" })}
        </div>
      </section>
    `;
    }
};
