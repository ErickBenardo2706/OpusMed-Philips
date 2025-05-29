export const ButtonDeleteComponent = {
  render: (props = {}) => {
    setTimeout(() => {
      const el = document.getElementById(props.id);
      if (el) {
        const handler = ()=>props.funcao(props.props)
        el.onclick = handler
      };
    }, 0);
    return `
      <button class="btn-trash btn-delet" id="${props.id}">
        <img src="assets/trash.svg" alt="Excluir">
      </button>
    `;
  }
};
