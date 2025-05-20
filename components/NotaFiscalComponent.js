export const NotaFiscalComponent = {
    render: (props = {}) => {
        return `
            <section>
              <div class="personal_data">
                      <div class="left_side">
                          <label for="" id="title">Representante:</label>
                          <label for="">${props.fornecedor.representante}</label> 

                          <label for="" id="title">Fornecedor:</label>
                          <label for="">${props.fornecedor.nome}</label> 

                          <label for="" id="title">Endereço:</label>
                          <label for="">${props.fornecedor.endereco}</label>
                      </div>

                      <div class="right_side">
                          <label for="" id="title">CNPJ: </label>
                          <label for="">${props.fornecedor.cnpj}</label> 

                          <label for="" id="title">Telefone: </label>
                          <label for="">${props.fornecedor.telefone}</label> 

                          <label for="" id="title">Email:</label>
                          <label for="">${props.fornecedor.email}</label>
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
                          ${props.detalhe.map((content)=>{
                            return`
                            <tr class="lines">
                                <td>${content.quantidade}</td>
                                <td>${content.nome}</td>
                                <td>${content.valor}</td>
                                <td>${content.valor * content.quantidade}</td>
                            </tr>
                            `
                          })}

                          <tr class="total">
                              <td>Total: </td>
                              <td></td>
                              <td></td>
                              <td>900</td>
                          </tr>
                      </table>

                  </div>
            </section>
    `;
    }
};
