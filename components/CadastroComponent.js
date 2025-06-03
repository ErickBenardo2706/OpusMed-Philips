import { ButtonComponent } from './ButtonComponent.js';
import { url } from '../JS/lib.js';
import { InputComponent } from './InputComponent.js';
import { ModalBaseComponent } from "./ModalBaseComponent.js";
import { updateScreen } from '../JS/framework.js';
import { formatData } from '../JS/helper.js';


let produto = {}

let codigoBarras
let nomeProduto
let tipoProduto
let mg
let tarja = "S"
let quantidade
let valor = 0
let dataValidade
let dataFabricacao
let setor
let marca

export const CadastroComponent = {
    render: () => {

        function getDatabase(cdBarras){
            fetch(`${url}/patrimonios/${cdBarras}`)
            .then(response => response.json())
            .then(data => {
                outDataBase(data)
            })
        }

        function outDataBase(data){
            produto = data[0]
            if(produto){
                const partes = produto.NOME.split('|');
                codigoBarras = produto.CODIGO_BARRAS
                nomeProduto = partes[0].trim()  

                setor = produto.SETOR
                marca = produto.MARCA
                dataFabricacao = produto.DATA_FABRICACAO

                tarja = produto.ULTIMA_MANUTENCAO
                dataValidade = produto.DATA_VENCIMENTO
                tipoProduto = produto.ID_CATEGORIA_PRODUTO
                quantidade = produto.QUANTIDADE_MINIMA
                if(tipoProduto != 3)mg = partes[1].trim()
                valor = produto.VALOR

                document.getElementById("modal-adicionar-produto").innerHTML = ModalBaseComponent.render({
                    id: "adicionar-produto",
                    title: "Adicionar produto",
                    component: CadastroComponent.render()
                })
            }
        }
        
        function addProduct() {
            if (tipoProduto != 3)
                nomeProduto = `${nomeProduto.trim()} | ${mg.trim()}`
            fetch(`${url}/item`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nomePatrimonio: nomeProduto,
                    codigoBarras,
                    setor,
                    marca,
                    dataFabricacao: dayjs(dataFabricacao).format('YYYY-MM-DD'),
                    idCategoria: tipoProduto,
                    quantidade: 0,
                    dataVencimento: dayjs(dataValidade).format('YYYY-MM-DD'),
                    valor,
                    tarja
                })

            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                updateScreen()
            }) 
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
                    dataValidadeInput.value = formatData(dataValidade) ?? ""
                    dataValidadeInput.onchange = (e) => dataValidade = e.target.value;
                }

                const dataFabricacaoInput = document.getElementById("dataFabricacao");
                dataFabricacaoInput.classList.add("display-none")
                if (dataFabricacaoInput) {
                    dataFabricacaoInput.value = dataFabricacao ?? ""
                    dataFabricacaoInput.onchange = (e) => dataFabricacao = e.target.value;
                }

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
                    ${InputComponent.render({ id: "codigoDeBarras", type: "number", placeholder: "Código de barra:" })}
                        <select class="inputComponent" value="${tipoProduto}" id="tipoProduto" required>
                            <option value="" disabled hidden>Tipo de produto:</option>
                            <option value="1">Medicamento</option>
                            <option value="2">EPI</option>
                            <option value="3">Patrimônio</option>
                        </select>
                    ${InputComponent.render({ id: "quantidade", type: "text", placeholder: "Quantidade:" })}
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "mg", type: "text", placeholder: "Dose:" })}
                        <select class="inputComponent" value="${tarja}" id="tarja" required>
                            <option value="" disabled hidden>Tarja:</option>
                            <option value="S">Sem tarja</option>
                            <option value="P">Preta</option>
                            <option value="V">Vermelha</option>
                            <option value="A">Amarela</option>
                        </select>
                    ${InputComponent.render({ id: "valor", type: "number", placeholder: "Valor unitário:" })} 
                    ${InputComponent.render({ id: "setor", type: "text", placeholder: "Setor:" })} 
                    ${InputComponent.render({ id: "marca", type: "text", placeholder: "Marca:" })} 
                    <input id="dataValidade" type="text" placeholder="Data Validade:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
                    <input id="dataFabricacao" type="text" placeholder="Data Fabricação:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
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