import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';

export const CadastroEPIComponent = {
    render: () => {
        return `
         <div class="screen">
            <div class="filtro">
                ${InputComponent.render({type: "text", placeholder: "EPI:"})}
                <div class="linha-baixo">
                    ${InputComponent.render({type: "text", placeholder: "Lote:"})}
                    <input type="text" placeholder="Data Compra:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                    <input type="text" placeholder="Data Validade:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
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
                    <th>Lote</th>
                    <th>Data da Compra</th>
                    <th>Data da Validade</th>
                    <th>. . .</th>
                </tr>

                <tr class="lines">
                    <td>Luva</td>
                    <td>5E35687</td>
                    <td>29/12/2025</td>
                    <td>29/12/2025</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                <tr class="lines">
                    <td>Luva</td>
                    <td>5E35687</td>
                    <td>29/12/2025</td>
                    <td>29/12/2025</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                <tr class="lines">
                    <td>Luva</td>
                    <td>5E35687</td>
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