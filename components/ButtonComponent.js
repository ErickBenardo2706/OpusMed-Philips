import { SetModal } from "../js/modal.js";

export const ButtonComponent = {
  render: (props = {}) => {
    SetModal(props.modal);
    return `
      <button class="botao" onclick="OpenModal()">
        ${props.label}
      </button>
    `;
  }
};
