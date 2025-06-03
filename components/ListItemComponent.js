export const ListItemComponent = {
    render: (props = {}) => {
        return `
            <li>
                <input type="radio" name="accordation" id="listitem-${props.id}">
                <label id="labelitem-${props.id}" for="listitem-${props.id}">
                    <div class="row">
                        ${props.columns?.map((content) => {
                            return `<span>${content}</span>`;
                        }).join("")}
                    </div>
                </label>
                <div class="content">
                    <table>
                        ${props.items.map((content, index) => {
                            const rowId = `${props.id}-row-${index}`;

                            if (index !== 0 && content.component) {
                                setTimeout(() => {
                                    const el = document.getElementsByClassName(rowId);
                                    if (el){
                                        const handle = ()=> content.component.funcao(content.component.props);
                                        [...el].forEach((td => td.onclick = handle))
                                    } 
                                }, 0);
                            }

                            return `
                                    <tr class="${content["component"] ? "clicavel" : ""}">
                                        ${Object.keys(content).map((key) => {
                                            if (key !== "component") {
                                                if(key !== "deletar")
                                                    return `<td class="${rowId}">${content[key]}</td>`;
                                                return `<td >${content[key]}</td>`;
                                            }
                                            return "";
                                        }).join("")}
                                    </tr>
                                `;
                        }).join("")}
                    </table>
                </div>
            </li>
        `;
    },
};

