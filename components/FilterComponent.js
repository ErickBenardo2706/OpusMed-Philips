export const FilterComponent = {
    render: () => {
        return `
       <div class="container">
            <div class="input">
                <input type="text"> 
                <button class="input_button">
                    <img src="/assets/search.svg">
                </button>
            </div>
            <div class="categoria_suspenso">
                <label for="categoria">Filtrar por: </label>
                <select id="categoria" name="filtro">
                    <option selected></option>
                    <option value="epi">EPI</option>
                    <option value="tarja">Tarja Vermelha</option>
                    <option value="maiorq">Maior quantidade</option>
                    <option value="menorq">Menor quantidade</option>
                </select>
            </div>
        </div>
    `;
    }
};
