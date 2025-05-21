import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';
export const CadastroMedicamentoComponent = {
    render: () => {
        return `
        <div class="screen">
            <div class="filtro">
                ${InputComponent.render({type: "text", placeholder: "Medicamento:"})}

                <div class="linha-baixo">
                    ${InputComponent.render({type: "text", placeholder: "Mg:"})}
                    ${InputComponent.render({type: "text", placeholder: "Tarja:"})}
                    ${InputComponent.render({type: "text", placeholder: "Lote:"})}
                    ${InputComponent.render({type: "text", placeholder: "Quantidade:"})}
                    <input type="text" placeholder="Data Compra:" onfocus="(this.type='date')" onblur="(this.type='text') name="data" class="date_input">  
                </div>
                <div class="bt"> 
                    ${ButtonComponent.render({label: "Adicionar"})}
                </div>
            </div>
        </div>


        <div class="list_of_information">
            <table>
                <tr class="header">
                    <th>Medicamento</th>
                    <th>MG</th>
                    <th>Tarja</th>
                    <th>Lote</th>
                    <th>Quantidade</th>
                    <th>. . .</th>
                </tr>

                <tr class="lines">
                    <td>ibuprofeno</td>
                    <td>200mg</td>
                    <td id="red">V</td>
                    <td>5E35687</td>
                    <td>30 caixas</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                  <tr class="lines">
                    <td>ibuprofeno</td>
                    <td>200mg</td>
                    <td id="red">V</td>
                    <td>5E35687</td>
                    <td>30 caixas</td>
                    <td><img src="assets/trash.svg" alt="Icone de lata de lixo" id="trash"></td>
                </tr>

                  <tr class="lines">
                    <td>ibuprofeno</td>
                    <td>200mg</td>
                    <td id="red">V</td>
                    <td>5E35687</td>
                    <td>30 caixas</td>
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