import technologies from './technologies';
import { Technology } from './types';

export default class TechnologyHandler {
   private readonly technologies: Technology[] = technologies;

   constructor() {}

   public getTechnologies(): Technology[] {
      return this.technologies;
   }

   updateTechInfo(index: number = -1): void {
      const techNameElement =
         document.querySelector<HTMLElement>('#tech-name')!;
      const techDescriptionElement =
         document.querySelector<HTMLElement>('#tech-description')!;

      if (index >= 0 && this.technologies[index]) {
         techNameElement.textContent = this.technologies[index].name;
         techDescriptionElement.textContent =
            this.technologies[index].description;
      } else {
         setTimeout(() => {
            techNameElement.textContent =
               'Interessado em mais informações sobre alguma tecnologia?';
            techDescriptionElement.textContent =
               'Interaja com a imagem da tecnologia desejada para obter mais informações sobre ela.';
         }, 100);
      }
   }
}
