export const ButtonComponent = {
  render: (props) => {
    setTimeout(() => {
      const el = document.getElementById(props.id);
      if (el) {
        const handler = ()=>props.funcao(props.props)
        el.onclick = handler
      };
    }, 0);
    return `
      <button id="${props.id}" class="botao">
        ${props.label}
      </button>
    `;
  },
};
