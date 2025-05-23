import { ChangePage } from "../js/button.js";
import { ButtonComponent } from "./ButtonComponent.js";
import { FilterComponent } from "./FilterComponent.js";
import { ListBaseComponent } from "./ListBaseComponent.js";
import { NotaFiscalComponent } from "./NotaFiscalComponent.js";

export const ComprasComponent = {
  render: () => {
    const filter = FilterComponent.render({
      descricao: "Somos uma equipe apaixonada por JavaScript puro!",
    });
    const list = ListBaseComponent.render({
      columns: ["Mês", "Valor total"],
      items: [
        {
          id: 1,
          columns: ["Janeiro", "10.000,00"],
          items: [
            {
              day: "Dia",
              supplier: "Fornecedor",
              total: "Total",
            },
            {
              day: "10",
              supplier: "Fornecedor A",
              total: "$ 3100,00",
              component: {
                title: "Nota Fiscal",
                subtitle: "02/06/2025",
                body: NotaFiscalComponent.render({
                  fornecedor: {
                    representante: "Jean Chera",
                    nome: "Forncedor A",
                    endereco: "Rua Dois de Setembro",
                    cnpj: "48780455-0001-91",
                    telefone: "(11) 4402-8922",
                    email: "contato@fornecedor_a.com",
                  },
                  detalhe: [
                    {
                      quantidade: 10,
                      nome: "Rivotril",
                      valor: 55,
                    },
                    {
                      quantidade: 20,
                      nome: "Dipirona",
                      valor: 30,
                    },
                    {
                      quantidade: 30,
                      nome: "Tramadol",
                      valor: 35,
                    },
                    {
                      quantidade: 10,
                      nome: "Ritalina",
                      valor: 90,
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
