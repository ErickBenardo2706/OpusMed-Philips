import { ToggleMenu } from "../js/menu.js";

export const HeaderComponent = {
    render: () => {
        setTimeout(() => {
            const name = document.getElementById("name").value
            
            const el = document.getElementById("menu-button");

            if (el) el.addEventListener("click", ToggleMenu);
        }, 0);
        return `
        <header>
            <nav class="close">
                <button id="menu-button" class="button">
                    <i class="fi fi-rs-burger-menu"></i>

                    
                    <span>Menu</span>
                </button>
                     <div class="name_user close">
                        <img src="./assets/user.png"> <br>
                        <label>Seja Bem-Vindo</label>
                    <label id="name" >Hisabela</label>
                
                </div>
               

                <div>
                    <ul>
                        <li>
                            <a class="button" href="#/dashboard">
                                <i class="fi fi-rr-stats"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a class="button" href="#/estoque">
                                <i class="fi fi-rs-box-open-full"></i>
                                <span>Estoque</span>
                            </a>
                        </li>
                        <li>
                            <a class="button" href="#/bens">
                                <i class="fi fi-rr-stretcher"></i>
                                <span>Bens</span>
                            </a>
                        </li>
                        <li>
                            <a class="button" href="#/movimentos">
                                <i class="fi fi-rs-map-location-track"></i>
                                <span>Movimentos</span>
                            </a>
                        </li>
                        <li>
                            <a class="button" href="#/compras">
                                <i class="fi fi-rs-shopping-cart-add"></i>
                                    <span>Compras</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a class="button" href="#/">
                    <i class="fi fi-rs-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </nav>
        </header>
    `;
    }
};
