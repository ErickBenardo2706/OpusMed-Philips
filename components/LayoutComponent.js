import { ToggleBackground } from "../js/menu.js";
import { CloseModal } from "../js/modal.js";
import { HeaderComponent } from "./HeaderComponent.js";
import { MenuComponent } from "./MenuComponent.js";
import { ModalBaseComponent } from "./ModalBaseComponent.js";
import { NovaCompraComponent } from "./NovaCompraComponent.js";

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
            <div id="modal" class="modal close"></div>
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

