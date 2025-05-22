import { ChangePage } from "../js/button.js";
import { ButtonComponent } from "./ButtonComponent.js";

export const LoginComponent = {
    render: () => {
        return `
        <div class="login-container">
            <img src="assets/opusmed.jpg" alt="Logo OpusMed">
            <form class="form-group">
                <label for="email">Email</label>
                 <input type="email" name="email" id="email">
                 <label for="senha">Senha</label>
                 <input type="password" id="senha" name="senha" required>
            </form>
            <a href="https://img.freepik.com/fotos-premium/vaca-malhada-com-um-piercing-no-nariz-na-normandia-franca_524824-170.jpg" class="link-rodape">Esqueceu sua senha? Clique aqui</a>
            <div>
                ${ButtonComponent.render({id: "login-button", label:"Enviar", funcao: ChangePage, props: "#/dashboard"})}
            </div>
        </div>
    `;
    }
};
