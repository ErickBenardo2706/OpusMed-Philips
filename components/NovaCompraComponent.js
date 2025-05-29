import { updateScreen } from "../JS/framework.js";
import { routes } from "../routes/routes.js";
import { ButtonComponent } from "./ButtonComponent.js";
import { ButtonDeleteComponent } from "./ButtonDeleteComponente.js";
import { checkBoxComponent, InputComponent } from "./InputComponent.js";

export let detalhes = [{ id: 0, produto: "", quantidade: 0 }];
function onAddProduct() {
 const novoDetalhe = [
   ...detalhes,
   { id: detalhes.length, produto: "", quantidade: 0 },
 ];
 detalhes = novoDetalhe;
 updateScreen();
}

function onRemoveProduct(id) {
 let index = 0;
 const detalheAtualizado = [];
 for (const detalhe of detalhes) {
   if (detalhe.id != id) {
     detalheAtualizado.push({
       id: index,
       produto: detalhe.produto,
       quantidade: detalhe.quantidade,
     });
     index++;
   }
 }

 detalhes = detalheAtualizado;
 updateScreen()
}

function handleChangeProduto(event, id){
 const index = detalhes.findIndex((item) => item.id === id);
 const detalheAtualizado = [...detalhes];
 detalheAtualizado[index].produto = event.target.value;
 detalhes = detalheAtualizado;
}

function handleChangeQuantidade(event, id){
 const index = detalhes.findIndex((item) => item.id === id);
 const detalheAtualizado = [...detalhes];
 detalheAtualizado[index].quantidade = event.target.value;
 detalhes = detalheAtualizado;
}

export const NovaCompraComponent = {
 render: (props) => {

   return `
           <section class="nova-compra">
  
            <div class="inputFornecedor">
               ${InputComponent.render({ type: "text", placeholder: "Fornecedor:" })}
            </div>

          <div class="table-component">
            <table>
              ${props.map((content) => {
                return `
                <tr id="object-${content.id}">
                  ${Object.keys(content).map((key) => {
                     setTimeout(() => {
                         const row = document.getElementById(`object-${content.id}`)
                         const el = row.querySelector('input[type="text"]');
                         const nm = row.querySelector('input[type="number"]');

                         if (el && nm) {
                             el.onchange = (e)=>{handleChangeProduto(e, content.id)}
                             nm.onchange = (e)=>{handleChangeQuantidade(e, content.id)}
                             }
                             }, 0);
                         
                      if (key == "produto")
                        return `
                          <td>
                            <input type="text" class="inputProduto inputComponent" placeholder="Produto" value="${content.produto}">
                          </td>
                        `
                      else if (key == "quantidade")
                        return `
                          <td>
                            <input type="number" class="inputQuantidade inputComponent" value="${content.quantidade}">
                          </td>
                        `
                    }).join("")}
                    <td>
                        ${ButtonDeleteComponent.render({
                          id: `delete-button-${content.id}`,
                          label: "remover",
                          funcao: onRemoveProduct,
                          props: content.id,
                        })}
                    </td>
                </tr>
                 `
              }).join("")}
            </table>
         </div>

           <div class="containerCompra">
               <div class="checkBox">
                   ${checkBoxComponent.render({ type: "checkbox" })}
                   <span>Buscar em relatório</span>
               </div>

               ${ButtonComponent.render({
                id: `add-button-${props.id}`,
                label: "Adicionar",
                funcao: onAddProduct,
              })}
           </div>
    
           <div class="btConfirmar">
               ${ButtonComponent.render({ label: "Confirmar Compra" })}
           </div>
         </section>
       `;
 },
};
        
