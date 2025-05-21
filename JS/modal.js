import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
// {title: "Título", subtitle: "Subtítulo"}
let currentModal;

export function SetModal(props){
    currentModal = ModalBaseComponent.render(props)
}

export function DisplayModal(){
    return currentModal;
}