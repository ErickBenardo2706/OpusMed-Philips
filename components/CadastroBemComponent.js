import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';

export const CadastroBemComponent = {
    render: () => {
        return `
         <div class="screen">
            <div class="filtro">
                ${InputComponent.render({type: "text", placeholder: "Patrimônio:"})}
                <div class="linha-baixo">
                    ${InputComponent.render({type: "text", placeholder: "Valor unitário:"})}
                    ${InputComponent.render({type: "text", placeholder: "Lote:"})}
                    ${InputComponent.render({type: "text", placeholder: "Quantidade:"})}
                    <input type="text" placeholder="Data Compra:" onfocus="(this.type='date')" onblur="(this.type='text') name="data" class="date_input">  
                    <input type="text" placeholder="Data Fabricação:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                </div>
                <div class="bt"> 
                    ${ButtonComponent.render({label: "Adicionar"})}
                </div>
            </div>
        </div>


        <div class="list_of_information">
            <table>
                <tr class="header">
                    <th>Item</th>
                    <th>Valor Unitário</th>
                    <th>Lote</th>
                    <th>Quantidade</th>
                    <th>Data da Compra</th>
                    <th>Data da Fabricação</th>
                    <th>. . .</th>
                </tr>

                <tr class="lines">
                    <td>Maca</td>
                    <td>R$2000</td>
                    <td>5E35687</td>
                    <td>500</td>
                    <td>29/12/2025</td>
                    <td>29/12/2025</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                <tr class="lines">
                     <td>Maca</td>
                    <td>R$2000</td>
                    <td>5E35687</td>
                    <td>500</td>
                    <td>29/12/2025</td>
                    <td>29/12/2025</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                <tr class="lines">
                     <td>Maca</td>
                    <td>R$2000</td>
                    <td>5E35687</td>
                    <td>500</td>
                    <td>29/12/2025</td>
                    <td>29/12/2025</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>
            
            </table>
            
        </div>
        <div class="bt_confirmar">
            ${ButtonComponent.render({label: "Confirmar Produto"})}
        </div>
        `
    }
}