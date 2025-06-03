import { updateScreen } from '../JS/framework.js';
import { url } from '../JS/lib.js';
import { ButtonComponent } from './ButtonComponent.js';

export const AtualizarManutencaoComponent = {
    render: (patrimonio) => {
        let novaManutencao

        function atualizarManutencao() {
            fetch(`${url}/patrimonios/${Number(patrimonio.CODIGO_BARRAS)}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ultimaManutencao: dayjs(novaManutencao).format('YYYY-MM-DD')
                })

            })
            .then(response => response.json())
            .then(data => {
                console.log(novaManutencao)
                updateScreen()
            }) 
        }

        setTimeout(() => {
            const novaManutencaoInput = document.getElementById("novaManutencao");
            if (novaManutencaoInput) novaManutencaoInput.onchange = (e) => {
                novaManutencao = e.target.value
                console.log(novaManutencao)
            };
        }, 0);

        return `
            <div class="screen">
                <div class="linha-baixo">   
                    <label>Última</label>
                    <label>Nova</label>
                </div>
                <div class="linha-baixo">   
                    <input id="ultima-manitencao" type="text" disabled class="date_input">
                    <input id="novaManutencao" type="date"name="data" class="date_input">
                </div>
            </div>
            
        <div class="modal-button">
            ${ButtonComponent.render({
                id: "atualizar-manutencao-button",
                label: "Confirmar",
                funcao: atualizarManutencao
            })}
        </div>
        `
    }
}