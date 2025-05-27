import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
import { ToggleBackground } from "../JS/menu.js";

export function SetModal(props) {
    const modal = document.getElementById("modal-"+props.id);
    modal.innerHTML = ModalBaseComponent.render({
        title: props.title,
        subtitle: props.subtitle,
        component: props.component,
    })
}

export function OpenModal(id) {
    document.getElementById(id).classList.remove('close');
    ToggleBackground();
}

export function CloseModal() {
    const modals = document.getElementsByClassName("modal");
    [...modals].forEach(modal => {
        modal.classList.add('close');
    });
}
