/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/close-mobileModal.svg":
/*!******************************************!*\
  !*** ./src/assets/close-mobileModal.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c733c95100e5d68036e3.svg";

/***/ }),

/***/ "./src/assets/icon-live.png":
/*!**********************************!*\
  !*** ./src/assets/icon-live.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2a0741608e07a437198.png";

/***/ }),

/***/ "./src/assets/icon-source.png":
/*!************************************!*\
  !*** ./src/assets/icon-source.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b41840c8f3fb646da1cf.png";

/***/ }),

/***/ "./src/assets/img/awc2022/mock_awc.png":
/*!*********************************************!*\
  !*** ./src/assets/img/awc2022/mock_awc.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e18aba8690d026e62cf5.png";

/***/ }),

/***/ "./src/assets/img/bookstore/mock_bookstore.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/bookstore/mock_bookstore.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "288537a66c5862aaeaa9.png";

/***/ }),

/***/ "./src/assets/img/leaderboard/mock_ldb.png":
/*!*************************************************!*\
  !*** ./src/assets/img/leaderboard/mock_ldb.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1720c83a31031e2debb.png";

/***/ }),

/***/ "./src/assets/img/math-magicians/mock_math.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/math-magicians/mock_math.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbec42aa4cf884e24399.png";

/***/ }),

/***/ "./src/assets/img/pokemon/mock_pokemon.png":
/*!*************************************************!*\
  !*** ./src/assets/img/pokemon/mock_pokemon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da39cf9d6c447c64b96f.png";

/***/ }),

/***/ "./src/assets/img/primeshows/mock_api.png":
/*!************************************************!*\
  !*** ./src/assets/img/primeshows/mock_api.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50473038b36844ef9139.png";

/***/ }),

/***/ "./src/assets/img/space-travelers-hub/mock_space.png":
/*!***********************************************************!*\
  !*** ./src/assets/img/space-travelers-hub/mock_space.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c82fc76c76393d128da2.png";

/***/ }),

/***/ "./src/assets/img/to-do-list/mock_tdl.png":
/*!************************************************!*\
  !*** ./src/assets/img/to-do-list/mock_tdl.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b06dd1e3090ac8346c0.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/close-mobileModal.svg */ "./src/assets/close-mobileModal.svg");
/* harmony import */ var _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-live.png */ "./src/assets/icon-live.png");
/* harmony import */ var _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-source.png */ "./src/assets/icon-source.png");
/* harmony import */ var _assets_img_awc2022_mock_awc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/awc2022/mock_awc.png */ "./src/assets/img/awc2022/mock_awc.png");
/* harmony import */ var _assets_img_to_do_list_mock_tdl_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/to-do-list/mock_tdl.png */ "./src/assets/img/to-do-list/mock_tdl.png");
/* harmony import */ var _assets_img_leaderboard_mock_ldb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/leaderboard/mock_ldb.png */ "./src/assets/img/leaderboard/mock_ldb.png");
/* harmony import */ var _assets_img_primeshows_mock_api_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/primeshows/mock_api.png */ "./src/assets/img/primeshows/mock_api.png");
/* harmony import */ var _assets_img_math_magicians_mock_math_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/math-magicians/mock_math.png */ "./src/assets/img/math-magicians/mock_math.png");
/* harmony import */ var _assets_img_bookstore_mock_bookstore_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/bookstore/mock_bookstore.png */ "./src/assets/img/bookstore/mock_bookstore.png");
/* harmony import */ var _assets_img_space_travelers_hub_mock_space_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/space-travelers-hub/mock_space.png */ "./src/assets/img/space-travelers-hub/mock_space.png");
/* harmony import */ var _assets_img_pokemon_mock_pokemon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/pokemon/mock_pokemon.png */ "./src/assets/img/pokemon/mock_pokemon.png");













const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'AWC 2022',
    img: _assets_img_awc2022_mock_awc_png__WEBPACK_IMPORTED_MODULE_4__,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: _assets_img_awc2022_mock_awc_png__WEBPACK_IMPORTED_MODULE_4__,
    imgD: _assets_img_awc2022_mock_awc_png__WEBPACK_IMPORTED_MODULE_4__,
    name: 'Asia Web Conference 2022',
    lang: ['HTML', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone01/',
    sourceLink: 'https://github.com/mavericks-db/capstone01',
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'To-Do List',
    img: _assets_img_to_do_list_mock_tdl_png__WEBPACK_IMPORTED_MODULE_5__,
    li: ['Webpack', 'Sass', 'JavaScript', 'Linters'],
    imgM: _assets_img_to_do_list_mock_tdl_png__WEBPACK_IMPORTED_MODULE_5__,
    imgD: _assets_img_to_do_list_mock_tdl_png__WEBPACK_IMPORTED_MODULE_5__,
    name: 'To-Do List App',
    lang: ['Webpack', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/todo-list',
    description: 'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: _assets_img_leaderboard_mock_ldb_png__WEBPACK_IMPORTED_MODULE_6__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_leaderboard_mock_ldb_png__WEBPACK_IMPORTED_MODULE_6__,
    imgD: _assets_img_leaderboard_mock_ldb_png__WEBPACK_IMPORTED_MODULE_6__,
    name: 'Leaderboard App',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/leaderboard',
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Prime Shows HD',
    img: _assets_img_primeshows_mock_api_png__WEBPACK_IMPORTED_MODULE_7__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_primeshows_mock_api_png__WEBPACK_IMPORTED_MODULE_7__,
    imgD: _assets_img_primeshows_mock_api_png__WEBPACK_IMPORTED_MODULE_7__,
    name: 'Prime Shows HD',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone02/dist/',
    sourceLink: 'https://github.com/mavericks-db/capstone02',
    description: 'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team). Built with API, Webpack, HTML, Sass and JavaScript.',
  },
  {
    h3: 'Math Magicians',
    img: _assets_img_math_magicians_mock_math_png__WEBPACK_IMPORTED_MODULE_8__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_math_magicians_mock_math_png__WEBPACK_IMPORTED_MODULE_8__,
    imgD: _assets_img_math_magicians_mock_math_png__WEBPACK_IMPORTED_MODULE_8__,
    name: 'Math Magicians',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-math-magicians.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/math-magicians',
    description: 'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote. Built with React, Sass and JavaScript.',
  },
  {
    h3: 'Bookstore CMS',
    img: _assets_img_bookstore_mock_bookstore_png__WEBPACK_IMPORTED_MODULE_9__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_bookstore_mock_bookstore_png__WEBPACK_IMPORTED_MODULE_9__,
    imgD: _assets_img_bookstore_mock_bookstore_png__WEBPACK_IMPORTED_MODULE_9__,
    name: 'Bookstore CMS',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-bookstore-cms.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/bookstore',
    description: 'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book. Built with React, Sass and JavaScript.',
  },
  {
    h3: 'Space Travelers- Hub',
    img: _assets_img_space_travelers_hub_mock_space_png__WEBPACK_IMPORTED_MODULE_10__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_space_travelers_hub_mock_space_png__WEBPACK_IMPORTED_MODULE_10__,
    imgD: _assets_img_space_travelers_hub_mock_space_png__WEBPACK_IMPORTED_MODULE_10__,
    name: 'Space Travelers- Hub',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-space-travelers-hub.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/space-travelers-hub',
    description: 'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Built with React, Redux Toolkit, API, Sass and JavaScript.',
  },
  {
    h3: 'Pokemon Web App',
    img: _assets_img_pokemon_mock_pokemon_png__WEBPACK_IMPORTED_MODULE_11__,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: _assets_img_pokemon_mock_pokemon_png__WEBPACK_IMPORTED_MODULE_11__,
    imgD: _assets_img_pokemon_mock_pokemon_png__WEBPACK_IMPORTED_MODULE_11__,
    name: 'Pokemon Web App',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-pokemon-webapp.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/capstone03',
    description: 'Microverse React Capstone Project: This educational project is to build a mobile web application to check a list of metrics (numeric values) using React and Redux. Built with React, Redux Toolkit, API, Sass and JavaScript.',
  },
];

// Create Card Items Dynamically
const gridItem = [];
const descriptionContainer = [];
const h3 = [];
const ul = [];
const li1 = [];
const li2 = [];
const li3 = [];
const li4 = [];
const button1 = [];
const button2 = [];

for (let i = 0; i < cardObj.length; i += 1) {
  gridItem[i] = document.createElement('div');
  gridItem[i].classList.add('gridItem');
  gridItem[i].style.backgroundImage = `url(${cardObj[i].img})`;

  descriptionContainer[i] = document.createElement('div');
  descriptionContainer[i].classList.add('descriptionContainer');

  h3[i] = document.createElement('h3');
  const h3text = document.createTextNode(cardObj[i].h3);
  h3[i].append(h3text);

  ul[i] = document.createElement('ul');
  li1[i] = document.createElement('li');
  const li1text = document.createTextNode(cardObj[i].li[0]);
  li1[i].append(li1text);

  li2[i] = document.createElement('li');
  const li2text = document.createTextNode(cardObj[i].li[1]);
  li2[i].append(li2text);

  li3[i] = document.createElement('li');
  const li3text = document.createTextNode(cardObj[i].li[2]);
  li3[i].append(li3text);

  li4[i] = document.createElement('li');
  const li4text = document.createTextNode(cardObj[i].li[3]);
  li4[i].append(li4text);

  button1[i] = document.createElement('button');
  const button1text = document.createTextNode('See Project');
  button1[i].append(button1text);
  button1[i].setAttribute('type', 'button');
  button1[i].classList.add('seeProject');
  button1[i].setAttribute('aria-label', 'See Project Button');
  button1[i].setAttribute('data-index', i);

  button2[i] = document.createElement('button');
  const button2text = document.createTextNode('See Project');
  button2[i].append(button2text);
  button2[i].setAttribute('type', 'button');
  button2[i].classList.add('seeProjectDesktop');
  button2[i].setAttribute('aria-label', 'See Project Button');
  button2[i].setAttribute('data-index', i);

  ul[i].append(li1[i], li2[i], li3[i], li4[i]);
  descriptionContainer[i].append(h3[i], ul[i], button1[i], button2[i]);
  gridItem[i].append(descriptionContainer[i]);
  gridContainer.append(gridItem[i]);
}

const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  modalContainer.style.display = 'none';
}

window.onclick = function global(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);

// Mobile Modal
const seeProject = document.querySelectorAll('.seeProject');

// Create div mobileModal dynamically
const mobileModal = [];

for (let i = 0; i < gridItem.length; i += 1) {
  mobileModal[i] = document.createElement('div');
  mobileModal[i].classList.add('mobileModal');
  gridItem[i].append(mobileModal[i]);
}

function openMobileModal(e) {
  const i = e.target.dataset.index;
  mobileModal[i].style.display = 'block';
  const div1 = document.createElement('div');
  div1.classList.add('mobileMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeMobile');
  img1.setAttribute('src', _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__);
  function closeMobileModal() {
    mobileModal[i].style.display = 'none';
    div1.remove();
  }
  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgMobile');
  img2.setAttribute('src', cardObj[i].imgM);
  const h2 = document.createElement('h2');
  h2.classList.add('projectName');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li0text = document.createTextNode(cardObj[i].lang[0]);
  const li1text = document.createTextNode(cardObj[i].lang[1]);
  const li2text = document.createTextNode(cardObj[i].lang[2]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  ul.append(li0, li1, li2);

  const p = document.createElement('p');
  p.classList.add('projectDescription');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerMobile');
  const a1 = document.createElement('a');
  a1.classList.add('liveBtn');
  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].liveLink;
  const imga1 = document.createElement('img');
  imga1.setAttribute('src', _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__);
  a2.appendChild(imga2);

  div1.appendChild(img1);
  div1.appendChild(img2);
  div1.appendChild(h2);
  div1.appendChild(ul);
  div1.appendChild(p);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div1.appendChild(div2);
  mobileModal[i].appendChild(div1);
}

seeProject.forEach((element) => {
  element.addEventListener('click', openMobileModal);
});

// Desktop Modal
const seeProjectDesktop = document.querySelectorAll('.seeProjectDesktop');
const desktopModal = document.querySelector('.desktopModal');

function openDesktopModal(e) {
  const i = e.target.dataset.index;
  desktopModal.style.display = 'block';

  const div1 = document.createElement('div');
  div1.classList.add('desktopMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeDesktop');
  img1.setAttribute('src', _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__);

  function closeMobileModal() {
    desktopModal.style.display = 'none';
    div1.remove();
  }

  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgDesktop');
  img2.setAttribute('src', cardObj[i].imgD);

  const div3 = document.createElement('div');
  div3.classList.add('desktopModalHeadline');

  const h2 = document.createElement('h2');
  h2.classList.add('projectNameDesktop');
  h2.innerHTML = cardObj[i].name;

  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li0text = document.createTextNode(cardObj[i].langDesktop[0]);
  const li1text = document.createTextNode(cardObj[i].langDesktop[1]);
  const li2text = document.createTextNode(cardObj[i].langDesktop[2]);
  const li3text = document.createTextNode(cardObj[i].langDesktop[3]);
  const li4text = document.createTextNode(cardObj[i].langDesktop[4]);
  const li5text = document.createTextNode(cardObj[i].langDesktop[5]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  li3.appendChild(li3text);
  li4.appendChild(li4text);
  li5.appendChild(li5text);
  ul.append(li0, li1, li2, li3, li4, li5);

  const p = document.createElement('p');
  p.classList.add('projectDescriptionDesktop');
  p.innerText = cardObj[i].description;

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerDesktop');

  const a1 = document.createElement('a');
  a1.classList.add('liveBtnDesktop');

  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = cardObj[i].liveLink;

  const imga1 = document.createElement('img');
  imga1.setAttribute('src', _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');

  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;

  const imga2 = document.createElement('img');
  imga2.setAttribute('src', _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__);
  a2.appendChild(imga2);
  div1.appendChild(img1);
  div1.appendChild(img2);
  div3.appendChild(h2);
  div1.appendChild(div3);
  div1.appendChild(ul);
  div1.appendChild(p);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div3.appendChild(div2);
  desktopModal.appendChild(div1);
}

seeProjectDesktop.forEach((element) => {
  element.addEventListener('click', openDesktopModal);
});

// Form Validation - Mobile
const formMobile = document.querySelector('.formMobile');
const nameInputMobile = document.querySelector('.nameInputMobile');
const emailInputMobile = document.querySelector('.emailInputMobile');
const messageInputMobile = document.querySelector('.messageInputMobile');
const submitBtnMobile = document.querySelector('.submitBtnMobile');
let isFormValid = false;

// Local Storage - Mobile & Desktop
let formObj = {
  fullNameMobile: '',
  emailMobile: '',
  messageMobile: '',
  firstName: '',
  lastName: '',
  emailDesktop: '',
  messageDesktop: '',
};

function storeInlS() {
  localStorage.setItem('myData', JSON.stringify(formObj));
}

function validation() {
  const str = emailInputMobile.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnMobile.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page');
    submitBtnMobile.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formMobile.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
  if (isFormValid) {
    submitBtnMobile.setCustomValidity('The form has been submitted. \n Thank you for contacting me.');
    submitBtnMobile.reportValidity();
    formMobile.submit();
  }
});

// Form Validation - Desktop
const formDesktop = document.querySelector('.formDesktop');
const nameInputDesktop1 = document.querySelector('.nameInputDesktop1');
const nameInputDesktop2 = document.querySelector('.nameInputDesktop2');
const emailInputDesktop = document.querySelector('.emailInputDesktop');
const messageInputDesktop = document.querySelector('.messageInputDesktop');
const submitBtnDesktop = document.querySelector('.submitBtnDesktop');

function validationDesktop() {
  const str = emailInputDesktop.value.trim();
  const regEx = /[A-Z]/g;
  if (regEx.test(str)) {
    submitBtnDesktop.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \n Please check your inputs and reload the page.');
    submitBtnDesktop.reportValidity();
    isFormValid = false;
    storeInlS();
  } else {
    isFormValid = true;
  }
  return isFormValid;
}

formDesktop.addEventListener('submit', (e) => {
  e.preventDefault();
  validationDesktop();
  if (isFormValid) {
    submitBtnDesktop.setCustomValidity('The form has been submitted. \n Thank you for contacting me.');
    submitBtnDesktop.reportValidity();
    formDesktop.submit();
  }
});

// Local Storage - Mobile & Desktop
const keys = Object.keys(formObj);
function storeItem(e) {
  const keyNum = keys.indexOf(e.target.name);
  formObj[keys[keyNum]] = e.target.value;
}

nameInputMobile.addEventListener('input', storeItem);
emailInputMobile.addEventListener('input', storeItem);
messageInputMobile.addEventListener('input', storeItem);
nameInputDesktop1.addEventListener('input', storeItem);
nameInputDesktop2.addEventListener('input', storeItem);
emailInputDesktop.addEventListener('input', storeItem);
messageInputDesktop.addEventListener('input', storeItem);

function placeItems() {
  nameInputMobile.value = formObj.fullNameMobile;
  emailInputMobile.value = formObj.emailMobile;
  messageInputMobile.value = formObj.messageMobile;
  nameInputDesktop1.value = formObj.firstName;
  nameInputDesktop2.value = formObj.lastName;
  emailInputDesktop.value = formObj.emailDesktop;
  messageInputDesktop.value = formObj.messageDesktop;
}

window.onload = function retrieve() {
  if (localStorage.getItem('myData')) {
    formObj = JSON.parse(localStorage.getItem('myData'));
    placeItems();
  } else {
    localStorage.clear();
  }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQjtBQUM2QjtBQUNUO0FBQ0k7QUFDVTtBQUNHO0FBQ0M7QUFDRDtBQUNNO0FBQ0E7QUFDTztBQUNSOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQU87QUFDaEI7QUFDQSxVQUFVLDZEQUFPO0FBQ2pCLFVBQVUsNkRBQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLGdFQUFPO0FBQ2hCO0FBQ0EsVUFBVSxnRUFBTztBQUNqQixVQUFVLGdFQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyxpRUFBTztBQUNoQjtBQUNBLFVBQVUsaUVBQU87QUFDakIsVUFBVSxpRUFBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsZ0VBQU87QUFDaEI7QUFDQSxVQUFVLGdFQUFPO0FBQ2pCLFVBQVUsZ0VBQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLHFFQUFRO0FBQ2pCO0FBQ0EsVUFBVSxxRUFBUTtBQUNsQixVQUFVLHFFQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyxxRUFBUTtBQUNqQjtBQUNBLFVBQVUscUVBQVE7QUFDbEIsVUFBVSxxRUFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsNEVBQVM7QUFDbEI7QUFDQSxVQUFVLDRFQUFTO0FBQ25CLFVBQVUsNEVBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLGtFQUFXO0FBQ3BCO0FBQ0EsVUFBVSxrRUFBVztBQUNyQixVQUFVLGtFQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBLDZDQUE2QyxlQUFlOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwwREFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBTTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiwwREFBSzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0RBQUk7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0RBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Fzc2V0cy9jbG9zZS1tb2JpbGVNb2RhbC5zdmcnO1xuaW1wb3J0IGxpdmUgZnJvbSAnLi9hc3NldHMvaWNvbi1saXZlLnBuZyc7XG5pbXBvcnQgc291cmNlIGZyb20gJy4vYXNzZXRzL2ljb24tc291cmNlLnBuZyc7XG5pbXBvcnQgbW9ja0F3YyBmcm9tICcuL2Fzc2V0cy9pbWcvYXdjMjAyMi9tb2NrX2F3Yy5wbmcnO1xuaW1wb3J0IG1vY2tUZGwgZnJvbSAnLi9hc3NldHMvaW1nL3RvLWRvLWxpc3QvbW9ja190ZGwucG5nJztcbmltcG9ydCBtb2NrTGRiIGZyb20gJy4vYXNzZXRzL2ltZy9sZWFkZXJib2FyZC9tb2NrX2xkYi5wbmcnO1xuaW1wb3J0IG1vY2tBcGkgZnJvbSAnLi9hc3NldHMvaW1nL3ByaW1lc2hvd3MvbW9ja19hcGkucG5nJztcbmltcG9ydCBtb2NrTWF0aCBmcm9tICcuL2Fzc2V0cy9pbWcvbWF0aC1tYWdpY2lhbnMvbW9ja19tYXRoLnBuZyc7XG5pbXBvcnQgbW9ja0Jvb2sgZnJvbSAnLi9hc3NldHMvaW1nL2Jvb2tzdG9yZS9tb2NrX2Jvb2tzdG9yZS5wbmcnO1xuaW1wb3J0IG1vY2tTcGFjZSBmcm9tICcuL2Fzc2V0cy9pbWcvc3BhY2UtdHJhdmVsZXJzLWh1Yi9tb2NrX3NwYWNlLnBuZyc7XG5pbXBvcnQgbW9ja1Bva2Vtb24gZnJvbSAnLi9hc3NldHMvaW1nL3Bva2Vtb24vbW9ja19wb2tlbW9uLnBuZyc7XG5cbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZENvbnRhaW5lcicpO1xuXG4vLyBQcm9qZWN0IERhdGFcbmNvbnN0IGNhcmRPYmogPSBbXG4gIHtcbiAgICBoMzogJ0FXQyAyMDIyJyxcbiAgICBpbWc6IG1vY2tBd2MsXG4gICAgbGk6IFsnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGltZ006IG1vY2tBd2MsXG4gICAgaW1nRDogbW9ja0F3YyxcbiAgICBuYW1lOiAnQXNpYSBXZWIgQ29uZmVyZW5jZSAyMDIyJyxcbiAgICBsYW5nOiBbJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnR2l0SHViJywgJ1ZTIENvZGUnLCAnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2NhcHN0b25lMDEvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9jYXBzdG9uZTAxJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgRmlyc3QgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIG1ha2UgYSB3ZWJzaXRlIGZvciBhIHdlYiBjb25mZXJlbmNlIGV2ZW50IHdpdGggaG9tZSBwYWdlIGFuZCBhYm91dCBwYWdlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1RvLURvIExpc3QnLFxuICAgIGltZzogbW9ja1RkbCxcbiAgICBsaTogWydXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgaW1nTTogbW9ja1RkbCxcbiAgICBpbWdEOiBtb2NrVGRsLFxuICAgIG5hbWU6ICdUby1EbyBMaXN0IEFwcCcsXG4gICAgbGFuZzogWydXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0dpdEh1YicsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby90b2RvLWxpc3QvZGlzdC9pbmRleC5odG1sJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi90b2RvLWxpc3QnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhbiBlZHVjYXRpb25hbCBwcm9qZWN0IHRvIG1ha2UgYSB0b29sIHRoYXQgaGVscHMgdG8gb3JnYW5pemUgeW91ciBkYXkuIEl0IHNpbXBseSBsaXN0cyB0aGUgdGhpbmdzIHRoYXQgeW91IG5lZWQgdG8gZG8gYW5kIGFsbG93cyB5b3UgdG8gbWFyayB0aGVtIGFzIGNvbXBsZXRlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0xlYWRlcmJvYXJkJyxcbiAgICBpbWc6IG1vY2tMZGIsXG4gICAgbGk6IFsnQVBJJywgJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja0xkYixcbiAgICBpbWdEOiBtb2NrTGRiLFxuICAgIG5hbWU6ICdMZWFkZXJib2FyZCBBcHAnLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9sZWFkZXJib2FyZC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2xlYWRlcmJvYXJkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBjcmVhdGUgYSB3ZWJzaXRlIHdoaWNoIGRpc3BsYXlzIHNjb3JlcyBzdWJtaXR0ZWQgYnkgZGlmZmVyZW50IHBsYXllcnMuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBzdWJtaXQgeW91ciBzY29yZS4gQWxsIGRhdGEgaXMgcHJlc2VydmVkIHRoYW5rcyB0byB0aGUgZXh0ZXJuYWwgTGVhZGVyYm9hcmQgQVBJIFNlcnZpY2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGltZzogbW9ja0FwaSxcbiAgICBsaTogWydBUEknLCAnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBpbWdNOiBtb2NrQXBpLFxuICAgIGltZ0Q6IG1vY2tBcGksXG4gICAgbmFtZTogJ1ByaW1lIFNob3dzIEhEJyxcbiAgICBsYW5nOiBbJ0FQSScsICdXZWJwYWNrJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydBUEknLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vY2Fwc3RvbmUwMi9kaXN0LycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMicsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIFNlY29uZCBDYXBzdG9uZSBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgdG8gYnVpbGQgb3VyIG93biB3ZWIgYXBwbGljYXRpb24gYmFzZWQgb24gYW4gZXh0ZXJuYWwgQVBJLiBXZSBzZWxlY3RlZCBhbiBBUEkgdGhhdCBwcm92aWRlcyBkYXRhIGFib3V0IGEgdG9waWMgdGhhdCB3ZSBsaWtlIGFuZCBidWlsdCB0aGUgd2ViIGFwcCBhcm91bmQgaXQuIFRoZSB3ZWIgYXBwIHdpbGwgaGF2ZSAyIG9yIDMgdXNlciBpbnRlcmZhY2VzIChkZXBlbmRpbmcgb24gdGhlIHNpemUgb2Ygb3VyIHRlYW0pLiBCdWlsdCB3aXRoIEFQSSwgV2VicGFjaywgSFRNTCwgU2FzcyBhbmQgSmF2YVNjcmlwdC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdNYXRoIE1hZ2ljaWFucycsXG4gICAgaW1nOiBtb2NrTWF0aCxcbiAgICBsaTogWydBUEknLCAnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBpbWdNOiBtb2NrTWF0aCxcbiAgICBpbWdEOiBtb2NrTWF0aCxcbiAgICBuYW1lOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLW1hdGgtbWFnaWNpYW5zLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvbWF0aC1tYWdpY2lhbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWljcm92ZXJzZSBNb2R1bGUgMDMgUHJvamVjdDogXCJNYXRoIE1hZ2ljaWFuc1wiIGlzIGEgd2Vic2l0ZSBmb3IgYWxsIGZhbnMgb2YgbWF0aGVtYXRpY3MuIEl0IGlzIGEgU2luZ2xlIFBhZ2UgQXBwIChTUEEpIHRoYXQgYWxsb3dzIHVzZXJzIHRvIG1ha2UgYSBzaW1wbGUgY2FsY3VsYXRpb25zIGFuZCByZWFkIGEgcmFuZG9tIG1hdGgtcmVsYXRlZCBxdW90ZS4gQnVpbHQgd2l0aCBSZWFjdCwgU2FzcyBhbmQgSmF2YVNjcmlwdC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdCb29rc3RvcmUgQ01TJyxcbiAgICBpbWc6IG1vY2tCb29rLFxuICAgIGxpOiBbJ0FQSScsICdXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGltZ006IG1vY2tCb29rLFxuICAgIGltZ0Q6IG1vY2tCb29rLFxuICAgIG5hbWU6ICdCb29rc3RvcmUgQ01TJyxcbiAgICBsYW5nOiBbJ0FQSScsICdXZWJwYWNrJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydBUEknLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL2FwcC1ib29rc3RvcmUtY21zLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvYm9va3N0b3JlJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgTW9kdWxlIDAzIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyBzaW1pbGFyIHRvIHRoZSBcIkF3ZXNvbWUgQm9va3NcIiB3ZWJzaXRlLiBJdCBpcyBhIE1WUCB2ZXJzaW9uIG9mIGl0IHRoYXQgYWxsb3dzIHlvdSB0byBkaXNwbGF5IGEgbGlzdCBvZiBib29rcywgYWRkIGEgYm9vayBhbmQgcmVtb3ZlIGEgc2VsZWN0ZWQgYm9vay4gQnVpbHQgd2l0aCBSZWFjdCwgU2FzcyBhbmQgSmF2YVNjcmlwdC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdTcGFjZSBUcmF2ZWxlcnMtIEh1YicsXG4gICAgaW1nOiBtb2NrU3BhY2UsXG4gICAgbGk6IFsnQVBJJywgJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja1NwYWNlLFxuICAgIGltZ0Q6IG1vY2tTcGFjZSxcbiAgICBuYW1lOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLXNwYWNlLXRyYXZlbGVycy1odWIubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9zcGFjZS10cmF2ZWxlcnMtaHViJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgUmVhY3QgR3JvdXAgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBhIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBjb21tZXJjaWFsIGFuZCBzY2llbnRpZmljIHNwYWNlIHRyYXZlbCBzZXJ2aWNlcy4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYWxsb3cgdXNlcnMgdG8gYm9vayByb2NrZXRzIGFuZCBqb2luIHNlbGVjdGVkIHNwYWNlIG1pc3Npb25zLiBCdWlsdCB3aXRoIFJlYWN0LCBSZWR1eCBUb29sa2l0LCBBUEksIFNhc3MgYW5kIEphdmFTY3JpcHQuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBpbWc6IG1vY2tQb2tlbW9uLFxuICAgIGxpOiBbJ0FQSScsICdXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGltZ006IG1vY2tQb2tlbW9uLFxuICAgIGltZ0Q6IG1vY2tQb2tlbW9uLFxuICAgIG5hbWU6ICdQb2tlbW9uIFdlYiBBcHAnLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLXBva2Vtb24td2ViYXBwLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMycsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIFJlYWN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyB0byBidWlsZCBhIG1vYmlsZSB3ZWIgYXBwbGljYXRpb24gdG8gY2hlY2sgYSBsaXN0IG9mIG1ldHJpY3MgKG51bWVyaWMgdmFsdWVzKSB1c2luZyBSZWFjdCBhbmQgUmVkdXguIEJ1aWx0IHdpdGggUmVhY3QsIFJlZHV4IFRvb2xraXQsIEFQSSwgU2FzcyBhbmQgSmF2YVNjcmlwdC4nLFxuICB9LFxuXTtcblxuLy8gQ3JlYXRlIENhcmQgSXRlbXMgRHluYW1pY2FsbHlcbmNvbnN0IGdyaWRJdGVtID0gW107XG5jb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IFtdO1xuY29uc3QgaDMgPSBbXTtcbmNvbnN0IHVsID0gW107XG5jb25zdCBsaTEgPSBbXTtcbmNvbnN0IGxpMiA9IFtdO1xuY29uc3QgbGkzID0gW107XG5jb25zdCBsaTQgPSBbXTtcbmNvbnN0IGJ1dHRvbjEgPSBbXTtcbmNvbnN0IGJ1dHRvbjIgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkT2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gIGdyaWRJdGVtW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWRJdGVtW2ldLmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJyk7XG4gIGdyaWRJdGVtW2ldLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjYXJkT2JqW2ldLmltZ30pYDtcblxuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkNvbnRhaW5lcicpO1xuXG4gIGgzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgaDN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5oMyk7XG4gIGgzW2ldLmFwcGVuZChoM3RleHQpO1xuXG4gIHVsW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGkxW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkxdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbMF0pO1xuICBsaTFbaV0uYXBwZW5kKGxpMXRleHQpO1xuXG4gIGxpMltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzFdKTtcbiAgbGkyW2ldLmFwcGVuZChsaTJ0ZXh0KTtcblxuICBsaTNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVsyXSk7XG4gIGxpM1tpXS5hcHBlbmQobGkzdGV4dCk7XG5cbiAgbGk0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGk0dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbM10pO1xuICBsaTRbaV0uYXBwZW5kKGxpNHRleHQpO1xuXG4gIGJ1dHRvbjFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5hcHBlbmQoYnV0dG9uMXRleHQpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMVtpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0Jyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIGJ1dHRvbjJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYnV0dG9uMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFByb2plY3QnKTtcbiAgYnV0dG9uMltpXS5hcHBlbmQoYnV0dG9uMnRleHQpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYnV0dG9uMltpXS5jbGFzc0xpc3QuYWRkKCdzZWVQcm9qZWN0RGVza3RvcCcpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZWUgUHJvamVjdCBCdXR0b24nKTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICB1bFtpXS5hcHBlbmQobGkxW2ldLCBsaTJbaV0sIGxpM1tpXSwgbGk0W2ldKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0uYXBwZW5kKGgzW2ldLCB1bFtpXSwgYnV0dG9uMVtpXSwgYnV0dG9uMltpXSk7XG4gIGdyaWRJdGVtW2ldLmFwcGVuZChkZXNjcmlwdGlvbkNvbnRhaW5lcltpXSk7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kKGdyaWRJdGVtW2ldKTtcbn1cblxuY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuQnRuJyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpO1xuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxDb250YWluZXInKTtcblxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiBnbG9iYWwoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxDb250YWluZXIpIHtcbiAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59O1xuXG5vcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKTtcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5tb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4vLyBNb2JpbGUgTW9kYWxcbmNvbnN0IHNlZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VlUHJvamVjdCcpO1xuXG4vLyBDcmVhdGUgZGl2IG1vYmlsZU1vZGFsIGR5bmFtaWNhbGx5XG5jb25zdCBtb2JpbGVNb2RhbCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGdyaWRJdGVtLmxlbmd0aDsgaSArPSAxKSB7XG4gIG1vYmlsZU1vZGFsW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vYmlsZU1vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1vZGFsJyk7XG4gIGdyaWRJdGVtW2ldLmFwcGVuZChtb2JpbGVNb2RhbFtpXSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVNb2RhbChlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBtb2JpbGVNb2RhbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ21vYmlsZU1DQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlTW9iaWxlJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZSk7XG4gIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTW9kYWwoKSB7XG4gICAgbW9iaWxlTW9kYWxbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXYxLnJlbW92ZSgpO1xuICB9XG4gIGltZzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vYmlsZU1vZGFsKTtcblxuICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEltZ01vYmlsZScpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZE9ialtpXS5pbWdNKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICBoMi5pbm5lckhUTUwgPSBjYXJkT2JqW2ldLm5hbWU7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBsaTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nWzBdKTtcbiAgY29uc3QgbGkxdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1sxXSk7XG4gIGNvbnN0IGxpMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbMl0pO1xuICBsaTAuYXBwZW5kQ2hpbGQobGkwdGV4dCk7XG4gIGxpMS5hcHBlbmRDaGlsZChsaTF0ZXh0KTtcbiAgbGkyLmFwcGVuZENoaWxkKGxpMnRleHQpO1xuICB1bC5hcHBlbmQobGkwLCBsaTEsIGxpMik7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVzY3JpcHRpb24nKTtcbiAgcC5pbm5lclRleHQgPSBjYXJkT2JqW2ldLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXJNb2JpbGUnKTtcbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmNsYXNzTGlzdC5hZGQoJ2xpdmVCdG4nKTtcbiAgY29uc3QgbGlua2ExID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBMaXZlJyk7XG4gIGExLmFwcGVuZENoaWxkKGxpbmthMSk7XG4gIGExLmhyZWYgPSBjYXJkT2JqW2ldLmxpdmVMaW5rO1xuICBjb25zdCBpbWdhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpdmUpO1xuICBhMS5hcHBlbmRDaGlsZChpbWdhMSk7XG5cbiAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEyLmNsYXNzTGlzdC5hZGQoJ3NyY0J0bicpO1xuICBjb25zdCBsaW5rYTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFNvdXJjZScpO1xuICBhMi5hcHBlbmRDaGlsZChsaW5rYTIpO1xuICBhMi5ocmVmID0gY2FyZE9ialtpXS5zb3VyY2VMaW5rO1xuICBjb25zdCBpbWdhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gIGEyLmFwcGVuZENoaWxkKGltZ2EyKTtcblxuICBkaXYxLmFwcGVuZENoaWxkKGltZzEpO1xuICBkaXYxLmFwcGVuZENoaWxkKGltZzIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZCh1bCk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQocCk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTEpO1xuICBkaXYyLmFwcGVuZENoaWxkKGEyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgbW9iaWxlTW9kYWxbaV0uYXBwZW5kQ2hpbGQoZGl2MSk7XG59XG5cbnNlZVByb2plY3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vYmlsZU1vZGFsKTtcbn0pO1xuXG4vLyBEZXNrdG9wIE1vZGFsXG5jb25zdCBzZWVQcm9qZWN0RGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWVQcm9qZWN0RGVza3RvcCcpO1xuY29uc3QgZGVza3RvcE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2t0b3BNb2RhbCcpO1xuXG5mdW5jdGlvbiBvcGVuRGVza3RvcE1vZGFsKGUpIHtcbiAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGRlc2t0b3BNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnZGVza3RvcE1DQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlRGVza3RvcCcpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTW9kYWwoKSB7XG4gICAgZGVza3RvcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGl2MS5yZW1vdmUoKTtcbiAgfVxuXG4gIGltZzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vYmlsZU1vZGFsKTtcblxuICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEltZ0Rlc2t0b3AnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRPYmpbaV0uaW1nRCk7XG5cbiAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYzLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3BNb2RhbEhlYWRsaW5lJyk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZURlc2t0b3AnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbGkwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkwdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbMF0pO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFsxXSk7XG4gIGNvbnN0IGxpMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzJdKTtcbiAgY29uc3QgbGkzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbM10pO1xuICBjb25zdCBsaTR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFs0XSk7XG4gIGNvbnN0IGxpNXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzVdKTtcbiAgbGkwLmFwcGVuZENoaWxkKGxpMHRleHQpO1xuICBsaTEuYXBwZW5kQ2hpbGQobGkxdGV4dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChsaTJ0ZXh0KTtcbiAgbGkzLmFwcGVuZENoaWxkKGxpM3RleHQpO1xuICBsaTQuYXBwZW5kQ2hpbGQobGk0dGV4dCk7XG4gIGxpNS5hcHBlbmRDaGlsZChsaTV0ZXh0KTtcbiAgdWwuYXBwZW5kKGxpMCwgbGkxLCBsaTIsIGxpMywgbGk0LCBsaTUpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uRGVza3RvcCcpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lckRlc2t0b3AnKTtcblxuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bkRlc2t0b3AnKTtcblxuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZUxpbms7XG5cbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlTGluaztcblxuICBjb25zdCBpbWdhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gIGEyLmFwcGVuZENoaWxkKGltZ2EyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQodWwpO1xuICBkaXYxLmFwcGVuZENoaWxkKHApO1xuICBkaXYyLmFwcGVuZENoaWxkKGExKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMik7XG4gIGRpdjMuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGRlc2t0b3BNb2RhbC5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdERlc2t0b3AuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRlc2t0b3BNb2RhbCk7XG59KTtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIC0gTW9iaWxlXG5jb25zdCBmb3JtTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Nb2JpbGUnKTtcbmNvbnN0IG5hbWVJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXRNb2JpbGUnKTtcbmNvbnN0IGVtYWlsSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxJbnB1dE1vYmlsZScpO1xuY29uc3QgbWVzc2FnZUlucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VJbnB1dE1vYmlsZScpO1xuY29uc3Qgc3VibWl0QnRuTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bk1vYmlsZScpO1xubGV0IGlzRm9ybVZhbGlkID0gZmFsc2U7XG5cbi8vIExvY2FsIFN0b3JhZ2UgLSBNb2JpbGUgJiBEZXNrdG9wXG5sZXQgZm9ybU9iaiA9IHtcbiAgZnVsbE5hbWVNb2JpbGU6ICcnLFxuICBlbWFpbE1vYmlsZTogJycsXG4gIG1lc3NhZ2VNb2JpbGU6ICcnLFxuICBmaXJzdE5hbWU6ICcnLFxuICBsYXN0TmFtZTogJycsXG4gIGVtYWlsRGVza3RvcDogJycsXG4gIG1lc3NhZ2VEZXNrdG9wOiAnJyxcbn07XG5cbmZ1bmN0aW9uIHN0b3JlSW5sUygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215RGF0YScsIEpTT04uc3RyaW5naWZ5KGZvcm1PYmopKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvbigpIHtcbiAgY29uc3Qgc3RyID0gZW1haWxJbnB1dE1vYmlsZS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHJlZ0V4ID0gL1tBLVpdL2c7XG4gIGlmIChyZWdFeC50ZXN0KHN0cikpIHtcbiAgICBzdWJtaXRCdG5Nb2JpbGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UnKTtcbiAgICBzdWJtaXRCdG5Nb2JpbGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHN0b3JlSW5sUygpO1xuICB9IGVsc2Uge1xuICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGb3JtVmFsaWQ7XG59XG5cbmZvcm1Nb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YWxpZGF0aW9uKCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5zZXRDdXN0b21WYWxpZGl0eSgnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicpO1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZvcm1Nb2JpbGUuc3VibWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBGb3JtIFZhbGlkYXRpb24gLSBEZXNrdG9wXG5jb25zdCBmb3JtRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtRGVza3RvcCcpO1xuY29uc3QgbmFtZUlucHV0RGVza3RvcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0RGVza3RvcDEnKTtcbmNvbnN0IG5hbWVJbnB1dERlc2t0b3AyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dERlc2t0b3AyJyk7XG5jb25zdCBlbWFpbElucHV0RGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbElucHV0RGVza3RvcCcpO1xuY29uc3QgbWVzc2FnZUlucHV0RGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlSW5wdXREZXNrdG9wJyk7XG5jb25zdCBzdWJtaXRCdG5EZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bkRlc2t0b3AnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGlvbkRlc2t0b3AoKSB7XG4gIGNvbnN0IHN0ciA9IGVtYWlsSW5wdXREZXNrdG9wLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVnRXggPSAvW0EtWl0vZztcbiAgaWYgKHJlZ0V4LnRlc3Qoc3RyKSkge1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3Auc2V0Q3VzdG9tVmFsaWRpdHkoJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UuJyk7XG4gICAgc3VibWl0QnRuRGVza3RvcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgc3RvcmVJbmxTKCk7XG4gIH0gZWxzZSB7XG4gICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc0Zvcm1WYWxpZDtcbn1cblxuZm9ybURlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YWxpZGF0aW9uRGVza3RvcCgpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnNldEN1c3RvbVZhbGlkaXR5KCdUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQuIFxcbiBUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgbWUuJyk7XG4gICAgc3VibWl0QnRuRGVza3RvcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZvcm1EZXNrdG9wLnN1Ym1pdCgpO1xuICB9XG59KTtcblxuLy8gTG9jYWwgU3RvcmFnZSAtIE1vYmlsZSAmIERlc2t0b3BcbmNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmb3JtT2JqKTtcbmZ1bmN0aW9uIHN0b3JlSXRlbShlKSB7XG4gIGNvbnN0IGtleU51bSA9IGtleXMuaW5kZXhPZihlLnRhcmdldC5uYW1lKTtcbiAgZm9ybU9ialtrZXlzW2tleU51bV1dID0gZS50YXJnZXQudmFsdWU7XG59XG5cbm5hbWVJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5lbWFpbElucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm1lc3NhZ2VJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5uYW1lSW5wdXREZXNrdG9wMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5uYW1lSW5wdXREZXNrdG9wMi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5lbWFpbElucHV0RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5tZXNzYWdlSW5wdXREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcblxuZnVuY3Rpb24gcGxhY2VJdGVtcygpIHtcbiAgbmFtZUlucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5mdWxsTmFtZU1vYmlsZTtcbiAgZW1haWxJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmouZW1haWxNb2JpbGU7XG4gIG1lc3NhZ2VJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmoubWVzc2FnZU1vYmlsZTtcbiAgbmFtZUlucHV0RGVza3RvcDEudmFsdWUgPSBmb3JtT2JqLmZpcnN0TmFtZTtcbiAgbmFtZUlucHV0RGVza3RvcDIudmFsdWUgPSBmb3JtT2JqLmxhc3ROYW1lO1xuICBlbWFpbElucHV0RGVza3RvcC52YWx1ZSA9IGZvcm1PYmouZW1haWxEZXNrdG9wO1xuICBtZXNzYWdlSW5wdXREZXNrdG9wLnZhbHVlID0gZm9ybU9iai5tZXNzYWdlRGVza3RvcDtcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIHJldHJpZXZlKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215RGF0YScpKSB7XG4gICAgZm9ybU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215RGF0YScpKTtcbiAgICBwbGFjZUl0ZW1zKCk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=