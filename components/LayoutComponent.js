import { AboutComponent } from "./AboutComponent.js";
import { HeaderComponent } from "./HeaderComponent.js";
import { MenuComponent } from "./MenuComponent.js";
import { ModalBaseComponent } from "./ModalBaseComponent.js";

export const LayoutComponent = {
  render: (content, title) => {
    return `
      <div>
        <div class="outside close">
            <div onclick="CloseModal(), ToggleBackground()" class="background"></div>
            ${ModalBaseComponent.render({
              id: "modal1",
              title: "Titulo",
              subtitle: "Subtitulo legal",
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

