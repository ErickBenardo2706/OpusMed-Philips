import { ToggleBackground } from "../js/menu.js";
import { CloseModal } from "../JS/modal.js";
import { CadastroComponent } from "./CadastroComponent.js";
import { ExcluirItem } from "./ExcluirItem.js";
import { HeaderComponent } from "./HeaderComponent.js";
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
            ${ModalBaseComponent.render({
              id: "modal-nota-fiscal",
              title: "Nota Fiscal",
              component: NotaFiscalComponent.render()
            })}
            ${ModalBaseComponent.render({
              id: "modal-adicionar-produto",
              title: "Adicionar produto",
              component: CadastroComponent.render()
            })}
            ${ModalBaseComponent.render({
              id: "modal-excluir-item",
              title: "Atenção",
              subtitle: "Excluir item",
              component: ExcluirItem.render()
            })}
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

