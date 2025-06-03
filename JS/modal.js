import { AtualizarManutencaoComponent } from "../components/AtualizarManutencaoComponent.js";
import { MarcarChegadaComponent } from "../components/MarcarChegadaComponent.js";
import { ModalBaseComponent } from "../components/ModalBaseComponent.js";
import { ToggleBackground } from "../js/menu.js";
import { formatData } from "./helper.js";

export function SetModal(props) {
    const modal = document.getElementById("modal-"+props.id);
    modal.innerHTML = ModalBaseComponent.render({
        title: props.title,
        subtitle: props.subtitle,
        component: props.component,
    })
}

export function AtualizarManutencao(props) {
    SetModal({
        id: props.id,
        title: "Atualizar manutenção",
        subtitle: props.var.NOME_PATRIMONIO,
        component: AtualizarManutencaoComponent.render(props.var)
    })
    OpenModal("modal-"+props.id);
    document.getElementById("ultima-manitencao").value = formatData(props.var.ULTIMA_MANUTENCAO)
}

export function MarcarChegada(props) {
    SetModal({
        id: props.id,
        title: "Marcar chegada",
        subtitle: props.var.PRODUTO_NOME,
        component: MarcarChegadaComponent.render(props.var)
    })
    OpenModal("modal-"+props.id);
    console.log(props.var)
}
export function ExibirNota(props) {
    SetModal({
        id: props.id,
        title: "Nota fiscal",
        subtitle: props.subtitle,
        component: props.body
    })
    OpenModal("modal-"+props.id);
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
