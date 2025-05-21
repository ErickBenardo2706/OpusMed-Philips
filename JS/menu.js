import { CloseModal } from "./modal.js";

export function ToggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('close');
    nav.classList.toggle('open');
    const outside = document.getElementsByClassName('outside')[0];
    if (!outside.classList.contains('close'))
        CloseModal();
    if (nav.classList.contains('open'))
        outside.classList.remove('close');
    else
    outside.classList.add('close');
}

export function ToggleBackground() {
    const outside = document.getElementsByClassName('outside')[0];
    outside.classList.toggle('close');
    const nav = document.querySelector('nav');
    nav.classList.add('close');
    nav.classList.remove('open');
}