export const ButtonDeleteComponent = {
  render: (props = {}) => {
    return `
      <button class="btn-trash" onclick="()=>{alert("excluiu :D aaaaaaaa")}">
        <img src="assets/trash.svg" alt="Excluir">
      </button>
    `;
  }
};
