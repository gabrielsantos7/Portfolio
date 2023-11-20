import { Technology } from './types';

const technologies: Technology[] = [
  {
    name: "Angular",
    description: "Angular é um framework de desenvolvimento front-end mantido pelo Google. É uma plataforma poderosa para a construção de aplicativos web dinâmicos e robustos usando TypeScript.",
    imageFileName: "frontend/Angular.svg"
  },
  {
    name: "Bootstrap",
    description: "Bootstrap é um framework front-end de código aberto que simplifica o processo de criação de páginas web responsivas e amigáveis para dispositivos móveis, fornecendo uma biblioteca de componentes e estilos predefinidos.",
    imageFileName: "frontend/Bootstrap.svg"
  },
  {
    name: "Sass e SCSS",
    description: "Sass (Syntactically Awesome Stylesheets) é uma linguagem de folhas de estilo que estende o CSS, fornecendo recursos como variáveis, aninhamento, mixins e muito mais para facilitar a escrita e a manutenção de estilos em páginas web.",
    imageFileName: "frontend/Sass.svg"
  },
  {
    name: "Tailwind CSS",
    description: "Tailwind CSS é um framework de utilitários CSS altamente personalizável que permite a construção rápida de interfaces de usuário por meio da aplicação de classes utilitárias diretamente no HTML, evitando a necessidade de escrever CSS personalizado.",
    imageFileName: "frontend/Tailwind.svg"
  },
  {
    name: "ExpressJS",
    description: "Express é um framework de aplicativo web para Node.js, utilizado para criar APIs RESTful e aplicações do lado do servidor de forma simples e eficiente, com suporte para roteamento, middlewares e manipulação de requisições e respostas HTTP.",
    imageFileName: "backend/Express.png"
  },
  {
    name: "NestJS",
    description: "NestJS é um framework de aplicativo web Node.js que utiliza conceitos do Angular para proporcionar uma experiência similar ao desenvolvimento backend, facilitando a criação de aplicativos escaláveis e modulares.",
    imageFileName: "backend/NestJS.svg"
  },
  {
    name: "SpringBoot",
    description: "Spring Boot é um framework de desenvolvimento Java que simplifica a criação de aplicativos robustos, oferecendo configurações pré-definidas e um ambiente de execução para a construção rápida de aplicativos corporativos.",
    imageFileName: "backend/SpringBoot.svg"
  },
  {
    name: "Docker",
    description: "Docker é uma plataforma que permite o desenvolvimento, o empacotamento e a execução de aplicativos em contêineres, oferecendo uma forma de empacotar aplicativos com todas as suas dependências em unidades padronizadas.",
    imageFileName: "backend/Docker.svg"
  },
  {
    name: "MySQL",
    description: "MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado. Conhecido por sua confiabilidade, escalabilidade e facilidade de uso, é uma ferramenta crucial para armazenamento de dados estruturados, sendo um pilar essencial para aplicações empresariais e projetos web.",
    imageFileName: "database/MySQL.svg"
  },
  {
    name: "MongoDB",
    description: "MongoDB é um banco de dados NoSQL orientado a documentos, altamente escalável e flexível, que permite armazenar dados de forma não estruturada em documentos JSON.",
    imageFileName: "database/MongoDb.svg"
  },
  {
    name: "Git",
    description: "Git é um sistema de controle de versão distribuído essencial para o desenvolvimento de software. Reconhecido por sua importância no mercado de trabalho, é fundamental para rastrear alterações em códigos-fonte, facilitar colaborações entre equipes de desenvolvimento e garantir o versionamento eficiente de projetos.",
    imageFileName: "tools/Git.png"
  },
  {
    name: "Vite",
    description: "Vite é uma ferramenta de desenvolvimento rápida para a criação de aplicativos web modernos, oferecendo um ambiente de desenvolvimento leve e eficiente para projetos baseados em JavaScript.",
    imageFileName: "tools/Vite.svg"
  },
  {
    name: "Webpack",
    description: "Webpack é um empacotador de módulos para aplicações web modernas. É usado para agrupar e processar arquivos JavaScript, HTML, CSS e outros recursos, facilitando o gerenciamento de dependências e a criação de pacotes para produção.",
    imageFileName: "tools/Webpack.svg"
  },
  {
    name: "Figma",
    description: "Figma é uma ferramenta de design de interface de usuário baseada na web, que permite o design colaborativo em tempo real, prototipagem e criação de layouts de maneira eficiente.",
    imageFileName: "tools/Figma.svg"
  }
];

export default technologies;
