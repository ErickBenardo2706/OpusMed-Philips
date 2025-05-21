import { ButtonComponent } from './ButtonComponent.js';

export const CadastroMedicamentoComponent = {
    render: () => {
        return `
        <div class="screen">
            <div class="filtro">
                <input type="text" placeholder="Medicamento:" name="medicamento_input" class="medicamento_input">

                <div class="linha-baixo">
                    <input type="text" placeholder="Mg:" name="mg_input" class="mg_input">
                    <input type="text" placeholder="Tarja:" name="tarja" class="tarja_input">
                    <input type="text" placeholder="Lote: " name="lote" class="lote_input">
                    <input type="text" placeholder="Quantidade:" name="quantidade" class="quantidade_input">
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