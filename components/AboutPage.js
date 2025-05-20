import { LayoutComponent } from './LayoutComponent.js';
import { AboutComponent } from './AboutComponent.js';

export const AboutPage = {
  render: () => {
    return LayoutComponent.render(
      AboutComponent.render({ descricao: "Essa é a página Sobre usando Layout!" })
    );
  }
};
