import { OpenModal } from "../js/modal.js";
import { ButtonComponent } from "./ButtonComponent.js";


export const DashboardComponent = {
  render: () => {
    return `
      <section>
        ${ButtonComponent.render({ id: "compra", label: "Nova Compra", funcao: OpenModal, props: { title: "Título", subtitle: "AAAA" }})}
      </section>
    `;
  }
};
