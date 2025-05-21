import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
import { ToggleBackground } from "./menu.js";

let currentModal = ModalBaseComponent.render({title: "Título", subtitle: "Subtítulo"});

export function SetModal(props){
    document.getElementById("modal").innerHTML = ModalBaseComponent.render(props);
    console.log(currentModal);
}

export function OpenModal(props) {
    SetModal(props);
    document.getElementById("modal").classList.remove('close');
    ToggleBackground()
}

export function DisplayModal(){
    return currentModal;
}

export function CloseModal() {
    document.getElementById("modal").classList.add('close');
}
