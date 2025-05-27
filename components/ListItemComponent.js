import { ToggleBackground } from "../js/menu.js";
import { OpenModal, SetModal } from "../js/modal.js";
import { routes } from "../routes/routes.js";

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
                                    const el = document.getElementById(rowId);
                                    if (el) el.addEventListener("click", () => {
                                        SetModal({
                                            id: `${content.component.id}-body`, 
                                            subtitle: content.component.subtitle,
                                            component: content.component.body
                                        });
                                        OpenModal(`modal-${content.component.id}`);
                                    });
                                }, 0);
                            }

                            return `
                                    <tr id="${rowId}" class="${content["component"] ? "clicavel" : ""}">
                                        ${Object.keys(content).map((key) => {
                                            if (key !== "component") {
                                                return `<td>${content[key]}</td>`;
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

