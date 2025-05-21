import { CloseModal } from "../js/modal.js";

export const ModalBaseComponent = {
    render: (props = {}) => {
        setTimeout(() => {
            const el = document.getElementById("close-modal");
            if (el) el.addEventListener("click", () => { CloseModal() });
        }, 0);
        return `
        <header>
            <div>
                <span><b>${props.title} - </b>${props.subtitle}</span>
            </div>
            <button id="close-modal">
                <i class="fi fi-rr-cross-small"></i>
            </button>
        </header>
        ${props.component}
    `;
    }
};