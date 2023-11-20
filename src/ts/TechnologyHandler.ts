import technologies from './technologies';
import { Technology } from './types';

export default class TechnologyHandler {
   private readonly technologies: Technology[] = technologies;

   constructor() {}

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

   private createImage(imageFileName: string, name: string): HTMLImageElement {
      const img = document.createElement('img');
      img.src = `img/technologies/${imageFileName}`;
      img.alt = name;

      return img;
   }

   public renderTechImages(): void {
      const backendDiv = document.querySelector('#back-end');
      const databaseDiv = document.querySelector('#database');
      const toolsDiv = document.querySelector('#tools');

      if (backendDiv && databaseDiv && toolsDiv) {
         // Para Backend
         this.technologies.slice(4, 8).forEach((tech, index) => {
            const img = this.createImage(tech.imageFileName, tech.name)

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 4);
            });

            backendDiv.appendChild(img);
         });

         // Para Database
         this.technologies.slice(8, 10).forEach((tech, index) => {
          const img = this.createImage(tech.imageFileName, tech.name)

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 8);
            });

            databaseDiv.appendChild(img);
         });

         // Para Tools
         this.technologies.slice(10, 14).forEach((tech, index) => {
          const img = this.createImage(tech.imageFileName, tech.name)

            img.addEventListener('mouseover', () => {
               this.updateTechInfo(index + 10);
            });

            toolsDiv.appendChild(img);
         });
      }
   }
}
