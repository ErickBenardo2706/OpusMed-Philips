import { updateScreen } from '../JS/framework.js';
import { formatData, formatTime } from '../JS/helper.js';
import { url } from '../JS/lib.js';
import { MarcarChegada, OpenModal } from '../JS/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { FilterComponent } from './FilterComponent.js';
import { InputComponent } from './InputComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

let dataMovimentos

export const MovimentoDiaComponente = {
  render: () => {
    let lista = []

    let listDisplay = ListBaseComponent.render({
      columns: ['Horário de Saída', 'Produto', 'Horário de Chegada', 'Status', ' '],
      items: lista
    })

    function getDatabase() {
      fetch(`${url}/movimentos/${dataMovimentos ? dayjs(dataMovimentos).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')}`)
        .then(response => response.json())
        .then(database => {
          outDataBase(database)
        })
    }

    getDatabase()

    function outDataBase(data) {
      [...data].forEach((element, index) => {
        adicionarNaListaSuspensa(element, index)
      })
    }

    setTimeout(() => {
      const dataMovimentosInput = document.getElementById("dataMovimentos");
      if (dataMovimentosInput) {
        dataMovimentosInput.value = dayjs(dataMovimentos).format('YYYY-MM-DD');
        dataMovimentosInput.onchange = (e) => {
          dataMovimentos = e.target.value
          updateScreen()
        }
      };
    }, 0);

    function adicionarNaListaSuspensa(novoMovimento, index) {
      const itemBase = {
        saida: "Quantidade de Saída",
        chegada: "Quantidade de Chegada",
        colaborador: "Colaborador",
      };

      const itemValores = {
        saida: novoMovimento.QUANTIDADE_SAIDA,
        chegada: novoMovimento.QUANTIDADE_ENTRADA ?? "-",
        colaborador: novoMovimento.COLABORADOR_NOME,
      };

      if (novoMovimento.STATUS !== "finalizado") {
        itemValores.component = {
          funcao: MarcarChegada,
          props: {
            id: "marcar-chegada",
            var: novoMovimento,
          },
        };
      }

      lista.push({
        id: index,
        columns: [
          formatTime(novoMovimento.HORARIO_SAIDA),
          novoMovimento.PRODUTO_NOME,
          formatTime(novoMovimento.HORARIO_ENTRADA),
          novoMovimento.STATUS,
          `<div class="${novoMovimento.STATUS}"></div>`,
        ],
        items: [itemBase, itemValores],
      });

      document.getElementById("listaMovimentoArticle").innerHTML = ListBaseComponent.render({
        columns: ['Horário de Saída', 'Produto', 'Horário de Chegada', 'Status', ' '],
        items: lista,
      });
    }


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

    const button = ButtonComponent.render({
      id: "criar-movimento",
      label: "Criar movimento",
      funcao: OpenModal,
      props: "modal-criar-movimento"
    })


    return `
      <section>
          <div class="selectDate">
            <label>Selecionar dia: </label>
            ${InputComponent.render({ id: "dataMovimentos", type: "date" })}
          </div>
          ${filter}
          <div id="listaMovimentoArticle"></div>
          <div class="button-container">
            ${button}
          </div>
      </section>
    `;
  }
};