import { SetModal } from "./modal.js";

function ToggleMenu() {
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

function ToggleBackground() {
    const outside = document.getElementsByClassName('outside')[0];
    const nav = document.querySelector('nav');
    outside.classList.toggle('close');
    nav.classList.add('close');
    nav.classList.remove('open');
}

function CloseModal() {
    document.getElementById("modal").classList.add('close');
}

function OpenModal(props) {
    SetModal(props);
    document.getElementById("modal").classList.remove('close');
    ToggleBackground();
}