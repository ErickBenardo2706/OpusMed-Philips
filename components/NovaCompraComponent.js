import { ButtonComponent } from "./ButtonComponent.js";
import { ButtonDeleteComponent } from "./ButtonDeleteComponente.js";
import { checkBoxComponent, InputComponent } from "./InputComponent.js";
import { ListaCompraComponent } from "./ListaCompraComponent.js";

export const NovaCompraComponent = {
    render: () => {
        let detalhes = [{ id: 0, produto: "", quantidade: 0 }]

        function onAddProduct() {
            const novoDetalhe = [
                ...detalhes,
                { id: detalhes.length, produto: "", quantidade: 0 }
            ]

            detalhes = novoDetalhe;
            console.log(detalhes)
        }

        function onRemoveProduct(id) {
            let index = 0;
            const detalheAtualizado = [];
            for (const detalhe of detalhes) {
                if (detalhe.id != id) {
                    detalheAtualizado.push({ id: index, produto: detalhe.detalhes })
                    index ++
                } 
            }

            detalhes = detalheAtualizado;
            console.log(detalhes)
        }

        const list = {colunas: ["Produto", "Quantidade"],items: detalhes}
        return `
            <div class="table-component">
                <table>
                    <tr>
                        ${list.colunas.map((content) => {
                            return `
                                <th>${content}</th>
                            `;
                        }).join('')}
                    </tr>
                    ${list.items.map((content) => {
                        return `
                            <tr>
                                ${Object.keys(content).map((key) => {
                                    if (key == "produto")
                                        return `<td>
                                                    <input type="text" value="${content.produto}"
                                                </td>
                                        `

                                }).join('')}
                                ${ButtonDeleteComponent.render({ id:"delete-button", label: "remover", funcao: onRemoveProduct})}
                            </tr>
                        `;
                    }).join('')}
                </table>
            </div>
            ${ButtonComponent.render({ id:"add-button", label: "Adicionar", funcao: onAddProduct})}
        `;
    }
};
        // <section>
  
        //   <div class="inputFornecedor">
        //       ${InputComponent.render({ type: "text", placeholder: "Fornecedor:" })}
        //   </div>
  
        //   <div class="inputProduto">
        //       ${InputComponent.render({ type: "text", placeholder: "Produto:" })}
        //   </div>
  
        //   <div class="containerCompra">
        //       <div class="inputQuantidade">
        //           ${InputComponent.render({ type: "number", placeholder: "Quantidade:" })}
        //       </div>
        //       <div class="checkBox">
        //           ${checkBoxComponent.render({ type: "checkbox" })}
        //       </div>
        //   </div>
  
        //   <div class="btAdicionar">
            //   ${ButtonComponent.render({ label: "Adicionar" })}
        //   </div>
  
        //   <div class="corpo">
        //       ${list}
        //   </div>
          
        //   <div class="btConfirmar">
        //       ${ButtonComponent.render({ label: "Confirmar Compra" })}
        //   </div>
        // </section>
