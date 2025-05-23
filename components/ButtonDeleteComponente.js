export const ButtonDeleteComponent = {
  render: (props = {}) => {
    return `
      <button class="btn-trash" onclick="()=>{alert("Você excluiu")}">
        <img src="assets/trash.svg" alt="Excluir">
      </button>
    `;
  }
};
