export const ModalBaseComponent = {
    render: (props = {}) => {
        return `
    <div id="${props.id}" class="modal close">
        <header>
            <div>
                <span><b>${props.title} - </b>${props.subtitle}</span>
            </div>
            <button onclick="CloseModal(), ToggleBackground()">
                <i class="fi fi-rr-cross-small"></i>
            </button>
        </header>
        ${props.component}
    </div>
    `;
    }
};



