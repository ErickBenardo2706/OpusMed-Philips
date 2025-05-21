import { ButtonComponent } from './ButtonComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const ComprasComponent = {
  render: () => {
    const filter = FilterComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!"
    });
    const list = ListBaseComponent.render({
      columns: ["Mês", "Valor total"],
      items: [
        {
          id: 1,
          columns: ["Janeiro", "1000,00"],
          items: [
            {
              day: "Dia",
              supplier: "Fornecedor",
              total: "Total",
            },
            {
              day: "10",
              supplier: "Asdrubal",
              total: "600,00",

            },
            {
              day: "11",
              supplier: "Coorp",
              total: "400,00",

            },
          ]
        },
        {
          id: 2,
          columns: ["Janeiro", "1000,00"],
          items: [
            {
              day: "Dia",
              supplier: "Fornecedor",
              total: "Total",
            },
            {
              day: "10",
              supplier: "Asdrubal",
              total: "600,00",

            },
            {
              day: "11",
              supplier: "Coorp",
              total: "400,00",

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
