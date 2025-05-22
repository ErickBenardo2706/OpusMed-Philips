import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const BensComponent = {
  render: () => {
    const filter = FilterComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!"
    });
    const list = ListBaseComponent.render({
      columns: ["Nome", "Quantidade Total"],
      items: [
        {
          id: 1,
          columns: ["Maca", "35"],
          items: [
            {
              manutencao: "Última manutenção",
              lote: "Nº Lote",
              setor: "Setor",
              marca: "Marca",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
          ]
        },
        {
          id: 2,
          columns: ["Raio X", "10"],
          items: [
            {
              manutencao: "Última manutenção",
              lote: "Nº Lote",
              setor: "Setor",
              marca: "Marca",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
          ]
        },
        {
          id: 3,
          columns: ["Cadeira de Rodas", "40"],
          items: [
            {
              manutencao: "Última manutenção",
              lote: "Nº Lote",
              setor: "Setor",
              marca: "Marca",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
            {
              manutencao: "05/10/2024",
              lote: "5E3W540",
              setor: "Farmácia",
              marca: "Philips",
            },
          ]
        },
      ]
    })

    return `
      <section>
          ${filter}
          ${list}
          <div class="button-container">
          </div>
      </section>
    `;
  }
};
