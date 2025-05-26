import { CloseModal } from "./modal.js";

export function ToggleMenu() {
    const nav = document.querySelector('nav');
    const name_user = document.querySelector('.name_user');
    const outside = document.getElementsByClassName('outside')[0];

    nav.classList.toggle('close');
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        // Se o menu estiver aberto, mostra o nome
        name_user?.classList.remove('close');
        outside.classList.remove('close');
    } else {
        // Se o menu estiver fechado, esconde o nome
        name_user?.classList.add('close');
        outside.classList.add('close');
    }

    if (!outside.classList.contains('close')) {
        CloseModal();
    }
}

export function ToggleBackground() {
    const nav = document.querySelector('nav');
    const outside = document.getElementsByClassName('outside')[0];
    const name_user = document.querySelector('.name_user');

    outside.classList.toggle('close');
    nav.classList.add('close');
    nav.classList.remove('open');
    name_user?.classList.add('close');
}
