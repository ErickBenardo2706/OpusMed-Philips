export const TableComponent = {
    render: (props ={}) => {
        return `
    
    <div class="tabela_nova_compra">
        <table>
            ${props.items.map((content) => {
                return `
                    <tr>
                        ${Object.keys(content).map((key) => {
                            return `<td>${content[key]}</td>`;
                        }).join('')}
                    </tr>
                `;
            }).join('')}
        </table>
    </div> `;

    }
};