import { ToggleBackground } from "./menu.js";
import { CloseModal, OpenModal, SetModal } from "../JS/modal.js";

export function ChangePage(route) {
    window.location.href = route;
}

export function OnDelete() {
    OpenModal("modal-excluir-item");
}

export function ConfirmDelete() {
    alert("Item Excluido com sucesso!");
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