export const NotaFiscalComponent = {
    render: (props = {}) => {
        let valorTotal = 0
        let qntTotal = 0
        props.detalhe?.map((content)=>{
            qntTotal += content.quantidade;
            valorTotal += content.valor*content.quantidade;
        })
        return `
            <section id="nota-fiscal-body">
              <div class="personal_data">
                      <div class="left_side">
                          <label for="" id="title">Representante:</label>
                          <label for="">${props.fornecedor?.representante}</label> 

                          <label for="" id="title">Fornecedor:</label>
                          <label for="">${props.fornecedor?.nome}</label> 

                          <label for="" id="title">Endereço:</label>
                          <label for="">${props.fornecedor?.endereco}</label>
                      </div>

                      <div class="right_side">
                          <label for="" id="title">CNPJ: </label>
                          <label for="">${props.fornecedor?.cnpj}</label> 

                          <label for="" id="title">Telefone: </label>
                          <label for="">${props.fornecedor?.telefone}</label> 

                          <label for="" id="title">Email:</label>
                          <label for="">${props.fornecedor?.email}</label>
                      </div>
                  </div>

                  <div class="list_of_information">
                      <table >
                          <tr class="header">
                              <th>Quant</th>
                              <th>Produto</th>
                              <th>Valor Unitário</th>
                              <th>Total</th>
                          </tr>
                          ${props.detalhe?.map((content)=>{
                            return`
                            <tr class="lines">
                                <td>${content.quantidade}</td>
                                <td>${content.nome}</td>
                                <td>${content.valor}</td>
                                <td>R$${(content.valor * content.quantidade).toFixed(2)}</td>
                            </tr>
                            `
                          }).join('')}

                          <tr class="total">
                              <td>Total: ${qntTotal}</td>
                              <td></td>
                              <td></td>
                              <td>R$${valorTotal.toFixed(2)}</td>
                          </tr>
                      </table>

                  </div>
            </section>
    `;
    }
};
