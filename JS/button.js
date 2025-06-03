import { ToggleBackground } from "./menu.js";
import { updateScreen } from '../JS/framework.js'
import { url } from '../JS/lib.js';
import { CloseModal, OpenModal, SetModal } from "../js/modal.js";

export function ChangePage(route) {
    window.location.href = route;
}

export function OnDelete(cdBarras) {
    OpenModal("modal-excluir-item");
    
    setTimeout(() => {
      const el = document.getElementById("confirmarExclusao");
      if (el) {
        const handler = (e)=>ConfirmDelete(cdBarras)
        el.onclick = handler
      };
    }, 0);
}

export function ConfirmDelete(cdBarras) {
    console.log(cdBarras);
    fetch(`${url}/patrimonios/${cdBarras}`, {
        method: "DELETE",
    })
    .then(response => response.json())
    .then(resposta => {
      console.log(resposta)
      updateScreen();
    })
    CloseModal();
    ToggleBackground();
}

export function handleClick(component) {
    if (component.body) {
        SetModal({
            id: component.id,
            title: component.title,
            subtitle: component.subtitle,
            component: component.body,
        });
    }
    OpenModal(`modal-${component.id}`);
}