import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';
export const CadastroComponent = {
    render: () => {
        return `
        <div class="screen">
            <div class="filtro">
                <div class="linha-baixo">
                ${InputComponent.render({type: "text", placeholder: "Código de barra:"})}
                ${InputComponent.render({type: "text", placeholder: "Nome:"})}
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({type: "text", placeholder: "Mg:"})}
                    ${InputComponent.render({type: "text", placeholder: "Tarja:"})}
                    ${InputComponent.render({type: "text", placeholder: "Lote:"})}
                    ${InputComponent.render({type: "text", placeholder: "Quantidade:"})}
                    ${InputComponent.render({type: "text", placeholder: "Fornecedor:"})} 
                </div>
                <div class="linha-baixo">   
                    ${InputComponent.render({type: "text", placeholder: "Valor unitário:"})} 
                    <input type="text" placeholder="Data Validade:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                    <input type="text" placeholder="Data Fabricação:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                    <input type="text" placeholder="Última manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                    <input type="text" placeholder="Próxima manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">  
                </div>
                <div class="bt"> 
                    ${ButtonComponent.render({label: "Adicionar"})}
                </div>
            </div>
        </div>
        `
    }
}