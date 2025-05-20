export const ListItemComponent = {
    render: (props = {}) => {
        return `
            <li>
                <input type="radio" name="accordation" id="listitem-${props.id}">
                <label for="listitem-${props.id}">
                    <div class="row">
                        ${props.columns?.map((content) => {
                            return `<span>${content}</span>`;
                        }).join('')}
                    </div>
                </label>
                <div class="content">
                    <table>
                        ${props.items.map((content) => {
                            return `
                                <tr onclick="OpenModal('notaFiscal')">
                                    ${Object.keys(content).map((key) => {
                                        return `<td>${content[key]}</td>`;
                                    }).join('')}
                                </tr>
                            `;
                        }).join('')}
                    </table>
                </div>
            </li>
        `;
    }
};
