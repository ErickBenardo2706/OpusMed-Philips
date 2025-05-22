import { ButtonComponent } from './ButtonComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const MovimentoDiaComponente = {
  render: () => {
    const filter = FilterComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!"
    });
    const list = ListBaseComponent.render({
      columns: ["Medicamento", 'Horário Entrada', 'Horário Saída'],
      items: [
        {
          id: 1,
          columns: ["Ibuprofeno", '10:15', '10:40' ],
          items: [
            {
              medicamento: "Ibuprofeno",
              lote: "Nº Lote",
              colaborador: "Colaborador",
              chegada: "Chegada",
            },
            {
              dose: "10mg",
              lote: "400289",
              colaborador: "Renato dos Santos",
              chegada: "Enfermaria",
            },
            {
              dose: "20mg",
              lote: "400290",
              colaborador: "Carolina Pereira",
              chegada: "Recepção",
            },
          ]
        },
        {
          id: 2,
          columns: ["Amoxicilina", "08:30", "08:47"],
          items: [
            {
              medicamento: "Amoxicilina",
              lote: "Nº Lote",
              colaborador: "Colaborador",
              chegada: "Chegada",
            },
            {
              dose: "5mg",
              lote: "400289",
              colaborador: "Taylor Swift",
              chegada: "Cozinha",
            },
            {
              dose: "15mg",
              lote: "40990",
              colaborador: "Dave Mustaine",
              chegada: "UTI",
            },
          ]
        },
        {
          id: 3,
          columns: ["Ritalina", "09:28", "09:45"] ,
          items: [
            {
              nome: "Ritalina",
              lote: "Nº Lote",
              quantidade: "Colaborador",
              chegada: "Chegada",
            },
            {
              dose: "10mg",
              lote: "498289",
              colaborador: "Renato Russo",
              chegada: "Recepção",
            },
            {
              dose: "20mg",
              lote: "400876",
              colaborador: "Rita Lee",
              chegada: "Enfermaria",
            },
          ]
        },
        {
          id: 4,
          columns: ["Cimegripe", "14:15", "14:30"],
          items: [
            {
              nome: "Cimegripe",
              lote: "Nº Lote",
              colaborador: "Colaborador",
              chegada: "Chegada",
            },
            {
              dose: "10mg",
              lote: "400289",
              colaborador: "Silvio Santos",
              chegada: "Enfermaria",
            },
            {
              dose: "20mg",
              lote: "400290",
              colaborador: "Marshal Lee",
              chegada: "UTI",
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