import { OpenModal, OpenModalProps } from '../JS/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const MovimentoDiaComponente = {
  render: () => {
    const filter = FilterComponent.render([{
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
          value: "medicamento-cresc",
          nome: "Nome Medicamento",
        },
        {
          value: "nome-cres",
          nome: "Nome (crescente)",
        },
      ]);
    const list = ListBaseComponent.render({
      screen: "movimento",
      columns: ['Produto', 'Horário de Saída', 'Horário de Chegada', 'Status', ' '],
      items: [
        {
          id: 1,
          columns: ['Dipirona', '10:15', 'x', 'Em andamento', '<div class="status"></div>'],
          items: [
            {
              saida: "Quantidade de Saída",
              chegada: "Quantidade de Chegada",
              colaborador: "Colaborador"
            },
            {
              saida: "10",
              chegada: "x",
              colaborador: "Jean Chera",
              funcao: OpenModalProps,
              component: {
                id: "modal-marcar-chegada",
              }
            }
          ]
        },
        {
          id: 2,
          columns: ['Bezetacil', '11:00', '11:15', 'Finalizado', '<div class="statusFim"></div>'],
          items: [
            {
              saida: "Quantidade de Saída",
              chegada: "Quantidade de Chegada",
              colaborador: "Colaborador"
            },
            {
              saida: "2",
              chegada: "2",
              colaborador: "Luana Garcia",
              component: {
                funcao: OpenModalProps,
                id: "modal-marcar-chegada",
              }
            }
          ]
        }
      ]
    })

    const button = ButtonComponent.render({
      id: "adicionar-produto",
      label: "Criar movimento",
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