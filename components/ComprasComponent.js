import { ChangePage } from "../js/button.js";
import { ButtonComponent } from "./ButtonComponent.js";
import { FilterComponent } from "./FilterComponent.js";
import { ListBaseComponent } from "./ListBaseComponent.js";
import { NotaFiscalComponent } from "./NotaFiscalComponent.js";

export const ComprasComponent = {
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
    ]);
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
              total: "550,00",
              component: {
                title: "AAAA",
                subtitle: "XX/XX/XXXX",
                body: NotaFiscalComponent.render({
                  fornecedor: {
                    representante: "Jean Chera",
                    nome: "Asdrubal",
                    endereco: "Rua ADASDAS",
                    cnpj: "89922323-123123",
                    telefone: "(011) 4402-8922",
                    email: "contato@asdrubal.com",
                  },
                  detalhe: [
                    {
                      quantidade: 10,
                      nome: "Rivotril",
                      valor: 55,
                    },
                    {
                      quantidade: 10,
                      nome: "Rivotril",
                      valor: 55,
                    },
                    {
                      quantidade: 10,
                      nome: "Rivotril",
                      valor: 55,
                    },
                    {
                      quantidade: 10,
                      nome: "Rivotril",
                      valor: 55,
                    }
                  ]
                })
              }
            },
          ],
        },
      ],
    });
    const button = ButtonComponent.render({
      id: "nova-compra",
      label: "Nova compra",
      funcao: ChangePage,
      props: "#/nova-compra"
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
  },
};
