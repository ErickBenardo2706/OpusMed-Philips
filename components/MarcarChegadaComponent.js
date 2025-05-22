import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';
export const MarcarChegadaComponent = {
    render: () => {
        return `
        <div class="screen">
            <div class="linha-baixo">   
                ${InputComponent.render({ type: "text", placeholder: "Quantidade de chegada" })}
                ${InputComponent.render({ type: "text", placeholder: "Horário de chegada" })} 
                </div>
                <div class="modal-button"> 
                    ${ButtonComponent.render({ id: "adasd", label: "Confirmar chegada" })}
                </div>
            </div>
        </div>
        `
    }
}