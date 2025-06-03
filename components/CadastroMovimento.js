import { ButtonComponent } from './ButtonComponent.js';
import { url } from '../JS/lib.js';
import { InputComponent } from './InputComponent.js';
import { ModalBaseComponent } from "./ModalBaseComponent.js";
import { updateScreen } from '../JS/framework.js';
import { formatData } from '../JS/helper.js';


let produto = {}

let codigoBarras
let nomeProduto
let nomeColaborador = "Hisabela Campos"
let quantidadeSaida
let horarioSaida
let data = dayjs().format('YYYY-MM-DD')


export const CadastroMovimento = {
    render: () => {

        function getDatabase(cdBarras){
            fetch(`${url}/patrimonios/${cdBarras}`)
            .then(response => response.json())
            .then(data => outDataBase(data))
        }

        function outDataBase(data){
            produto = data[0]
            if(produto){
                codigoBarras = produto.CODIGO_BARRAS
                nomeProduto = produto.NOME
                
                document.getElementById("modal-criar-movimento").innerHTML = ModalBaseComponent.render({
                    id: "criar-movimento",
                    title: "Criar movimento",
                    component: CadastroMovimento.render()
                })
            }
        }
        
        function addMovimento() {
            fetch(`${url}/movimentos`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nomeColaborador: "Hisabela Campos",
                    codigoBarras,
                    data,
                    horarioSaida: dayjs(`${data}T${horarioSaida}`).format("YYYY-MM-DDTHH:mm"),
                    quantidadeSaida,
                })

            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                updateScreen()
            }) 
        }

            setTimeout(() => {
                const codigoDeBarrasInput = document.getElementById("codigoDeBarrasMovimento");
                if (codigoDeBarrasInput) {
                    codigoDeBarrasInput.value = codigoBarras ?? ""
                    codigoDeBarrasInput.onchange = (e) => {
                        codigoBarras = e.target.value
                        getDatabase(codigoBarras)
                    }
                };

                const nomeProdutoInput = document.getElementById("nomeProdutoMovimento");
                if (nomeProdutoInput) {
                    nomeProdutoInput.value = nomeProduto ?? ""
                    nomeProdutoInput.onchange = (e) => nomeProduto = e.target.value
                };
                const horarioSaidaInput = document.getElementById("horarioSaida");
                if (horarioSaidaInput) {
                    horarioSaidaInput.value = horarioSaida ?? ""
                    horarioSaidaInput.onchange = (e) => {horarioSaida = e.target.value 
                        console.log(dayjs(`${data}T${horarioSaida}`).format("YYYY-MM-DDTHH:mm"))}
                };
                const quantidadeSaidaInput = document.getElementById("quantidadeSaida");
                if (quantidadeSaidaInput) {
                    quantidadeSaidaInput.value = quantidadeSaida ?? ""
                    quantidadeSaidaInput.onchange = (e) => quantidadeSaida = e.target.value
                };
                // const nomeColaboradorInput = document.getElementById("nomeColaborador");
                // if (nomeColaboradorInput) {
                //     nomeColaboradorInput.value = nomeColaborador ?? ""
                //     nomeColaboradorInput.onchange = (e) => nomeColaborador = e.target.value
                // };

            }, 0);

        return `
        <div class="screen">
            <div class="filtro">
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "codigoDeBarrasMovimento", type: "number", placeholder: "Código de barra:" })}
                    ${InputComponent.render({ id: "nomeProdutoMovimento", type: "text", placeholder: "Nome produto:" , disabled: true})}
                </div>
                <div class="linha-baixo"> 
                    <label>Quantidade</label>
                    <label>Horário</label>
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "quantidadeSaida", type: "number", placeholder: "Quantidade saída:" })}
                    ${InputComponent.render({ id: "horarioSaida", type: "time", placeholder: "Horário saída:" })}
                </div>
            </div>
        </div>
        <div class="modal-button">
            ${ButtonComponent.render({
            id: "confirmarAdicionarMovimento",
            label: "Criar",
            funcao: addMovimento
        })}
        </div>
                    `
    }
}


// <input type="text" placeholder="Última manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
// ${InputComponent.render({type: "text", placeholder: "Marca:"})}