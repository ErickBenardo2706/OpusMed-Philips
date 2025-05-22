export const TableComponent = {
    render: (props ={}) => {
        return `
    
    <div class="table-component">
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