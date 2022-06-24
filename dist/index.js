/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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

;// CONCATENATED MODULE: ./src/assets/close-mobileModal.svg
const close_mobileModal_namespaceObject = __webpack_require__.p + "c733c95100e5d68036e3.svg";
;// CONCATENATED MODULE: ./src/assets/icon-live.png
const icon_live_namespaceObject = __webpack_require__.p + "f2a0741608e07a437198.png";
;// CONCATENATED MODULE: ./src/assets/icon-source.png
const icon_source_namespaceObject = __webpack_require__.p + "b41840c8f3fb646da1cf.png";
;// CONCATENATED MODULE: ./src/assets/img/awc2022/mock_awc.png
const mock_awc_namespaceObject = __webpack_require__.p + "e18aba8690d026e62cf5.png";
;// CONCATENATED MODULE: ./src/assets/img/to-do-list/mock_tdl.png
const mock_tdl_namespaceObject = __webpack_require__.p + "0b06dd1e3090ac8346c0.png";
;// CONCATENATED MODULE: ./src/assets/img/leaderboard/mock_ldb.png
const mock_ldb_namespaceObject = __webpack_require__.p + "f1720c83a31031e2debb.png";
;// CONCATENATED MODULE: ./src/assets/img/primeshows/mock_api.png
const mock_api_namespaceObject = __webpack_require__.p + "50473038b36844ef9139.png";
;// CONCATENATED MODULE: ./src/assets/img/math-magicians/mock_math.png
const mock_math_namespaceObject = __webpack_require__.p + "bbec42aa4cf884e24399.png";
;// CONCATENATED MODULE: ./src/assets/img/bookstore/mock_bookstore.png
const mock_bookstore_namespaceObject = __webpack_require__.p + "288537a66c5862aaeaa9.png";
;// CONCATENATED MODULE: ./src/assets/img/space-travelers-hub/mock_space.png
const mock_space_namespaceObject = __webpack_require__.p + "c82fc76c76393d128da2.png";
;// CONCATENATED MODULE: ./src/assets/img/pokemon/mock_pokemon.png
const mock_pokemon_namespaceObject = __webpack_require__.p + "da39cf9d6c447c64b96f.png";
;// CONCATENATED MODULE: ./src/assets/img/awesome-books/mock_books.png
const mock_books_namespaceObject = __webpack_require__.p + "fc6a16d7f583738bee89.png";
;// CONCATENATED MODULE: ./src/index.js














const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'Pokemon Web App',
    img: mock_pokemon_namespaceObject,
    li: ['React', 'Redux', 'JavaScript', 'Sass'],
    imgM: mock_pokemon_namespaceObject,
    imgD: mock_pokemon_namespaceObject,
    name: 'Pokemon Web App',
    lang: ['React', 'Redux', 'JavaScript'],
    langDesktop: ['React', 'Redux', 'JavaScript', 'Sass', 'API', 'Linters'],
    liveLink: 'https://app-pokemon-webapp.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/capstone03',
    description: 'Microverse React Capstone Project: This educational project is to build a mobile web application to check a list of metrics (numeric values) using React and Redux.',
  },
  {
    h3: 'Prime Shows HD',
    img: mock_api_namespaceObject,
    li: ['Webpack', 'JavaScript', 'Jest', 'Sass'],
    imgM: mock_api_namespaceObject,
    imgD: mock_api_namespaceObject,
    name: 'Prime Shows HD',
    lang: ['Webpack', 'JavaScript', 'Jest', 'Sass'],
    langDesktop: ['Webpack', 'JavaScript', 'Jest', 'Sass', 'API', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone02/dist/',
    sourceLink: 'https://github.com/mavericks-db/capstone02',
    description: 'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team).',
  },
  {
    h3: 'AWC 2022',
    img: mock_awc_namespaceObject,
    li: ['JavaScript', 'Linters', 'Sass', 'HTML'],
    imgM: mock_awc_namespaceObject,
    imgD: mock_awc_namespaceObject,
    name: 'Asia Web Conference 2022',
    lang: ['JavaScript', 'Linters', 'Sass', 'HTML'],
    langDesktop: ['JavaScript', 'Linters', 'Sass', 'HTML', 'VS Code', 'GitHub Pages'],
    liveLink: 'https://mavericks-db.github.io/capstone01/',
    sourceLink: 'https://github.com/mavericks-db/capstone01',
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'Space Travelers- Hub',
    img: mock_space_namespaceObject,
    li: ['React', 'Redux', 'Router', 'JavaScript'],
    imgM: mock_space_namespaceObject,
    imgD: mock_space_namespaceObject,
    name: 'Space Travelers- Hub',
    lang: ['React', 'Redux', 'Router', 'JavaScript'],
    langDesktop: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    liveLink: 'https://app-space-travelers-hub.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/space-travelers-hub',
    description: 'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },
  {
    h3: 'Bookstore CMS',
    img: mock_bookstore_namespaceObject,
    li: ['React', 'Redux', 'Router', 'JavaScript'],
    imgM: mock_bookstore_namespaceObject,
    imgD: mock_bookstore_namespaceObject,
    name: 'Bookstore CMS',
    lang: ['React', 'Redux', 'Router', 'JavaScript'],
    langDesktop: ['React', 'Redux', 'Router', 'JavaScript', 'Jest', 'Sass'],
    liveLink: 'https://app-bookstore-cms.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/bookstore',
    description: 'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book.',
  },
  {
    h3: 'Math Magicians',
    img: mock_math_namespaceObject,
    li: ['React', 'Router', 'JavaScript', 'Sass'],
    imgM: mock_math_namespaceObject,
    imgD: mock_math_namespaceObject,
    name: 'Math Magicians',
    lang: ['React', 'Router', 'JavaScript', 'Sass'],
    langDesktop: ['React', 'Router', 'JavaScript', 'Jest', 'Sass', 'Linters'],
    liveLink: 'https://app-math-magicians.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/math-magicians',
    description: 'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.',
  },
  {
    h3: 'To-Do List',
    img: mock_tdl_namespaceObject,
    li: ['Webpack', 'JavaScript', 'Linters', 'Sass'],
    imgM: mock_tdl_namespaceObject,
    imgD: mock_tdl_namespaceObject,
    name: 'To-Do List App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'Sass'],
    langDesktop: ['Webpack', 'JavaScript', 'Linters', 'Sass', 'HTML', 'Jest'],
    liveLink: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/todo-list',
    description: 'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: mock_ldb_namespaceObject,
    li: ['Webpack', 'JavaScript', 'Linters', 'API'],
    imgM: mock_ldb_namespaceObject,
    imgD: mock_ldb_namespaceObject,
    name: 'Leaderboard App',
    lang: ['Webpack', 'JavaScript', 'Linters', 'API'],
    langDesktop: ['Webpack', 'JavaScript', 'Linters', 'API', 'Sass', 'Jest'],
    liveLink: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/leaderboard',
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Awesome Books',
    img: mock_books_namespaceObject,
    li: ['JavaScript', 'Linters', 'HTML', 'Sass'],
    imgM: mock_books_namespaceObject,
    imgD: mock_books_namespaceObject,
    name: 'Awesome Books',
    lang: ['JavaScript', 'Linters', 'HTML', 'Sass'],
    langDesktop: ['JavaScript', 'Linters', 'HTML', 'Sass', 'Jest', 'GitHub Pages'],
    liveLink: 'https://mavericks-db.github.io/awesome-books-ES6/',
    sourceLink: 'https://github.com/mavericks-db/awesome-books-ES6',
    description: 'This is an educational project to make a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practice the ES6 syntax.',
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
  img1.setAttribute('src', close_mobileModal_namespaceObject);
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
  imga1.setAttribute('src', icon_live_namespaceObject);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', icon_source_namespaceObject);
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
  img1.setAttribute('src', close_mobileModal_namespaceObject);

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
  imga1.setAttribute('src', icon_live_namespaceObject);
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');

  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = cardObj[i].sourceLink;

  const imga2 = document.createElement('img');
  imga2.setAttribute('src', icon_source_namespaceObject);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUFNO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGlDQUFLOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIseUJBQUk7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsMkJBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Fzc2V0cy9jbG9zZS1tb2JpbGVNb2RhbC5zdmcnO1xuaW1wb3J0IGxpdmUgZnJvbSAnLi9hc3NldHMvaWNvbi1saXZlLnBuZyc7XG5pbXBvcnQgc291cmNlIGZyb20gJy4vYXNzZXRzL2ljb24tc291cmNlLnBuZyc7XG5pbXBvcnQgbW9ja0F3YyBmcm9tICcuL2Fzc2V0cy9pbWcvYXdjMjAyMi9tb2NrX2F3Yy5wbmcnO1xuaW1wb3J0IG1vY2tUZGwgZnJvbSAnLi9hc3NldHMvaW1nL3RvLWRvLWxpc3QvbW9ja190ZGwucG5nJztcbmltcG9ydCBtb2NrTGRiIGZyb20gJy4vYXNzZXRzL2ltZy9sZWFkZXJib2FyZC9tb2NrX2xkYi5wbmcnO1xuaW1wb3J0IG1vY2tBcGkgZnJvbSAnLi9hc3NldHMvaW1nL3ByaW1lc2hvd3MvbW9ja19hcGkucG5nJztcbmltcG9ydCBtb2NrTWF0aCBmcm9tICcuL2Fzc2V0cy9pbWcvbWF0aC1tYWdpY2lhbnMvbW9ja19tYXRoLnBuZyc7XG5pbXBvcnQgbW9ja0Jvb2sgZnJvbSAnLi9hc3NldHMvaW1nL2Jvb2tzdG9yZS9tb2NrX2Jvb2tzdG9yZS5wbmcnO1xuaW1wb3J0IG1vY2tTcGFjZSBmcm9tICcuL2Fzc2V0cy9pbWcvc3BhY2UtdHJhdmVsZXJzLWh1Yi9tb2NrX3NwYWNlLnBuZyc7XG5pbXBvcnQgbW9ja1Bva2Vtb24gZnJvbSAnLi9hc3NldHMvaW1nL3Bva2Vtb24vbW9ja19wb2tlbW9uLnBuZyc7XG5pbXBvcnQgbW9ja0Jvb2tzIGZyb20gJy4vYXNzZXRzL2ltZy9hd2Vzb21lLWJvb2tzL21vY2tfYm9va3MucG5nJztcblxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkQ29udGFpbmVyJyk7XG5cbi8vIFByb2plY3QgRGF0YVxuY29uc3QgY2FyZE9iaiA9IFtcbiAge1xuICAgIGgzOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBpbWc6IG1vY2tQb2tlbW9uLFxuICAgIGxpOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ0phdmFTY3JpcHQnLCAnU2FzcyddLFxuICAgIGltZ006IG1vY2tQb2tlbW9uLFxuICAgIGltZ0Q6IG1vY2tQb2tlbW9uLFxuICAgIG5hbWU6ICdQb2tlbW9uIFdlYiBBcHAnLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ0phdmFTY3JpcHQnLCAnU2FzcycsICdBUEknLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9hcHAtcG9rZW1vbi13ZWJhcHAubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9jYXBzdG9uZTAzJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgUmVhY3QgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgbW9iaWxlIHdlYiBhcHBsaWNhdGlvbiB0byBjaGVjayBhIGxpc3Qgb2YgbWV0cmljcyAobnVtZXJpYyB2YWx1ZXMpIHVzaW5nIFJlYWN0IGFuZCBSZWR1eC4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdQcmltZSBTaG93cyBIRCcsXG4gICAgaW1nOiBtb2NrQXBpLFxuICAgIGxpOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBpbWdNOiBtb2NrQXBpLFxuICAgIGltZ0Q6IG1vY2tBcGksXG4gICAgbmFtZTogJ1ByaW1lIFNob3dzIEhEJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBsYW5nRGVza3RvcDogWydXZWJwYWNrJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJywgJ0FQSScsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vY2Fwc3RvbmUwMi9kaXN0LycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMicsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIFNlY29uZCBDYXBzdG9uZSBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgdG8gYnVpbGQgb3VyIG93biB3ZWIgYXBwbGljYXRpb24gYmFzZWQgb24gYW4gZXh0ZXJuYWwgQVBJLiBXZSBzZWxlY3RlZCBhbiBBUEkgdGhhdCBwcm92aWRlcyBkYXRhIGFib3V0IGEgdG9waWMgdGhhdCB3ZSBsaWtlIGFuZCBidWlsdCB0aGUgd2ViIGFwcCBhcm91bmQgaXQuIFRoZSB3ZWIgYXBwIHdpbGwgaGF2ZSAyIG9yIDMgdXNlciBpbnRlcmZhY2VzIChkZXBlbmRpbmcgb24gdGhlIHNpemUgb2Ygb3VyIHRlYW0pLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0FXQyAyMDIyJyxcbiAgICBpbWc6IG1vY2tBd2MsXG4gICAgbGk6IFsnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ1Nhc3MnLCAnSFRNTCddLFxuICAgIGltZ006IG1vY2tBd2MsXG4gICAgaW1nRDogbW9ja0F3YyxcbiAgICBuYW1lOiAnQXNpYSBXZWIgQ29uZmVyZW5jZSAyMDIyJyxcbiAgICBsYW5nOiBbJ0phdmFTY3JpcHQnLCAnTGludGVycycsICdTYXNzJywgJ0hUTUwnXSxcbiAgICBsYW5nRGVza3RvcDogWydKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnU2FzcycsICdIVE1MJywgJ1ZTIENvZGUnLCAnR2l0SHViIFBhZ2VzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vY2Fwc3RvbmUwMS8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2NhcHN0b25lMDEnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWljcm92ZXJzZSBGaXJzdCBDYXBzdG9uZSBQcm9qZWN0OiBUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHdlYnNpdGUgZm9yIGEgd2ViIGNvbmZlcmVuY2UgZXZlbnQgd2l0aCBob21lIHBhZ2UgYW5kIGFib3V0IHBhZ2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGltZzogbW9ja1NwYWNlLFxuICAgIGxpOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ1JvdXRlcicsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja1NwYWNlLFxuICAgIGltZ0Q6IG1vY2tTcGFjZSxcbiAgICBuYW1lOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGxhbmc6IFsnUmVhY3QnLCAnUmVkdXgnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydSZWFjdCcsICdSZWR1eCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCcsICdKZXN0JywgJ1Nhc3MnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLXNwYWNlLXRyYXZlbGVycy1odWIubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9zcGFjZS10cmF2ZWxlcnMtaHViJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgUmVhY3QgR3JvdXAgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBhIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBjb21tZXJjaWFsIGFuZCBzY2llbnRpZmljIHNwYWNlIHRyYXZlbCBzZXJ2aWNlcy4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYWxsb3cgdXNlcnMgdG8gYm9vayByb2NrZXRzIGFuZCBqb2luIHNlbGVjdGVkIHNwYWNlIG1pc3Npb25zLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ0Jvb2tzdG9yZSBDTVMnLFxuICAgIGltZzogbW9ja0Jvb2ssXG4gICAgbGk6IFsnUmVhY3QnLCAnUmVkdXgnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnXSxcbiAgICBpbWdNOiBtb2NrQm9vayxcbiAgICBpbWdEOiBtb2NrQm9vayxcbiAgICBuYW1lOiAnQm9va3N0b3JlIENNUycsXG4gICAgbGFuZzogWydSZWFjdCcsICdSZWR1eCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ1JlYWN0JywgJ1JlZHV4JywgJ1JvdXRlcicsICdKYXZhU2NyaXB0JywgJ0plc3QnLCAnU2FzcyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9hcHAtYm9va3N0b3JlLWNtcy5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2Jvb2tzdG9yZScsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgc2ltaWxhciB0byB0aGUgXCJBd2Vzb21lIEJvb2tzXCIgd2Vic2l0ZS4gSXQgaXMgYSBNVlAgdmVyc2lvbiBvZiBpdCB0aGF0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYm9va3MsIGFkZCBhIGJvb2sgYW5kIHJlbW92ZSBhIHNlbGVjdGVkIGJvb2suJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGltZzogbW9ja01hdGgsXG4gICAgbGk6IFsnUmVhY3QnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnU2FzcyddLFxuICAgIGltZ006IG1vY2tNYXRoLFxuICAgIGltZ0Q6IG1vY2tNYXRoLFxuICAgIG5hbWU6ICdNYXRoIE1hZ2ljaWFucycsXG4gICAgbGFuZzogWydSZWFjdCcsICdSb3V0ZXInLCAnSmF2YVNjcmlwdCcsICdTYXNzJ10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnUmVhY3QnLCAnUm91dGVyJywgJ0phdmFTY3JpcHQnLCAnSmVzdCcsICdTYXNzJywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLW1hdGgtbWFnaWNpYW5zLm5ldGxpZnkuYXBwLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvbWF0aC1tYWdpY2lhbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWljcm92ZXJzZSBNb2R1bGUgMDMgUHJvamVjdDogXCJNYXRoIE1hZ2ljaWFuc1wiIGlzIGEgd2Vic2l0ZSBmb3IgYWxsIGZhbnMgb2YgbWF0aGVtYXRpY3MuIEl0IGlzIGEgU2luZ2xlIFBhZ2UgQXBwIChTUEEpIHRoYXQgYWxsb3dzIHVzZXJzIHRvIG1ha2UgYSBzaW1wbGUgY2FsY3VsYXRpb25zIGFuZCByZWFkIGEgcmFuZG9tIG1hdGgtcmVsYXRlZCBxdW90ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdUby1EbyBMaXN0JyxcbiAgICBpbWc6IG1vY2tUZGwsXG4gICAgbGk6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnU2FzcyddLFxuICAgIGltZ006IG1vY2tUZGwsXG4gICAgaW1nRDogbW9ja1RkbCxcbiAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnLCAnU2FzcyddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ1Nhc3MnLCAnSFRNTCcsICdKZXN0J10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vdG9kby1saXN0L2Rpc3QvaW5kZXguaHRtbCcsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvdG9kby1saXN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgdG9vbCB0aGF0IGhlbHBzIHRvIG9yZ2FuaXplIHlvdXIgZGF5LiBJdCBzaW1wbHkgbGlzdHMgdGhlIHRoaW5ncyB0aGF0IHlvdSBuZWVkIHRvIGRvIGFuZCBhbGxvd3MgeW91IHRvIG1hcmsgdGhlbSBhcyBjb21wbGV0ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdMZWFkZXJib2FyZCcsXG4gICAgaW1nOiBtb2NrTGRiLFxuICAgIGxpOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ0FQSSddLFxuICAgIGltZ006IG1vY2tMZGIsXG4gICAgaW1nRDogbW9ja0xkYixcbiAgICBuYW1lOiAnTGVhZGVyYm9hcmQgQXBwJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ0FQSSddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ0FQSScsICdTYXNzJywgJ0plc3QnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9sZWFkZXJib2FyZC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2xlYWRlcmJvYXJkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBjcmVhdGUgYSB3ZWJzaXRlIHdoaWNoIGRpc3BsYXlzIHNjb3JlcyBzdWJtaXR0ZWQgYnkgZGlmZmVyZW50IHBsYXllcnMuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBzdWJtaXQgeW91ciBzY29yZS4gQWxsIGRhdGEgaXMgcHJlc2VydmVkIHRoYW5rcyB0byB0aGUgZXh0ZXJuYWwgTGVhZGVyYm9hcmQgQVBJIFNlcnZpY2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnQXdlc29tZSBCb29rcycsXG4gICAgaW1nOiBtb2NrQm9va3MsXG4gICAgbGk6IFsnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ0hUTUwnLCAnU2FzcyddLFxuICAgIGltZ006IG1vY2tCb29rcyxcbiAgICBpbWdEOiBtb2NrQm9va3MsXG4gICAgbmFtZTogJ0F3ZXNvbWUgQm9va3MnLFxuICAgIGxhbmc6IFsnSmF2YVNjcmlwdCcsICdMaW50ZXJzJywgJ0hUTUwnLCAnU2FzcyddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0phdmFTY3JpcHQnLCAnTGludGVycycsICdIVE1MJywgJ1Nhc3MnLCAnSmVzdCcsICdHaXRIdWIgUGFnZXMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9hd2Vzb21lLWJvb2tzLUVTNi8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2F3ZXNvbWUtYm9va3MtRVM2JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgc2ltcGxlIHdlYnNpdGUgdGhhdCBkaXNwbGF5cyBhIGxpc3Qgb2YgYm9va3MgYW5kIGFsbG93cyB5b3UgdG8gYWRkIGFuZCByZW1vdmUgYm9va3MgZnJvbSB0aGF0IGxpc3QuIFRoZSBnb2FsIGlzIHRvIG1ha2UgaXQgbW9yZSBvcmdhbml6ZWQgYnkgdXNpbmcgbW9kdWxlcyBhbmQgcHJhY3RpY2UgdGhlIEVTNiBzeW50YXguJyxcbiAgfSxcbl07XG5cbi8vIENyZWF0ZSBDYXJkIEl0ZW1zIER5bmFtaWNhbGx5XG5jb25zdCBncmlkSXRlbSA9IFtdO1xuY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBbXTtcbmNvbnN0IGgzID0gW107XG5jb25zdCB1bCA9IFtdO1xuY29uc3QgbGkxID0gW107XG5jb25zdCBsaTIgPSBbXTtcbmNvbnN0IGxpMyA9IFtdO1xuY29uc3QgbGk0ID0gW107XG5jb25zdCBidXR0b24xID0gW107XG5jb25zdCBidXR0b24yID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2FyZE9iai5sZW5ndGg7IGkgKz0gMSkge1xuICBncmlkSXRlbVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkSXRlbVtpXS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2FyZE9ialtpXS5pbWd9KWA7XG5cbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcblxuICBoM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGgzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0uaDMpO1xuICBoM1tpXS5hcHBlbmQoaDN0ZXh0KTtcblxuICB1bFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpMVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzBdKTtcbiAgbGkxW2ldLmFwcGVuZChsaTF0ZXh0KTtcblxuICBsaTJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVsxXSk7XG4gIGxpMltpXS5hcHBlbmQobGkydGV4dCk7XG5cbiAgbGkzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbMl0pO1xuICBsaTNbaV0uYXBwZW5kKGxpM3RleHQpO1xuXG4gIGxpNFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzNdKTtcbiAgbGk0W2ldLmFwcGVuZChsaTR0ZXh0KTtcblxuICBidXR0b24xW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbjF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBQcm9qZWN0Jyk7XG4gIGJ1dHRvbjFbaV0uYXBwZW5kKGJ1dHRvbjF0ZXh0KTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbjFbaV0uY2xhc3NMaXN0LmFkZCgnc2VlUHJvamVjdCcpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZWUgUHJvamVjdCBCdXR0b24nKTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICBidXR0b24yW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbjJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBQcm9qZWN0Jyk7XG4gIGJ1dHRvbjJbaV0uYXBwZW5kKGJ1dHRvbjJ0ZXh0KTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbjJbaV0uY2xhc3NMaXN0LmFkZCgnc2VlUHJvamVjdERlc2t0b3AnKTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2VlIFByb2plY3QgQnV0dG9uJyk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgdWxbaV0uYXBwZW5kKGxpMVtpXSwgbGkyW2ldLCBsaTNbaV0sIGxpNFtpXSk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldLmFwcGVuZChoM1tpXSwgdWxbaV0sIGJ1dHRvbjFbaV0sIGJ1dHRvbjJbaV0pO1xuICBncmlkSXRlbVtpXS5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXJbaV0pO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZChncmlkSXRlbVtpXSk7XG59XG5cbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbkJ0bicpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKTtcbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gZ2xvYmFsKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gTW9iaWxlIE1vZGFsXG5jb25zdCBzZWVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3QnKTtcblxuLy8gQ3JlYXRlIGRpdiBtb2JpbGVNb2RhbCBkeW5hbWljYWxseVxuY29uc3QgbW9iaWxlTW9kYWwgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkSXRlbS5sZW5ndGg7IGkgKz0gMSkge1xuICBtb2JpbGVNb2RhbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVNb2RhbFtpXS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNb2RhbCcpO1xuICBncmlkSXRlbVtpXS5hcHBlbmQobW9iaWxlTW9kYWxbaV0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9iaWxlTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgbW9iaWxlTW9kYWxbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZU1vYmlsZScpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpO1xuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGl2MS5yZW1vdmUoKTtcbiAgfVxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdNb2JpbGUnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRPYmpbaV0uaW1nTSk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbGkwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkwdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1swXSk7XG4gIGNvbnN0IGxpMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbMV0pO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nWzJdKTtcbiAgbGkwLmFwcGVuZENoaWxkKGxpMHRleHQpO1xuICBsaTEuYXBwZW5kQ2hpbGQobGkxdGV4dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChsaTJ0ZXh0KTtcbiAgdWwuYXBwZW5kKGxpMCwgbGkxLCBsaTIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uJyk7XG4gIHAuaW5uZXJUZXh0ID0gY2FyZE9ialtpXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyTW9iaWxlJyk7XG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMS5jbGFzc0xpc3QuYWRkKCdsaXZlQnRuJyk7XG4gIGNvbnN0IGxpbmthMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgTGl2ZScpO1xuICBhMS5hcHBlbmRDaGlsZChsaW5rYTEpO1xuICBhMS5ocmVmID0gY2FyZE9ialtpXS5saXZlTGluaztcbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG4nKTtcbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlTGluaztcbiAgY29uc3QgaW1nYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTIuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICBhMi5hcHBlbmRDaGlsZChpbWdhMik7XG5cbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQodWwpO1xuICBkaXYxLmFwcGVuZENoaWxkKHApO1xuICBkaXYyLmFwcGVuZENoaWxkKGExKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIG1vYmlsZU1vZGFsW2ldLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2JpbGVNb2RhbCk7XG59KTtcblxuLy8gRGVza3RvcCBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VlUHJvamVjdERlc2t0b3AnKTtcbmNvbnN0IGRlc2t0b3BNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wTW9kYWwnKTtcblxuZnVuY3Rpb24gb3BlbkRlc2t0b3BNb2RhbChlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3BNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZURlc2t0b3AnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcblxuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIGRlc2t0b3BNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cblxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdEZXNrdG9wJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZ0QpO1xuXG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTW9kYWxIZWFkbGluZScpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVEZXNrdG9wJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGxpMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgY29uc3QgbGkwdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbMF0pO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFsxXSk7XG4gIGNvbnN0IGxpMnRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzJdKTtcbiAgY29uc3QgbGkzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbM10pO1xuICBjb25zdCBsaTR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFs0XSk7XG4gIGNvbnN0IGxpNXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzVdKTtcbiAgbGkwLmFwcGVuZENoaWxkKGxpMHRleHQpO1xuICBsaTEuYXBwZW5kQ2hpbGQobGkxdGV4dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChsaTJ0ZXh0KTtcbiAgbGkzLmFwcGVuZENoaWxkKGxpM3RleHQpO1xuICBsaTQuYXBwZW5kQ2hpbGQobGk0dGV4dCk7XG4gIGxpNS5hcHBlbmRDaGlsZChsaTV0ZXh0KTtcbiAgdWwuYXBwZW5kKGxpMCwgbGkxLCBsaTIsIGxpMywgbGk0LCBsaTUpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uRGVza3RvcCcpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lckRlc2t0b3AnKTtcblxuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bkRlc2t0b3AnKTtcblxuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZUxpbms7XG5cbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlTGluaztcblxuICBjb25zdCBpbWdhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gIGEyLmFwcGVuZENoaWxkKGltZ2EyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQodWwpO1xuICBkaXYxLmFwcGVuZENoaWxkKHApO1xuICBkaXYyLmFwcGVuZENoaWxkKGExKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMik7XG4gIGRpdjMuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGRlc2t0b3BNb2RhbC5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdERlc2t0b3AuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRlc2t0b3BNb2RhbCk7XG59KTtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIC0gTW9iaWxlXG5jb25zdCBmb3JtTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Nb2JpbGUnKTtcbmNvbnN0IG5hbWVJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXRNb2JpbGUnKTtcbmNvbnN0IGVtYWlsSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxJbnB1dE1vYmlsZScpO1xuY29uc3QgbWVzc2FnZUlucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VJbnB1dE1vYmlsZScpO1xuY29uc3Qgc3VibWl0QnRuTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bk1vYmlsZScpO1xubGV0IGlzRm9ybVZhbGlkID0gZmFsc2U7XG5cbi8vIExvY2FsIFN0b3JhZ2UgLSBNb2JpbGUgJiBEZXNrdG9wXG5sZXQgZm9ybU9iaiA9IHtcbiAgZnVsbE5hbWVNb2JpbGU6ICcnLFxuICBlbWFpbE1vYmlsZTogJycsXG4gIG1lc3NhZ2VNb2JpbGU6ICcnLFxuICBmaXJzdE5hbWU6ICcnLFxuICBsYXN0TmFtZTogJycsXG4gIGVtYWlsRGVza3RvcDogJycsXG4gIG1lc3NhZ2VEZXNrdG9wOiAnJyxcbn07XG5cbmZ1bmN0aW9uIHN0b3JlSW5sUygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215RGF0YScsIEpTT04uc3RyaW5naWZ5KGZvcm1PYmopKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvbigpIHtcbiAgY29uc3Qgc3RyID0gZW1haWxJbnB1dE1vYmlsZS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHJlZ0V4ID0gL1tBLVpdL2c7XG4gIGlmIChyZWdFeC50ZXN0KHN0cikpIHtcbiAgICBzdWJtaXRCdG5Nb2JpbGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UnKTtcbiAgICBzdWJtaXRCdG5Nb2JpbGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHN0b3JlSW5sUygpO1xuICB9IGVsc2Uge1xuICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGb3JtVmFsaWQ7XG59XG5cbmZvcm1Nb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YWxpZGF0aW9uKCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5zZXRDdXN0b21WYWxpZGl0eSgnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicpO1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZvcm1Nb2JpbGUuc3VibWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBGb3JtIFZhbGlkYXRpb24gLSBEZXNrdG9wXG5jb25zdCBmb3JtRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtRGVza3RvcCcpO1xuY29uc3QgbmFtZUlucHV0RGVza3RvcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0RGVza3RvcDEnKTtcbmNvbnN0IG5hbWVJbnB1dERlc2t0b3AyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dERlc2t0b3AyJyk7XG5jb25zdCBlbWFpbElucHV0RGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbElucHV0RGVza3RvcCcpO1xuY29uc3QgbWVzc2FnZUlucHV0RGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlSW5wdXREZXNrdG9wJyk7XG5jb25zdCBzdWJtaXRCdG5EZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bkRlc2t0b3AnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGlvbkRlc2t0b3AoKSB7XG4gIGNvbnN0IHN0ciA9IGVtYWlsSW5wdXREZXNrdG9wLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVnRXggPSAvW0EtWl0vZztcbiAgaWYgKHJlZ0V4LnRlc3Qoc3RyKSkge1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3Auc2V0Q3VzdG9tVmFsaWRpdHkoJ1NvcnJ5LCB0aGlzIGZvcm0gaGFzIG5vdCBiZWVuIHN1Ym1pdHRlZC4gVGhlIGNvbnRlbnQgb2YgdGhlIGVtYWlsIGZpZWxkIGhhcyB0byBiZSBpbiBsb3dlciBjYXNlLiBcXG4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzIGFuZCByZWxvYWQgdGhlIHBhZ2UuJyk7XG4gICAgc3VibWl0QnRuRGVza3RvcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgc3RvcmVJbmxTKCk7XG4gIH0gZWxzZSB7XG4gICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc0Zvcm1WYWxpZDtcbn1cblxuZm9ybURlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YWxpZGF0aW9uRGVza3RvcCgpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnNldEN1c3RvbVZhbGlkaXR5KCdUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQuIFxcbiBUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgbWUuJyk7XG4gICAgc3VibWl0QnRuRGVza3RvcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGZvcm1EZXNrdG9wLnN1Ym1pdCgpO1xuICB9XG59KTtcblxuLy8gTG9jYWwgU3RvcmFnZSAtIE1vYmlsZSAmIERlc2t0b3BcbmNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmb3JtT2JqKTtcbmZ1bmN0aW9uIHN0b3JlSXRlbShlKSB7XG4gIGNvbnN0IGtleU51bSA9IGtleXMuaW5kZXhPZihlLnRhcmdldC5uYW1lKTtcbiAgZm9ybU9ialtrZXlzW2tleU51bV1dID0gZS50YXJnZXQudmFsdWU7XG59XG5cbm5hbWVJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5lbWFpbElucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm1lc3NhZ2VJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5uYW1lSW5wdXREZXNrdG9wMS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5uYW1lSW5wdXREZXNrdG9wMi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5lbWFpbElucHV0RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5tZXNzYWdlSW5wdXREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcblxuZnVuY3Rpb24gcGxhY2VJdGVtcygpIHtcbiAgbmFtZUlucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5mdWxsTmFtZU1vYmlsZTtcbiAgZW1haWxJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmouZW1haWxNb2JpbGU7XG4gIG1lc3NhZ2VJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmoubWVzc2FnZU1vYmlsZTtcbiAgbmFtZUlucHV0RGVza3RvcDEudmFsdWUgPSBmb3JtT2JqLmZpcnN0TmFtZTtcbiAgbmFtZUlucHV0RGVza3RvcDIudmFsdWUgPSBmb3JtT2JqLmxhc3ROYW1lO1xuICBlbWFpbElucHV0RGVza3RvcC52YWx1ZSA9IGZvcm1PYmouZW1haWxEZXNrdG9wO1xuICBtZXNzYWdlSW5wdXREZXNrdG9wLnZhbHVlID0gZm9ybU9iai5tZXNzYWdlRGVza3RvcDtcbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIHJldHJpZXZlKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215RGF0YScpKSB7XG4gICAgZm9ybU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215RGF0YScpKTtcbiAgICBwbGFjZUl0ZW1zKCk7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=