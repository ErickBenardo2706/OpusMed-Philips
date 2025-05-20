export const ButtonComponent = {
  render: (props = {}) => {
    return `
      <button class="botao" onclick="OpenModal('modal1')">
        ${props.label}
      </button>
    `;
  }
};
