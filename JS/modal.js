import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
import { ToggleBackground } from "./menu.js";

let currentModal = ModalBaseComponent.render({title: "Título", subtitle: "Subtítulo"});

export function SetModal(props){
    document.getElementById("modal").innerHTML = ModalBaseComponent.render(props);
}

export function OpenModal(props) {
    console.log(props.component);
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
