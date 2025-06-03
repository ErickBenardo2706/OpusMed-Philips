import { ToggleBackground } from "../JS/menu.js";
import { CloseModal } from "../JS/modal.js";

export const ModalBaseComponent = {
    render: (props = {}) => {
        setTimeout(() => {
            const el = document.getElementById(`close-modal-${props.id}`);
            if (el) {
                const handler = () => {
                    CloseModal();
                    ToggleBackground();
                }
                el.onclick = handler
            }
        }, 0);
        return `
            <header>
                <div>
                    <span><b>${props.title}${props.subtitle ? " - </b>"+ props.subtitle : "</b>"}</span>
                </div>
                <button id="close-modal-${props.id}" class="x">
                    <i class="fi fi-rr-cross-small"></i>
                </button>
            </header>
            ${props.component}
    `;
    }
};