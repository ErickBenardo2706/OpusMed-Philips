import { TableComponent } from "./TableComponent.js";

export const FilterComponent = {
    render: (filter, order) => {
        return `
            <div class="filter-container">
                <div class="inputs-line">
                    <div class="search">
                        <input placeholder="Buscar por:" type="text"> 
                        <button>
                            <img src="/assets/search.svg">
                        </button>
                    </div>
                    <div class="order">
                        <select id="order">
                            ${order.map((content)=>{
                                return`
                                    <option value="${content.value}">${content.nome}</option>
                                `
                            })}
                        </select>
                    </div>
                    <label class="filtro-button" for="filter"></label>
                </div>
                <input type="checkbox" id="filter">
                <div class="filter">
                    <h1>Filtros:</h1>
                    <div class="filtros">
                        ${filter.map((content)=>{
                        return`
                            <div class="cols">
                                <h2>${content.title}<h2>
                                ${content.itens.map((content)=>{
                                    return`
                                        <div class="checkbox">
                                            <input type="checkbox" id="${content.id}" value="${content.id}">
                                            <label for="${content.id}"> ${content.nome}</label>
                                        </div>
                                    `
                                }).join('')}
                            </div>
                        `
                        }).join('')}
                    </div>
                </div>
            </div>
    `;
    }
};
