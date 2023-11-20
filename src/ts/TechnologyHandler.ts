import technologies from './technologies';
import { Technology } from './types';

export default class TechnologyHandler {
   private readonly technologies: Technology[] = technologies;

   constructor() {}

   public getTechnologies(): Technology[] {
      return this.technologies;
   }

   updateTechInfo(index: number): void {
      const techNameElement =
         document.querySelector<HTMLElement>('#tech-name')!;
      const techDescriptionElement =
         document.querySelector<HTMLElement>('#tech-description')!;

      if (this.technologies[index]) {
         techNameElement.textContent = this.technologies[index].name;
         techDescriptionElement.textContent =
            this.technologies[index].description;
      }
   }
}
