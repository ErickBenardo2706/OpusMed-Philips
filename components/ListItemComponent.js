import { ToggleBackground } from "../js/menu.js";
import { OpenModal } from "../js/modal.js";

export const ListItemComponent = {
    render: (props = {}) => {
        function alterarClick(id){
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove("clicavel");
            }
        }
        return `
            <li>
                <input type="radio" name="accordation" id="listitem-${props.id}">
                <label for="listitem-${props.id}">
                    <div class="row">
                        ${props.columns?.map((content) => {
                            return `<span>${content}</span>`;
                        }).join("")}
                    </div>
                </label>
                <div class="content">
                    <table>
                        ${props.items.map((content,index) => {
                            if(index!=0 && content.component){
                                setTimeout(() => {
                                    const el = document.getElementById(`${props.id}-row-${index}`);
                                    if (el) el.addEventListener("click", () => {
                                        OpenModal({
                                            title: content.component.title,
                                            subtitle: content.component.subtitle,
                                            component: content.component.body
                                        });
                                    });
                                }, 0);
                            }
                            return `
                                <tr id="${props.id}-row-${index}">
                                    ${Object.keys(content).map((key) => {
                                        if (key != "component")
                                            return `<td>${content[key]}</td>`;
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
