import { ListItemComponent } from "./ListItemComponent.js";

export const ListBaseComponent = {
    render: (props = {}) => {
        return `
        <section class="list">
            <header>
                <div class="row">
                    ${props.columns?.map((content) => {
                            return `<span>${content}</span>`;
                        }).join('')}
                </div>
            </header>
            <ul class="accordation">
                    ${props.items.map((content)=>{
                        return ListItemComponent.render({
                            id: content.id,
                            columns: content.columns,
                            items: content.items,
                            screen: props.screen,
                        });
                    }).join('')}
            </ul>
        </section>
    `;
    }
};