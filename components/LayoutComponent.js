import { AboutComponent } from "./AboutComponent.js";
import { HeaderComponent } from "./HeaderComponent.js";
import { MenuComponent } from "./MenuComponent.js";
import { ModalBaseComponent } from "./ModalBaseComponent.js";
import { NovaCompraComponent } from "./NovaCompraComponent.js";

export const LayoutComponent = {
  render: (content, title) => {
    return `
      <div>
        <div class="outside close">
            <div onclick="CloseModal(), ToggleBackground()" class="background"></div>
            ${ModalBaseComponent.render({
              id: "modal1",
              title: "Nova Compra",
              subtitle: "Subtitulo legal",
              component: NovaCompraComponent.render(),
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

