export const ButtonComponent = {
  render: (props) => {
    setTimeout(() => {
      const el = document.getElementById(props.id);
      if (el) el.addEventListener("click", ()=>{props.funcao(props.props)});
    }, 0);
    return `
      <button id="${props.id}" class="botao">
        ${props.label}
      </button>
    `;
  },
};
