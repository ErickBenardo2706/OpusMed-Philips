import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
import { ToggleBackground } from "./menu.js";

export function SetModal(props){
    console.log(document.getElementById(props.id))
    // document.getElementById(props.id).innerHTML = ModalBaseComponent.render({
    //     subtitle: props.subtitle,
    //     component: props.body
    // })
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
