import { ToggleBackground } from "../js/menu.js";
import { CloseModal } from "../js/modal.js";

export const ModalBaseComponent = {
    render: (props = {}) => {
        setTimeout(() => {
            const el = document.getElementById(`close-modal-${props.id}`);
            if (el) el.addEventListener("click", () => {
                CloseModal();
                ToggleBackground();
            });
        }, 0);
        return `
        <div id="${props.id}" class="modal close">
            <header>
                <div>
                    <span><b>${props.title}${props.subtitle ? " - </b>"+ props.subtitle : "</b>"}</span>
                </div>
                <button id="close-modal-${props.id}" class="x">
                    <i class="fi fi-rr-cross-small"></i>
                </button>
            </header>
            ${props.component}
        </div>
    `;
    }
};