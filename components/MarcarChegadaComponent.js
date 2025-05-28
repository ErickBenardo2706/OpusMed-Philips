import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';
export const MarcarChegadaComponent = {
    render: () => {
        let quantidadeChegada
        let horaChegada

        function marcarChegada(){
            console.log("a");
        }

        setTimeout(() => {
            const marcarChegadaButton = document.getElementById("marcar-chegada-button");
            if (marcarChegadaButton) marcarChegadaButton.addEventListener('click', marcarChegada);

            const quantidadeChegadaInput = document.getElementById("quantidadeChegada");
            if (quantidadeChegadaInput) quantidadeChegadaInput.onchange = (e) => quantidadeChegada = e.target.value;

            const horaChegadaInput = document.getElementById("horaChegada");
            if (horaChegadaInput) horaChegadaInput.onchange = (e) => horaChegada = e.target.value;
        }, 0);

        return `
            <div class="screen">
                <div class="linha-baixo">   
                    ${InputComponent.render({ id: "quantidadeChegada", type: "number", placeholder: "Quantidade de chegada" })}
                    ${InputComponent.render({ id: "horaChegada", type: "text", placeholder: "Horário de chegada" })} 
                </div>
            </div>
            
        <div class="modal-button">
            <button id="marcar-chegada-button" class="botao">
                Confirmar
            </button>
        </div>
        `
    }
}