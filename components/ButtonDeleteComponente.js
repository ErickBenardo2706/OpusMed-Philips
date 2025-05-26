export const ButtonDeleteComponent = {
  render: (props = {}) => {
    setTimeout(() => {
      const el = document.getElementById(props.id);
      if (el) el.addEventListener("click", () => { props.funcao(props.props)});
    }, 0);
    return `
      <button class="btn-trash" id="${props.id}">
        <img src="assets/trash.svg" alt="Excluir">
      </button>
    `;
  }
};
