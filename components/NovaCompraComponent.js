import { ButtonComponent } from "./ButtonComponent.js";
import { ButtonDeleteComponent } from "./ButtonDeleteComponente.js";
import { checkBoxComponent, InputComponent } from "./InputComponent.js";
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

        <div class="inputFornecedor">
            ${InputComponent.render({ type: "text", placeholder: "Fornecedor:" })}
        </div>

        <div class="inputProduto">
            ${InputComponent.render({ type: "text", placeholder: "Produto:" })}
        </div>

        <div class="containerCompra">
            <div class="inputQuantidade">
                ${InputComponent.render({ type: "number", placeholder: "Quantidade:" })}
            </div>
            <div class="checkBox">
                ${checkBoxComponent.render({ type: "checkbox" })}
            </div>
        </div>

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
