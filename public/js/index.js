/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/TechnologyHandler.ts":
/*!*************************************!*\
  !*** ./src/ts/TechnologyHandler.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst technologies_1 = __importDefault(__webpack_require__(/*! ./technologies */ \"./src/ts/technologies.ts\"));\nclass TechnologyHandler {\n    constructor() {\n        this.technologies = technologies_1.default;\n    }\n    updateTechInfo(index = -1) {\n        const techNameElement = document.querySelector('#tech-name');\n        const techDescriptionElement = document.querySelector('#tech-description');\n        if (index >= 0 && this.technologies[index]) {\n            techNameElement.textContent = this.technologies[index].name;\n            techDescriptionElement.textContent =\n                this.technologies[index].description;\n        }\n        else {\n            techNameElement.textContent =\n                'Interessado em mais informações sobre alguma tecnologia?';\n            techDescriptionElement.textContent =\n                'Interaja com a imagem da tecnologia desejada para obter mais informações sobre ela.';\n        }\n    }\n    createImage(imageFileName, name) {\n        const img = document.createElement('img');\n        img.src = `img/technologies/${imageFileName}`;\n        img.alt = name;\n        return img;\n    }\n    renderTechImages() {\n        const backendDiv = document.querySelector('#back-end');\n        const databaseDiv = document.querySelector('#database');\n        const toolsDiv = document.querySelector('#tools');\n        if (backendDiv && databaseDiv && toolsDiv) {\n            // Para Backend\n            this.technologies.slice(4, 8).forEach((tech, index) => {\n                const img = this.createImage(tech.imageFileName, tech.name);\n                img.addEventListener('mouseover', () => {\n                    this.updateTechInfo(index + 4);\n                });\n                backendDiv.appendChild(img);\n            });\n            // Para Database\n            this.technologies.slice(8, 10).forEach((tech, index) => {\n                const img = this.createImage(tech.imageFileName, tech.name);\n                img.addEventListener('mouseover', () => {\n                    this.updateTechInfo(index + 8);\n                });\n                databaseDiv.appendChild(img);\n            });\n            // Para Tools\n            this.technologies.slice(10, 14).forEach((tech, index) => {\n                const img = this.createImage(tech.imageFileName, tech.name);\n                img.addEventListener('mouseover', () => {\n                    this.updateTechInfo(index + 10);\n                });\n                toolsDiv.appendChild(img);\n            });\n        }\n    }\n}\nexports[\"default\"] = TechnologyHandler;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/TechnologyHandler.ts?");

/***/ }),

/***/ "./src/ts/dropdown.ts":
/*!****************************!*\
  !*** ./src/ts/dropdown.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst images_1 = __importDefault(__webpack_require__(/*! ./images */ \"./src/ts/images.ts\"));\nfunction handleDropdownItemClick(item, index) {\n    const dropdownToggle = document.querySelector('.dropdown.d-md-none .dropdown-toggle');\n    const dropdownItems = document.querySelectorAll('.dropdown.d-md-none .dropdown-item');\n    dropdownItems.forEach((dropdownItem) => {\n        dropdownItem.classList.remove('active');\n    });\n    item.classList.add('active');\n    dropdownToggle.textContent = item.textContent;\n    (0, images_1.default)(index);\n}\nexports[\"default\"] = handleDropdownItemClick;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/dropdown.ts?");

/***/ }),

/***/ "./src/ts/images.ts":
/*!**************************!*\
  !*** ./src/ts/images.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction changeDivImage(index) {\n    const divs = document.querySelectorAll('.content > div');\n    divs.forEach((div, i) => {\n        if (i === index) {\n            div.classList.remove('d-none');\n            div.classList.add('d-flex');\n        }\n        else {\n            div.classList.add('d-none');\n            div.classList.remove('d-flex');\n        }\n    });\n}\nexports[\"default\"] = changeDivImage;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/images.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst nav_1 = __importDefault(__webpack_require__(/*! ./nav */ \"./src/ts/nav.ts\"));\nconst dropdown_1 = __importDefault(__webpack_require__(/*! ./dropdown */ \"./src/ts/dropdown.ts\"));\nconst TechnologyHandler_1 = __importDefault(__webpack_require__(/*! ./TechnologyHandler */ \"./src/ts/TechnologyHandler.ts\"));\nconst navItems = document.querySelectorAll('.nav.nav-tabs .nav-item button.nav-link');\nconst dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');\nconst techImages = document.querySelectorAll(\".content img\");\nconst techHandler = new TechnologyHandler_1.default();\ndocument.addEventListener('DOMContentLoaded', () => {\n    techHandler.renderTechImages();\n});\nnavItems.forEach((navItem, index) => {\n    navItem.addEventListener('click', () => {\n        (0, nav_1.default)(navItem, index);\n    });\n});\ndropdownItems.forEach((item, index) => {\n    item.addEventListener('click', () => {\n        (0, dropdown_1.default)(item, index);\n    });\n});\ntechImages.forEach((image, index) => {\n    image.addEventListener(\"mouseover\", () => {\n        techHandler.updateTechInfo(index);\n    });\n});\n\n\n//# sourceURL=webpack://portfolio/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/nav.ts":
/*!***********************!*\
  !*** ./src/ts/nav.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst images_1 = __importDefault(__webpack_require__(/*! ./images */ \"./src/ts/images.ts\"));\nfunction handleNavItemClick(navItem, index) {\n    const navLinks = document.querySelectorAll('.nav.nav-tabs .nav-item button.nav-link');\n    navLinks.forEach((navLink) => {\n        navLink.classList.remove('active-option');\n    });\n    navItem.classList.add('active-option');\n    (0, images_1.default)(index);\n}\nexports[\"default\"] = handleNavItemClick;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/nav.ts?");

/***/ }),

/***/ "./src/ts/technologies.ts":
/*!********************************!*\
  !*** ./src/ts/technologies.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst technologies = [\n    {\n        name: \"Angular\",\n        description: \"Angular é um framework de desenvolvimento front-end mantido pelo Google. É uma plataforma poderosa para a construção de aplicativos web dinâmicos e robustos usando TypeScript.\",\n        imageFileName: \"frontend/Angular.svg\"\n    },\n    {\n        name: \"Bootstrap\",\n        description: \"Bootstrap é um framework front-end de código aberto que simplifica o processo de criação de páginas web responsivas e amigáveis para dispositivos móveis, fornecendo uma biblioteca de componentes e estilos predefinidos.\",\n        imageFileName: \"frontend/Bootstrap.svg\"\n    },\n    {\n        name: \"Sass e SCSS\",\n        description: \"Sass (Syntactically Awesome Stylesheets) é uma linguagem de folhas de estilo que estende o CSS, fornecendo recursos como variáveis, aninhamento, mixins e muito mais para facilitar a escrita e a manutenção de estilos em páginas web.\",\n        imageFileName: \"frontend/Sass.svg\"\n    },\n    {\n        name: \"Tailwind CSS\",\n        description: \"Tailwind CSS é um framework de utilitários CSS altamente personalizável que permite a construção rápida de interfaces de usuário por meio da aplicação de classes utilitárias diretamente no HTML, evitando a necessidade de escrever CSS personalizado.\",\n        imageFileName: \"frontend/Tailwind.svg\"\n    },\n    {\n        name: \"ExpressJS\",\n        description: \"Express é um framework de aplicativo web para Node.js, utilizado para criar APIs RESTful e aplicações do lado do servidor de forma simples e eficiente, com suporte para roteamento, middlewares e manipulação de requisições e respostas HTTP.\",\n        imageFileName: \"backend/Express.png\"\n    },\n    {\n        name: \"NestJS\",\n        description: \"NestJS é um framework de aplicativo web Node.js que utiliza conceitos do Angular para proporcionar uma experiência similar ao desenvolvimento backend, facilitando a criação de aplicativos escaláveis e modulares.\",\n        imageFileName: \"backend/NestJS.svg\"\n    },\n    {\n        name: \"SpringBoot\",\n        description: \"Spring Boot é um framework de desenvolvimento Java que simplifica a criação de aplicativos robustos, oferecendo configurações pré-definidas e um ambiente de execução para a construção rápida de aplicativos corporativos.\",\n        imageFileName: \"backend/SpringBoot.svg\"\n    },\n    {\n        name: \"Docker\",\n        description: \"Docker é uma plataforma que permite o desenvolvimento, o empacotamento e a execução de aplicativos em contêineres, oferecendo uma forma de empacotar aplicativos com todas as suas dependências em unidades padronizadas.\",\n        imageFileName: \"backend/Docker.svg\"\n    },\n    {\n        name: \"MySQL\",\n        description: \"MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado. Conhecido por sua confiabilidade, escalabilidade e facilidade de uso, é uma ferramenta crucial para armazenamento de dados estruturados, sendo um pilar essencial para aplicações empresariais e projetos web.\",\n        imageFileName: \"database/MySQL.svg\"\n    },\n    {\n        name: \"MongoDB\",\n        description: \"MongoDB é um banco de dados NoSQL orientado a documentos, altamente escalável e flexível, que permite armazenar dados de forma não estruturada em documentos JSON.\",\n        imageFileName: \"database/MongoDb.svg\"\n    },\n    {\n        name: \"Git\",\n        description: \"Git é um sistema de controle de versão distribuído essencial para o desenvolvimento de software. Reconhecido por sua importância no mercado de trabalho, é fundamental para rastrear alterações em códigos-fonte, facilitar colaborações entre equipes de desenvolvimento e garantir o versionamento eficiente de projetos.\",\n        imageFileName: \"tools/Git.png\"\n    },\n    {\n        name: \"Vite\",\n        description: \"Vite é uma ferramenta de desenvolvimento rápida para a criação de aplicativos web modernos, oferecendo um ambiente de desenvolvimento leve e eficiente para projetos baseados em JavaScript.\",\n        imageFileName: \"tools/Vite.svg\"\n    },\n    {\n        name: \"Webpack\",\n        description: \"Webpack é um empacotador de módulos para aplicações web modernas. É usado para agrupar e processar arquivos JavaScript, HTML, CSS e outros recursos, facilitando o gerenciamento de dependências e a criação de pacotes para produção.\",\n        imageFileName: \"tools/Webpack.svg\"\n    },\n    {\n        name: \"Figma\",\n        description: \"Figma é uma ferramenta de design de interface de usuário baseada na web, que permite o design colaborativo em tempo real, prototipagem e criação de layouts de maneira eficiente.\",\n        imageFileName: \"tools/Figma.svg\"\n    }\n];\nexports[\"default\"] = technologies;\n\n\n//# sourceURL=webpack://portfolio/./src/ts/technologies.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;