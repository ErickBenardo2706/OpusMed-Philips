import { OpenModal } from '../JS/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { CadastroComponent } from './CadastroComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const EstoqueComponent = {
  render: () => {
    const filter = FilterComponent.render([{
      title: "Categoria",
      itens: [
        {
          id: "medicamento",
          nome: "Medicamento"
        },
        {
          id: "epi",
          nome: "EPI's"
        }
      ]
    },
    {
      title: "Tarja",
      itens: [
        {
          id: "sem-tarja",
          nome: "Sem Tarja"
        },
        {
          id: "amarela",
          nome: "Amarela"
        },
        {
          id: "vermelha",
          nome: "Vermelha"
        },
        {
          id: "preta",
          nome: "Preta"
        },
      ]
    },
    ],
      [
        {
          value: "quant-maior",
          nome: "Maior Quantidade",
        },
        {
          value: "nome-menor",
          nome: "Menor Quantidade",
        },
        {
          value: "a-z",
          nome: "Nome (A-Z)",
        },
      ]);
    const list = ListBaseComponent.render({
      columns: ["Nome", "Tipo"],
      items: [
        {
          id: 1,
          columns: ["Tadalafila", "Medicamento"],
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
          columns: ["Luva", "EPI's"],
          items: [
            {
              lote: "Nº Lote",
              validade: "Validade",
              quantidade: "Quantidade",
            },
            {
              lote: "13532",
              validade: "05/2026",
              quantidade: "70",
            },
          ]
        },
        {
          id: 3,
          columns: ["Amoxilina", "Medicamento"],
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
          columns: ["Máscara", "EPI's"],
          items: [
            {
              lote: "Nº Lote",
              validade: "Validade",
              quantidade: "Quantidade",
            },
            {
              lote: "13532",
              validade: "05/2026",
              quantidade: "70",
            },
          ]
        },
      ]
    })
    const button = ButtonComponent.render({
      id: "adicionar-produto",
      label: "Adicionar",
      funcao: OpenModal,
      props: "modal-adicionar-produto"
    })


    return `
      <section>
          ${filter}
          ${list}
          <div class="button-container">
            ${button}
          </div>
      </section>
    `;
  }
};
