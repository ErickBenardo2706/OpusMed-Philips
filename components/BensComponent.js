import { OnDelete } from '../js/button.js';
import { formatData } from '../JS/helper.js';
import { url } from '../JS/lib.js';
import { AtualizarManutencao, OpenModal } from '../js/modal.js';
import { ButtonComponent } from './ButtonComponent.js';
import { ButtonDeleteComponent } from './ButtonDeleteComponente.js';
import { FilterComponent } from './FilterComponent.js';
import { ListBaseComponent } from './ListBaseComponent.js';

export const BensComponent = {
  render: () => {
    let lista = []
    
    let listDisplay = ListBaseComponent.render({
      columns: ["Nome", "Quantidade Total"],
      items: lista
    })

    function getDatabase(){
      fetch(`${url}/patrimonios`)
        .then(response => response.json())
        .then(database =>{
          outDataBase(database)
        })
    }

    getDatabase()

    function outDataBase(data){
      [...data].forEach((element, index) => {
        adicionarNaListaSuspensa(element, index)
      })
    }

    function adicionarNaListaSuspensa(novoPatrimonio, index) {
      let patrimonio = lista.find(p => p.columns[0] == novoPatrimonio.NOME_PATRIMONIO);
      if (patrimonio){
          console.log(lista)
          patrimonio.items.push(
          {
              fabricacao: formatData(novoPatrimonio.DATA_FABRICACAO),
              codigo: novoPatrimonio.CODIGO_BARRAS,
              setor: novoPatrimonio.SETOR,
              marca: novoPatrimonio.MARCA,
              manutencao: formatData(novoPatrimonio.ULTIMA_MANUTENCAO),
              deletar: ButtonDeleteComponent.render({id: novoPatrimonio.CODIGO_BARRAS, funcao: OnDelete, props: novoPatrimonio.CODIGO_BARRAS}),
              component: {
                funcao: AtualizarManutencao,
                props: {
                  id:  "atualizar-manutencao",
                  var: novoPatrimonio
                },
              }
          }
        )
      }
      else{
        lista.push({
          id: index,
          columns: [novoPatrimonio.NOME_PATRIMONIO, novoPatrimonio.QUANTIDADE_TOTAL],
          items: [
            {
              fabricacao: "Data de Fabricação",
              codigo: "Código de Barras",
              setor: "Setor",
              marca: "Marca",
              manutencao:"Última manutenção",
              deletar: "Excluir",
            },
            {
              fabricacao: formatData(novoPatrimonio.DATA_FABRICACAO),
              codigo: novoPatrimonio.CODIGO_BARRAS,
              setor: novoPatrimonio.SETOR,
              marca: novoPatrimonio.MARCA,
              manutencao: formatData(novoPatrimonio.ULTIMA_MANUTENCAO),
              deletar: ButtonDeleteComponent.render({id: novoPatrimonio.CODIGO_BARRAS, funcao: OnDelete, props: novoPatrimonio.CODIGO_BARRAS}),
              component: {
                funcao: AtualizarManutencao,
                props: {
                  id:  "atualizar-manutencao",
                  var: novoPatrimonio
                },
              }
            }
          ]
        })
      }
      document.getElementById("listaBemArticle").innerHTML = ListBaseComponent.render({
        columns: ["Nome", "Quantidade Total"],
        items: lista
      })
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
        value: "sem",
        nome: "  ",
      },
      {
        value: "data-fabri-cres",
        nome: "Data de fabricação",
      },
      {
        value: "data-manu-cres",
        nome: "Data de manutenção",
      },
    ]);
    
    const button = ButtonComponent.render({
          id: "adicionar-produto",
          label: "Adicionar",
          funcao: OpenModal,
          props: "modal-adicionar-produto"
    })

    return `
      <section>
          ${filter}
          <div id="listaBemArticle"></div>
          <div class="button-container">
            ${button}
          </div>
      </section>
    `;
  }
};
