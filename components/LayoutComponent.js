import { ToggleBackground } from "../JS/menu.js";
import { CloseModal } from "../JS/modal.js";
import { CadastroComponent } from "./CadastroComponent.js";
import { ExcluirItem } from "./ExcluirItem.js";
import { HeaderComponent } from "./HeaderComponent.js";
import { MarcarChegadaComponent } from "./MarcarChegadaComponent.js";
import { MenuComponent } from "./MenuComponent.js";
import { ModalBaseComponent } from "./ModalBaseComponent.js";
import { NotaFiscalComponent } from "./NotaFiscalComponent.js";

export const LayoutComponent = {
  render: (content, title) => {
    setTimeout(() => {
      const el = document.getElementById("background");
      if (el) el.addEventListener("click", ()=>{
        CloseModal();
        ToggleBackground();
      });
    }, 0);
    return `
      <div>
        <div class="outside close">
            <div id="background" class="background"></div>
            
            <div id="modal-nota-fiscal" class="modal close">
              ${ModalBaseComponent.render({
                id: "nota-fiscal",
                title: "Nota Fiscal",
                component: NotaFiscalComponent.render()
              })}
            </div>
            <div id="modal-adicionar-produto" class="modal close">
              ${ModalBaseComponent.render({
                id: "adicionar-produto",
                title: "Adicionar produto",
                component: CadastroComponent.render()
              })}
            </div>
            <div id="modal-excluir-item" class="modal close">
              ${ModalBaseComponent.render({
                id: "excluir-item",
                title: "Atenção",
                subtitle: "Excluir item",
                component: ExcluirItem.render()
              })}
            </div>
            <div id="modal-marcar-chegada" class="modal close">
              ${ModalBaseComponent.render({
                id: "marcar-chegada",
                title: "Marcar chegada",
                component: MarcarChegadaComponent.render()
              })}
            </div>
        </div>
          ${HeaderComponent.render()}
          ${MenuComponent.render(title)}
        <main>
          ${content}
        </main>
      </div>
              `;
  }
};