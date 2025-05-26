import { ToggleBackground } from "../js/menu.js";
import { OpenModal } from "../js/modal.js";

export const ListItemComponent = {
    render: (props = {}) => {
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
                        ${props.items.map((content, index) => {
                            const rowId = `${props.id}-row-${index}`;
                            const screensComClicavel = ["compra", "movimento"];

                            const rowClass = screensComClicavel.includes(props.screen) ? "clicavel" : "";

                            if (index !== 0 && content.component) {
                                setTimeout(() => {
                                    const el = document.getElementById(rowId);
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
                                <tr id="${rowId}" class="${rowClass}">
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

