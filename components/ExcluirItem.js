export const ExcluirItem = {
    render: () => {
        return `
        <div class="screen excluirItem"> 
            <label>Motivo da Exclusão:</label>
            <textarea required rows="6"></textarea>
        </div>
        <div class="modal-button"> 
            <button id="confirmarExclusao" class="botao">
                Confirmar
            </button>
        </div>
        `
    }
}