import { ConfirmDelete } from '../JS/button.js';
import { ButtonComponent } from './ButtonComponent.js';

export const ExcluirItem = {
    render: () => {
        return `
        <div class="screen excluirItem"> 
            <label>Motivo da Exclusão:</label>
            <textarea rows="6"></textarea>
        </div>
        <div class="modal-button"> 
            ${ButtonComponent.render({ id: "confirmar-exclusao", label: "Confirmar Exclusão", funcao: ConfirmDelete })}
        </div>
        `
    }
}