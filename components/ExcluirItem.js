import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';
export const ExcluirItem = {
    render: () => {
        return `
        <div class="screen">
            <div class="linha-baixo">   
                <label>Motivo da Exclusão</label>
                ${InputComponent.render({type: "text" })}
            </div>
        </div>
        <div class="modal-button"> 
            ${ButtonComponent.render({ id: "999", label: "Confirmar Exclusão" })}
        </div>
        `
    }
}