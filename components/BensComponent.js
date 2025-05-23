import { OpenModal } from '../js/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { CadastroComponent } from './CadastroComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const BensComponent = {
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
    const button = ButtonComponent.render({
          id: "adicionar-produto",
          label: "Adicionar",
          funcao: OpenModal,
          props:{
            title: "Adicionar",
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
