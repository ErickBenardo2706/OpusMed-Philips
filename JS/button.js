import { OpenModal } from "./modal.js";

export function ChangePage(route){
    window.location.href = route;
}

export function OnDelete(){
    OpenModal();
}