import { ButtonComponent } from './ButtonComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const EstoqueComponent = {
  render: () => {
    const filter = FilterComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!"
    });
    const list = ListBaseComponent.render({
      columns: ["Nome do produto"],
      items: [
        {
          id: 1,
          columns: ["Tadalafila"],
          items: [
            {
              dose: "Dose",
              lote: "Nº Lote",
              quantidade: "Quantidade",
              tarja: "Tarja",
            },
            {
              dose: "10mg",
              lote: "400289",
              quantidade: "350",
              tarja: "Sem Tarja",
            },
            {
              dose: "20mg",
              lote: "400290",
              quantidade: "200",
              tarja: "Sem Tarja",
            },
          ]
        },
        {
          id: 2,
          columns: ["Rivotril"],
          items: [
            {
              dose: "Dose",
              lote: "Nº Lote",
              quantidade: "Quantidade",
              tarja: "Tarja",
            },
            {
              dose: "10mg",
              lote: "400289",
              quantidade: "350",
              tarja: "Sem Tarja",
            },
            {
              dose: "20mg",
              lote: "400290",
              quantidade: "200",
              tarja: "Sem Tarja",
            },
          ]
        },
        {
          id: 3,
          columns: ["Amoxilina"],
          items: [
            {
              dose: "Dose",
              lote: "Nº Lote",
              quantidade: "Quantidade",
              tarja: "Tarja",
            },
            {
              dose: "10mg",
              lote: "400289",
              quantidade: "350",
              tarja: "Sem Tarja",
            },
            {
              dose: "20mg",
              lote: "400290",
              quantidade: "200",
              tarja: "Sem Tarja",
            },
          ]
        },
        {
          id: 4,
          columns: ["Cimegripe"],
          items: [
            {
              dose: "Dose",
              lote: "Nº Lote",
              quantidade: "Quantidade",
              tarja: "Tarja",
            },
            {
              dose: "10mg",
              lote: "400289",
              quantidade: "350",
              tarja: "Sem Tarja",
            },
            {
              dose: "20mg",
              lote: "400290",
              quantidade: "200",
              tarja: "Sem Tarja",
            },
          ]
        },
      ]
    })

    return `
      <section>
          ${filter}
          ${list}
      </section>
    `;
  }
};
