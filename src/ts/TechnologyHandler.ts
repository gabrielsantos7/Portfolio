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
         techNameElement.textContent =
            'Interessado em mais informações sobre alguma tecnologia?';
         techDescriptionElement.textContent =
            'Interaja com a imagem da tecnologia desejada para obter mais informações sobre ela.';
      }
   }

   public createTechImages(): void {
      const backendDiv = document.querySelector('#back-end');
      const databaseDiv = document.querySelector('#database');
      const toolsDiv = document.querySelector('#tools');

      if (backendDiv && databaseDiv && toolsDiv) {
         // Para Backend
         this.technologies.slice(4, 8).forEach((tech, index) => {
            const img = document.createElement('img');
            img.src = `img/technologies/backend/${tech.imageFileName}`;
            img.alt = tech.name;

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 4);
            });

            backendDiv.appendChild(img);
         });

         // Para Database
         this.technologies.slice(8, 10).forEach((tech, index) => {
            const img = document.createElement('img');
            img.src = `img/technologies/database/${tech.imageFileName}`;
            img.alt = tech.name;

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 8);
            });

            databaseDiv.appendChild(img);
         });

         // Para Tools
         this.technologies.slice(10, 14).forEach((tech, index) => {
            const img = document.createElement('img');
            img.src = `img/technologies/tools/${tech.imageFileName}`;
            img.alt = tech.name;

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 10);
            });

            toolsDiv.appendChild(img);
         });
      }
   }
}
