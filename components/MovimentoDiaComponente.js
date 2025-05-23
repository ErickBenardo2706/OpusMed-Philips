import { OpenModal } from '../js/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { CadastroComponent } from './CadastroComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';
import { MarcarChegadaComponent } from './MarcarChegadaComponent.js';

export const MovimentoDiaComponente = {
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
        value: "nome-desc",
        nome: "Nome (Decrescente)",
      },
      {
        value: "nome-cres",
        nome: "Nome (crescente)",
      },
    ]);
    const list = ListBaseComponent.render({
      columns: ['Produto', 'Horário de Saída', 'Horário de Chegada', 'Status'],
      items: [
        {
          id: 1,
          columns: ['Dipirona', '10:15', 'x', 'Em andamento'],
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
              component: {
                title: "Marcar chegada",
                subtitle: "Tadala (Jean Chera)",
                body: MarcarChegadaComponent.render()

              }
            }
          ]
        },
      ]
    })

    const button = ButtonComponent.render({
      id: "adicionar-produto",
      label: "Criar movimento",
      funcao: OpenModal,
      props: {
        title: "Criar movimento",
        subtitle: "a",
        component: CadastroComponent.render()
      }
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