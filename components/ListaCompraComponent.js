export const ListaCompraComponent = {
    render: (props ={}) => {
        return `
    
    <div class="table-component">
        <table>
            <tr>
                ${props.colunas.map((content) => {
                    return `
                        <th>${content}</th>
                    `;
                }).join('')}
            </tr>
            ${props.items.map((content) => {
                return `
                    <tr>
                        ${Object.keys(content).map((key) => {
                            if (key != "id")
                                return `<td>
                                            <input type="text" value=""
                                            ${content[key]}
                                        </td>`;
                        }).join('')}
                    </tr>
                `;
            }).join('')}
        </table>
    </div> `;

    }
};