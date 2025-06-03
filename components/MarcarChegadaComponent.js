import { updateScreen } from '../JS/framework.js';
import { url } from '../JS/lib.js';
import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';

let data = dayjs().format('YYYY-MM-DD')

export const MarcarChegadaComponent = {
    render: (movimento) => {
        let quantidadeEntrada = movimento
        let horaChegada

        function marcarChegada() {  
            console.log(quantidadeEntrada)
            fetch(`${url}/movimentos/${movimento.ID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: movimento.id,
                    quantidadeEntrada,
                    horarioEntrada: dayjs(`${data}T${horaChegada}`).format("YYYY-MM-DDTHH:mm")
                })

            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    updateScreen()
                })
        }

        setTimeout(() => {
            const marcarChegadaButton = document.getElementById("marcar-chegada-button");
            if (marcarChegadaButton) marcarChegadaButton.addEventListener('click', marcarChegada);

            const quantidadeChegadaInput = document.getElementById("quantidadeChegada");
            if (quantidadeChegadaInput) quantidadeChegadaInput.onchange = (e) => quantidadeEntrada = e.target.value;

            const horaChegadaInput = document.getElementById("horaChegada");
            if (horaChegadaInput) horaChegadaInput.onchange = (e) => horaChegada = e.target.value;
        }, 0);

        return `
            <div class="screen">
                <div class="linha-baixo">   
                    <label>Quantidade</label>
                    <label>Horário</label>
                </div>
                <div class="linha-baixo">   
                    ${InputComponent.render({ id: "quantidadeChegada", type: "number", placeholder: "-" })}
                    ${InputComponent.render({ id: "horaChegada", type: "time", placeholder: "Horário de chegada" })} 
                </div>
            </div>
            
        <div class="modal-button">
            ${ButtonComponent.render({
                id: "marcar-chegada-button",
                label: "Confirmar",
                funcao: marcarChegada
            })}
        </div>
        `
    }
}