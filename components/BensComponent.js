import { OnDelete } from '../JS/button.js';
import { url } from '../JS/lib.js';
import { OpenModal } from '../js/modal.js';
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
      console.log(patrimonio)
      if (patrimonio){
          lista[patrimonio.id].items.push(
          {
              fabricacao: novoPatrimonio.DATA_FABRICACAO,
              codigo: novoPatrimonio.CODIGO_BARRAS,
              setor: novoPatrimonio.SETOR,
              marca: novoPatrimonio.MARCA,
              manutencao: novoPatrimonio.ULTIMA_MANUTENCAO,
              deletar: ButtonDeleteComponent.render({id: novoPatrimonio.CODIGO_BARRAS, funcao: OnDelete, props: novoPatrimonio.CODIGO_BARRAS})
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
              fabricacao: novoPatrimonio.DATA_FABRICACAO,
              codigo: novoPatrimonio.CODIGO_BARRAS,
              setor: novoPatrimonio.SETOR,
              marca: novoPatrimonio.MARCA,
              manutencao: novoPatrimonio.ULTIMA_MANUTENCAO,
              deletar: ButtonDeleteComponent.render({id: novoPatrimonio.CODIGO_BARRAS, funcao: OnDelete, props: novoPatrimonio.CODIGO_BARRAS})
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

// const list = ListBaseComponent.render({
    //   columns: ["Nome", "Quantidade Total"],
    //   items: [
    //     {
    //       id: 1,
    //       columns: ["Maca", "35"],
    //       items: [
    //         {
    //           fabricacao: "Data de Fabricação",
    //           lote: "Nº Lote",
    //           setor: "Setor",
    //           marca: "Marca",
    //           manutencao:"Última manutenção",
    //           deletar: "Excluir",
    //         },
    //         {
    //           fabricacao: "10/2022",
    //           lote: "5E3W540",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W540",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "10/2022",
    //           lote: "5E3W541",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W541",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "10/2022",
    //           lote: "5E3W542",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W542",
    //             funcao: OnDelete,
    //           }),
    //         },
    //       ]
    //     },
    //     {
    //       id: 2,
    //       columns: ["Raio X", "10"],
    //       items: [
    //         {
    //           fabricacao: "Data de Fabricação",
    //           lote: "Nº Lote",
    //           setor: "Setor",
    //           marca: "Marca",
    //           manutencao: "Última manutenção",
    //           deletar: "Excluir",
    //         },
    //         {
    //           fabricacao: "09/2020",
    //           lote: "5E3W543",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W543",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "09/2020",
    //           lote: "5E3W544",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W544",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "09/2020",
    //           lote: "5E3W545",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W545",
    //             funcao: OnDelete,
    //           }),
    //         },
    //       ]
    //     },
    //     {
    //       id: 3,
    //       columns: ["Cadeira de Rodas", "40"],
    //       items: [
    //         {
    //           fabricacao: "Data de Fabricação",
    //           lote: "Nº Lote",
    //           setor: "Setor",
    //           marca: "Marca",
    //           manutencao: "Última manutenção",
    //           deletar: "Excluir",
    //         },
    //         {
    //           fabricacao: "08/2021",
    //           lote: "5E3W546",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W546",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "08/2021",
    //           lote: "5E3W547",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W547",
    //             funcao: OnDelete,
    //           }),
    //         },
    //         {
    //           fabricacao: "08/2021",
    //           lote: "5E3W548",
    //           setor: "Farmácia",
    //           marca: "Philips",
    //           manutencao: "05/10/2024",
    //           deletar: ButtonDeleteComponent.render({
    //             id: "5E3W548",
    //             funcao: OnDelete,
    //           }),
    //         },
    //       ]
    //     },
    //   ]
    // })
