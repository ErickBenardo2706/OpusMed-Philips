export const AboutComponent = {
  render: (props = {}) => {
    return `
      <section>
        <h1>Sobre Nós</h1>
        <p>${props.descricao || "Nenhuma descrição fornecida."}</p>
      </section>
    `;
  }
};
