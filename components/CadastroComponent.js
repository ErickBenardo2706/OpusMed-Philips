import { ButtonComponent } from './ButtonComponent.js';
import { InputComponent } from './InputComponent.js';

export const CadastroComponent = {
    render: () => {
        let codigoDeBarras = ""
        let nomeProduto = ""
        let tipoProduto = ""
        let mg = ""
        let tarja = ""
        let quantidade = ""
        let valor = ""
        let dataValidade = ""

        function AddProduct() {
            console.log("a")
            const produto = {
                codigoDeBarras,
                nomeProduto,
                tipoProduto,
                mg,
                tarja,
                quantidade,
                valor,
                dataValidade
            }
            console.log(produto)
        }
        
        setTimeout(() => {
            const codigoDeBarrasInput = document.getElementById("codigoDeBarras");
            if (codigoDeBarrasInput) codigoDeBarrasInput.onchange = (e) => codigoDeBarras = e.target.value;

            const nomeProdutoInput = document.getElementById("nomeProduto");
            if (nomeProdutoInput) nomeProdutoInput.onchange = (e) => nomeProduto = e.target.value;

            const tipoProdutoInput = document.getElementById("tipoPproduto");
            if (tipoProdutoInput) tipoProdutoInput.onchange = (e) => tipoProduto = e.target.value;

            const mgInput = document.getElementById("mg");
            if (mgInput) mgInput.onchange = (e) => mg = e.target.value;

            const tarjaInput = document.getElementById("tarja");
            if (tarjaInput) tarjaInput.onchange = (e) => tarja = e.target.value;

            const quantidadeInput = document.getElementById("quantidade");
            if (quantidadeInput) quantidadeInput.onchange = (e) => quantidade = e.target.value;

            const valorInput = document.getElementById("valor");
            if (valorInput) valorInput.onchange = (e) => valor = e.target.value;

            const dataValidadeInput = document.getElementById("dataValidade");
            if (dataValidadeInput) dataValidadeInput.onchange = (e) => dataValidade = e.target.value;
            
        }, 0);

        return `
        <div class="screen">
            <div class="filtro">
                <div class="linha-baixo">
                ${InputComponent.render({ id: "codigoDeBarras", type: "text", placeholder: "Código de barra:" })}
                ${InputComponent.render({ id: "nomeProduto", type: "text", placeholder: "Nome:" })}
                <div class="inputComponent">
                        <select id="tipoProduto" required>
                            <option disabled selected hidden>Tipo de produto:</option>
                            <option value="medicamento">Medicamento</option>
                            <option value="epi">EPI</option>
                            <option value="bem">Patrimônio</option>
                        </select>
                    </div>
                </div>
                <div class="linha-baixo">
                    ${InputComponent.render({ id: "mg", type: "text", placeholder: "Mg:" })}
                    ${InputComponent.render({ id: "tarja", type: "text", placeholder: "Tarja:" })}
                    ${InputComponent.render({ id: "quantidade", type: "text", placeholder: "Quantidade:" })}
                </div>
                <div class="linha-baixo">   
                    ${InputComponent.render({ id: "valor", type: "text", placeholder: "Valor unitário:" })} 
                    <input id="dataValidade" type="text" placeholder="Data Validade:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
                </div>
            </div>
        </div>
        <div class="modal-button">
            ${ButtonComponent.render({
            id: "confirmarAdicionarProduto",
            label: "Adicionar",
            funcao: AddProduct
        })}
        </div>
                    `
    }
}


// <input type="text" placeholder="Última manutenção:" onfocus="(this.type='date')" onblur="(this.type='text')" name="data" class="date_input">
// ${InputComponent.render({type: "text", placeholder: "Marca:"})}