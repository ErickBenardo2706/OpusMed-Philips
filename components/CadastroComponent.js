import { ButtonComponent } from './ButtonComponent.js';
import { url } from '../JS/lib.js';
import { InputComponent } from './InputComponent.js';
import { ModalBaseComponent } from "./ModalBaseComponent.js";


let produto = {}

let codigoBarras
let nomeProduto
let tipoProduto
let mg
let tarja
let quantidade
let valor
let dataValidade
let ultimaManutencao
let dataFabricacao
let setor
let marca

export const CadastroComponent = {
    render: () => {

        function getDatabase(cdBarras){
            fetch(`${url}/patrimonios/${cdBarras}`)
            .then(response => {
                console.log(response)
                response.json()
            })
            .then(data => {
                console.log(data)
                if (data){
                    outDataBase(data);
                }
            })
        }

        function outDataBase(data){
            produto = data[0]
            console.log(produto);
            codigoBarras = produto.CODIGO_BARRAS
            nomeProduto = produto.NOME_PATRIMONIO
            setor = produto.SETOR
            marca = produto.MARCA
            dataFabricacao = produto.DATA_FABRICACAO
            ultimaManutencao = produto.ULTIMA_MANUTENCAO
            tipoProduto = 3
            document.getElementById("modal-adicionar-produto").innerHTML = ModalBaseComponent.render({
                id: "adicionar-produto",
                title: "Adicionar produto",
                component: CadastroComponent.render()
              })
        }
        
        function addProduct() {
            fetch(`${url}/patrimonios`, {
                method: "POST",
                body: {
                    "id": codigoBarras,
                    "nomePatrimonio": nomeProduto,
                   "codigoBarras": codigoBarras,
                    "setor": setor,
                    "marca": marca,
                    "dataFabricacao": dataFabricacao,
                    "ultimaManutencao": ultimaManutencao
                }

            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            console.log("a")
            const produto = {
                codigoDeBarras: codigoBarras,
                nomeProduto,
                tipoProduto,
                mg,
                tarja,
                quantidade,
                valor,
                dataValidade,
                dataManutencao: ultimaManutencao,
                dataFabricacao,
                setor,
                marca,
            }
            console.log(produto)
        }

            setTimeout(() => {
                const codigoDeBarrasInput = document.getElementById("codigoDeBarras");
                if (codigoDeBarrasInput) {
                    codigoDeBarrasInput.value = codigoBarras ?? ""
                    codigoDeBarrasInput.onchange = (e) => {
                        codigoBarras = e.target.value
                        getDatabase(codigoBarras)
                    }
                };

                const nomeProdutoInput = document.getElementById("nomeProduto");
                if (nomeProdutoInput) {
                    nomeProdutoInput.value = nomeProduto ?? ""
                    nomeProdutoInput.onchange = (e) => nomeProduto = e.target.value
                };

                const tipoProdutoInput = document.getElementById("tipoProduto");
                if (tipoProdutoInput) {
                    tipoProdutoInput.value = tipoProduto ?? ""
                    tipoProdutoInput.onchange = (e) => {
                        tipoProduto = e.target.value
                        handleProductType();
                    }
                };

                const mgInput = document.getElementById("mg");
                mgInput.classList.add("display-none")
                if (mgInput) {
                    mgInput.value = mg ?? ""
                    mgInput.onchange = (e) => mg = e.target.value
                };

                const tarjaInput = document.getElementById("tarja");
                tarjaInput.classList.add("display-none")
                if (tarjaInput) {
                    tarjaInput.value = tarja ?? ""
                    tarjaInput.onchange = (e) => tarja = e.target.value;
                }

                const quantidadeInput = document.getElementById("quantidade");
                quantidadeInput.classList.add("display-none")
                if (quantidadeInput) {
                    quantidadeInput.value = quantidade ?? ""
                    quantidadeInput.onchange = (e) => quantidade = e.target.value;
                }

                const valorInput = document.getElementById("valor");
                valorInput.classList.add("display-none")
                if (valorInput) {
                    valorInput.value = valor ?? ""
                    valorInput.onchange = (e) => valor = e.target.value;
                }

                const dataValidadeInput = document.getElementById("dataValidade");
                dataValidadeInput.classList.add("display-none")
                if (dataValidadeInput) {
                    dataValidadeInput.value = dataValidade ?? ""
                    dataValidadeInput.onchange = (e) => dataValidade = e.target.value;
                }

                const dataFabricacaoInput = document.getElementById("dataFabricacao");
                dataFabricacaoInput.classList.add("display-none")
                if (dataFabricacaoInput) {
                    dataFabricacaoInput.value = dataFabricacao ?? ""
                    dataFabricacaoInput.onchange = (e) => dataFabricacao = e.target.value;
                }

                const dataManutencaoInput = document.getElementById("dataManutencao");
                dataManutencaoInput.classList.add("display-none")
                if (dataManutencaoInput) {
                    dataManutencaoInput.valor = ultimaManutencao
                    dataManutencaoInput.onchange = (e) => ultimaManutencao = e.target.value
                };

                const setorInput = document.getElementById("setor");
                setorInput.classList.add("display-none")
                if (setorInput) {
                    setorInput.value = setor ?? ""
                    setorInput.onchange = (e) => setor = e.target.value;
                }

                const marcaInput = document.getElementById("marca");
                marcaInput.classList.add("display-none")
                if (marcaInput) {
                    marcaInput.value = marca ?? ""
                    marcaInput.onchange = (e) => marca = e.target.value
                }

                function handleProductType(){   
                    if (tipoProduto == 1) {
                        nomeProdutoInput.classList.remove("display-none")
                        dataValidadeInput.classList.remove("display-none")
                        valorInput.classList.remove("display-none")
                        mgInput.classList.remove("display-none")
                        tarjaInput.classList.remove("display-none")
                        dataFabricacaoInput.classList.add("display-none")
                        dataManutencaoInput.classList.add("display-none")
                        setorInput.classList.add("display-none")
                        marcaInput.classList.add("display-none")
                    }
                    else if (tipoProduto == 2) {
                        nomeProdutoInput.classList.remove("display-none")
                        dataValidadeInput.classList.remove("display-none")
                        valorInput.classList.remove("display-none")
                        mgInput.classList.add("display-none")
                        tarjaInput.classList.add("display-none")
                        dataFabricacaoInput.classList.add("display-none")
                        dataManutencaoInput.classList.add("display-none")
                        setorInput.classList.add("display-none")
                        marcaInput.classList.add("display-none")
                    }
                    else if (tipoProduto == 3) {
                        dataValidadeInput.classList.add("display-none")
                        valorInput.classList.add("display-none")
                        mgInput.classList.add("display-none")
                        nomeProdutoInput.classList.remove("display-none")
                        tarjaInput.classList.add("display-none")
                        dataFabricacaoInput.classList.remove("display-none")
                        dataManutencaoInput.classList.remove("display-none")
                        setorInput.classList.remove("display-none")
                        marcaInput.classList.remove("display-none")
                    }
                }
                handleProductType()

            }, 0);

        return `
        <div class="screen">
            <div class="filtro">
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "nomeProduto", type: "text", placeholder: "Nome:" })}
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "codigoDeBarras", type: "text", placeholder: "Código de barra:" })}
                    <div class="inputComponent">
                        <select value="${tipoProduto}" id="tipoProduto" required>
                            <option value="" disabled hidden>Tipo de produto:</option>
                            <option value="1">Medicamento</option>
                            <option value="2">EPI</option>
                            <option value="3">Patrimônio</option>
                        </select>
                    </div>
                    ${InputComponent.render({ id: "quantidade", type: "text", placeholder: "Quantidade:" })}
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "mg", type: "text", placeholder: "Mg:" })}
                    ${InputComponent.render({ id: "tarja", type: "text", placeholder: "Tarja:" })}   
                    ${InputComponent.render({ id: "valor", type: "text", placeholder: "Valor unitário:" })} 
                    ${InputComponent.render({ id: "setor", type: "text", placeholder: "Setor:" })} 
                    ${InputComponent.render({ id: "marca", type: "text", placeholder: "Marca:" })} 
                    <input id="dataValidade" type="text" placeholder="Data Validade:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
                    <input id="dataFabricacao" type="text" placeholder="Data Fabricação:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
                    <input id="dataManutencao" type="text" placeholder="Última Manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
                </div>
            </div>
        </div>
        <div class="modal-button">
            ${ButtonComponent.render({
            id: "confirmarAdicionarProduto",
            label: "Adicionar",
            funcao: addProduct
        })}
        </div>
                    `
    }
}


// <input type="text" placeholder="Última manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
// ${InputComponent.render({type: "text", placeholder: "Marca:"})}