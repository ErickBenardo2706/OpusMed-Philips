import { ToggleBackground } from "../js/menu.js";
import { CloseModal } from "../js/modal.js";
import { HeaderComponent } from "./HeaderComponent.js";
import { MenuComponent } from "./MenuComponent.js";

export const LayoutComponent = {
  render: (content, title) => {
    setTimeout(() => {
      const el = document.getElementById("background");
      if (el) el.addEventListener("click", ()=>{ToggleBackground(), CloseModal()});
    }, 0);
    return `
      <div>
        <div id="background" class="outside close">
            <div class="background"></div>
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

