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
;// CONCATENATED MODULE: ./src/index.js













const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'AWC 2022',
    img: mock_awc_namespaceObject,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: mock_awc_namespaceObject,
    imgD: mock_awc_namespaceObject,
    name: 'Asia Web Conference 2022',
    lang: ['HTML', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone01/',
    sourceLink: 'https://github.com/mavericks-db/capstone01',
    description: 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.',
  },
  {
    h3: 'To-Do List',
    img: mock_tdl_namespaceObject,
    li: ['Webpack', 'Sass', 'JavaScript', 'Linters'],
    imgM: mock_tdl_namespaceObject,
    imgD: mock_tdl_namespaceObject,
    name: 'To-Do List App',
    lang: ['Webpack', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/todo-list/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/todo-list',
    description: 'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
  },
  {
    h3: 'Leaderboard',
    img: mock_ldb_namespaceObject,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mock_ldb_namespaceObject,
    imgD: mock_ldb_namespaceObject,
    name: 'Leaderboard App',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/leaderboard',
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Prime Shows HD',
    img: mock_api_namespaceObject,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mock_api_namespaceObject,
    imgD: mock_api_namespaceObject,
    name: 'Prime Shows HD',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/capstone02/dist/',
    sourceLink: 'https://github.com/mavericks-db/capstone02',
    description: 'Microverse Second Capstone Project: This educational project is to build our own web application based on an external API. We selected an API that provides data about a topic that we like and built the web app around it. The web app will have 2 or 3 user interfaces (depending on the size of our team). Built with API, Webpack, HTML, Sass and JavaScript.',
  },
  {
    h3: 'Math Magicians',
    img: mock_math_namespaceObject,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mock_math_namespaceObject,
    imgD: mock_math_namespaceObject,
    name: 'Math Magicians',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-math-magicians.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/math-magicians',
    description: 'Microverse Module 03 Project: "Math Magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote. Built with React, Sass and JavaScript.',
  },
  {
    h3: 'Bookstore CMS',
    img: mock_bookstore_namespaceObject,
    li: ['API', 'Webpack', 'Sass', 'JavaScript'],
    imgM: mock_bookstore_namespaceObject,
    imgD: mock_bookstore_namespaceObject,
    name: 'Bookstore CMS',
    lang: ['API', 'Webpack', 'JavaScript'],
    langDesktop: ['API', 'Webpack', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://app-bookstore-cms.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/bookstore',
    description: 'Microverse Module 03 Project: This educational project is similar to the "Awesome Books" website. It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book. Built with React, Sass and JavaScript.',
  },
  {
    h3: 'Space Travelers- Hub',
    img: mock_space_namespaceObject,
    li: ['React', 'RTK', 'JavaScript', 'Sass'],
    imgM: mock_space_namespaceObject,
    imgD: mock_space_namespaceObject,
    name: 'Space Travelers- Hub',
    lang: ['React', 'RTK', 'JavaScript'],
    langDesktop: ['React', 'RTK', 'JavaScript', 'Sass', 'API', 'Linters'],
    liveLink: 'https://app-space-travelers-hub.netlify.app/',
    sourceLink: 'https://github.com/mavericks-db/space-travelers-hub',
    description: 'Microverse React Group Project: This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Built with React, Redux Toolkit, API, Sass and JavaScript.',
  },
  {
    h3: 'Pokemon Web App',
    img: mock_pokemon_namespaceObject,
    li: ['React', 'RTK', 'JavaScript', 'Sass'],
    imgM: mock_pokemon_namespaceObject,
    imgD: mock_pokemon_namespaceObject,
    name: 'Pokemon Web App',
    lang: ['React', 'RTK', 'JavaScript'],
    langDesktop: ['React', 'RTK', 'JavaScript', 'Sass', 'API', 'Linters'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQkFBTTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixpQ0FBSzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDJCQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9hc3NldHMvY2xvc2UtbW9iaWxlTW9kYWwuc3ZnJztcbmltcG9ydCBsaXZlIGZyb20gJy4vYXNzZXRzL2ljb24tbGl2ZS5wbmcnO1xuaW1wb3J0IHNvdXJjZSBmcm9tICcuL2Fzc2V0cy9pY29uLXNvdXJjZS5wbmcnO1xuaW1wb3J0IG1vY2tBd2MgZnJvbSAnLi9hc3NldHMvaW1nL2F3YzIwMjIvbW9ja19hd2MucG5nJztcbmltcG9ydCBtb2NrVGRsIGZyb20gJy4vYXNzZXRzL2ltZy90by1kby1saXN0L21vY2tfdGRsLnBuZyc7XG5pbXBvcnQgbW9ja0xkYiBmcm9tICcuL2Fzc2V0cy9pbWcvbGVhZGVyYm9hcmQvbW9ja19sZGIucG5nJztcbmltcG9ydCBtb2NrQXBpIGZyb20gJy4vYXNzZXRzL2ltZy9wcmltZXNob3dzL21vY2tfYXBpLnBuZyc7XG5pbXBvcnQgbW9ja01hdGggZnJvbSAnLi9hc3NldHMvaW1nL21hdGgtbWFnaWNpYW5zL21vY2tfbWF0aC5wbmcnO1xuaW1wb3J0IG1vY2tCb29rIGZyb20gJy4vYXNzZXRzL2ltZy9ib29rc3RvcmUvbW9ja19ib29rc3RvcmUucG5nJztcbmltcG9ydCBtb2NrU3BhY2UgZnJvbSAnLi9hc3NldHMvaW1nL3NwYWNlLXRyYXZlbGVycy1odWIvbW9ja19zcGFjZS5wbmcnO1xuaW1wb3J0IG1vY2tQb2tlbW9uIGZyb20gJy4vYXNzZXRzL2ltZy9wb2tlbW9uL21vY2tfcG9rZW1vbi5wbmcnO1xuXG5jb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRDb250YWluZXInKTtcblxuLy8gUHJvamVjdCBEYXRhXG5jb25zdCBjYXJkT2JqID0gW1xuICB7XG4gICAgaDM6ICdBV0MgMjAyMicsXG4gICAgaW1nOiBtb2NrQXdjLFxuICAgIGxpOiBbJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBpbWdNOiBtb2NrQXdjLFxuICAgIGltZ0Q6IG1vY2tBd2MsXG4gICAgbmFtZTogJ0FzaWEgV2ViIENvbmZlcmVuY2UgMjAyMicsXG4gICAgbGFuZzogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0dpdEh1YicsICdWUyBDb2RlJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9jYXBzdG9uZTAxLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMScsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIEZpcnN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgd2Vic2l0ZSBmb3IgYSB3ZWIgY29uZmVyZW5jZSBldmVudCB3aXRoIGhvbWUgcGFnZSBhbmQgYWJvdXQgcGFnZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdUby1EbyBMaXN0JyxcbiAgICBpbWc6IG1vY2tUZGwsXG4gICAgbGk6IFsnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGltZ006IG1vY2tUZGwsXG4gICAgaW1nRDogbW9ja1RkbCxcbiAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydHaXRIdWInLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vdG9kby1saXN0L2Rpc3QvaW5kZXguaHRtbCcsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvdG9kby1saXN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgdG9vbCB0aGF0IGhlbHBzIHRvIG9yZ2FuaXplIHlvdXIgZGF5LiBJdCBzaW1wbHkgbGlzdHMgdGhlIHRoaW5ncyB0aGF0IHlvdSBuZWVkIHRvIGRvIGFuZCBhbGxvd3MgeW91IHRvIG1hcmsgdGhlbSBhcyBjb21wbGV0ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdMZWFkZXJib2FyZCcsXG4gICAgaW1nOiBtb2NrTGRiLFxuICAgIGxpOiBbJ0FQSScsICdXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGltZ006IG1vY2tMZGIsXG4gICAgaW1nRDogbW9ja0xkYixcbiAgICBuYW1lOiAnTGVhZGVyYm9hcmQgQXBwJyxcbiAgICBsYW5nOiBbJ0FQSScsICdXZWJwYWNrJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydBUEknLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vbGVhZGVyYm9hcmQvZGlzdC9pbmRleC5odG1sJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9sZWFkZXJib2FyZCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gY3JlYXRlIGEgd2Vic2l0ZSB3aGljaCBkaXNwbGF5cyBzY29yZXMgc3VibWl0dGVkIGJ5IGRpZmZlcmVudCBwbGF5ZXJzLiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gc3VibWl0IHlvdXIgc2NvcmUuIEFsbCBkYXRhIGlzIHByZXNlcnZlZCB0aGFua3MgdG8gdGhlIGV4dGVybmFsIExlYWRlcmJvYXJkIEFQSSBTZXJ2aWNlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1ByaW1lIFNob3dzIEhEJyxcbiAgICBpbWc6IG1vY2tBcGksXG4gICAgbGk6IFsnQVBJJywgJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja0FwaSxcbiAgICBpbWdEOiBtb2NrQXBpLFxuICAgIG5hbWU6ICdQcmltZSBTaG93cyBIRCcsXG4gICAgbGFuZzogWydBUEknLCAnV2VicGFjaycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnQVBJJywgJ1dlYnBhY2snLCAnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL2NhcHN0b25lMDIvZGlzdC8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2NhcHN0b25lMDInLFxuICAgIGRlc2NyaXB0aW9uOiAnTWljcm92ZXJzZSBTZWNvbmQgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIG91ciBvd24gd2ViIGFwcGxpY2F0aW9uIGJhc2VkIG9uIGFuIGV4dGVybmFsIEFQSS4gV2Ugc2VsZWN0ZWQgYW4gQVBJIHRoYXQgcHJvdmlkZXMgZGF0YSBhYm91dCBhIHRvcGljIHRoYXQgd2UgbGlrZSBhbmQgYnVpbHQgdGhlIHdlYiBhcHAgYXJvdW5kIGl0LiBUaGUgd2ViIGFwcCB3aWxsIGhhdmUgMiBvciAzIHVzZXIgaW50ZXJmYWNlcyAoZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIG91ciB0ZWFtKS4gQnVpbHQgd2l0aCBBUEksIFdlYnBhY2ssIEhUTUwsIFNhc3MgYW5kIEphdmFTY3JpcHQuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTWF0aCBNYWdpY2lhbnMnLFxuICAgIGltZzogbW9ja01hdGgsXG4gICAgbGk6IFsnQVBJJywgJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja01hdGgsXG4gICAgaW1nRDogbW9ja01hdGgsXG4gICAgbmFtZTogJ01hdGggTWFnaWNpYW5zJyxcbiAgICBsYW5nOiBbJ0FQSScsICdXZWJwYWNrJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydBUEknLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL2FwcC1tYXRoLW1hZ2ljaWFucy5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL21hdGgtbWFnaWNpYW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgTW9kdWxlIDAzIFByb2plY3Q6IFwiTWF0aCBNYWdpY2lhbnNcIiBpcyBhIHdlYnNpdGUgZm9yIGFsbCBmYW5zIG9mIG1hdGhlbWF0aWNzLiBJdCBpcyBhIFNpbmdsZSBQYWdlIEFwcCAoU1BBKSB0aGF0IGFsbG93cyB1c2VycyB0byBtYWtlIGEgc2ltcGxlIGNhbGN1bGF0aW9ucyBhbmQgcmVhZCBhIHJhbmRvbSBtYXRoLXJlbGF0ZWQgcXVvdGUuIEJ1aWx0IHdpdGggUmVhY3QsIFNhc3MgYW5kIEphdmFTY3JpcHQuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnQm9va3N0b3JlIENNUycsXG4gICAgaW1nOiBtb2NrQm9vayxcbiAgICBsaTogWydBUEknLCAnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBpbWdNOiBtb2NrQm9vayxcbiAgICBpbWdEOiBtb2NrQm9vayxcbiAgICBuYW1lOiAnQm9va3N0b3JlIENNUycsXG4gICAgbGFuZzogWydBUEknLCAnV2VicGFjaycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnQVBJJywgJ1dlYnBhY2snLCAnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9hcHAtYm9va3N0b3JlLWNtcy5uZXRsaWZ5LmFwcC8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2Jvb2tzdG9yZScsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIE1vZHVsZSAwMyBQcm9qZWN0OiBUaGlzIGVkdWNhdGlvbmFsIHByb2plY3QgaXMgc2ltaWxhciB0byB0aGUgXCJBd2Vzb21lIEJvb2tzXCIgd2Vic2l0ZS4gSXQgaXMgYSBNVlAgdmVyc2lvbiBvZiBpdCB0aGF0IGFsbG93cyB5b3UgdG8gZGlzcGxheSBhIGxpc3Qgb2YgYm9va3MsIGFkZCBhIGJvb2sgYW5kIHJlbW92ZSBhIHNlbGVjdGVkIGJvb2suIEJ1aWx0IHdpdGggUmVhY3QsIFNhc3MgYW5kIEphdmFTY3JpcHQuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnU3BhY2UgVHJhdmVsZXJzLSBIdWInLFxuICAgIGltZzogbW9ja1NwYWNlLFxuICAgIGxpOiBbJ1JlYWN0JywgJ1JUSycsICdKYXZhU2NyaXB0JywgJ1Nhc3MnXSxcbiAgICBpbWdNOiBtb2NrU3BhY2UsXG4gICAgaW1nRDogbW9ja1NwYWNlLFxuICAgIG5hbWU6ICdTcGFjZSBUcmF2ZWxlcnMtIEh1YicsXG4gICAgbGFuZzogWydSZWFjdCcsICdSVEsnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ1JlYWN0JywgJ1JUSycsICdKYXZhU2NyaXB0JywgJ1Nhc3MnLCAnQVBJJywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vYXBwLXNwYWNlLXRyYXZlbGVycy1odWIubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9zcGFjZS10cmF2ZWxlcnMtaHViJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgUmVhY3QgR3JvdXAgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgd2ViIGFwcGxpY2F0aW9uIGZvciBhIGNvbXBhbnkgdGhhdCBwcm92aWRlcyBjb21tZXJjaWFsIGFuZCBzY2llbnRpZmljIHNwYWNlIHRyYXZlbCBzZXJ2aWNlcy4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYWxsb3cgdXNlcnMgdG8gYm9vayByb2NrZXRzIGFuZCBqb2luIHNlbGVjdGVkIHNwYWNlIG1pc3Npb25zLiBCdWlsdCB3aXRoIFJlYWN0LCBSZWR1eCBUb29sa2l0LCBBUEksIFNhc3MgYW5kIEphdmFTY3JpcHQuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBpbWc6IG1vY2tQb2tlbW9uLFxuICAgIGxpOiBbJ1JlYWN0JywgJ1JUSycsICdKYXZhU2NyaXB0JywgJ1Nhc3MnXSxcbiAgICBpbWdNOiBtb2NrUG9rZW1vbixcbiAgICBpbWdEOiBtb2NrUG9rZW1vbixcbiAgICBuYW1lOiAnUG9rZW1vbiBXZWIgQXBwJyxcbiAgICBsYW5nOiBbJ1JlYWN0JywgJ1JUSycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnUmVhY3QnLCAnUlRLJywgJ0phdmFTY3JpcHQnLCAnU2FzcycsICdBUEknLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9hcHAtcG9rZW1vbi13ZWJhcHAubmV0bGlmeS5hcHAvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9jYXBzdG9uZTAzJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgUmVhY3QgQ2Fwc3RvbmUgUHJvamVjdDogVGhpcyBlZHVjYXRpb25hbCBwcm9qZWN0IGlzIHRvIGJ1aWxkIGEgbW9iaWxlIHdlYiBhcHBsaWNhdGlvbiB0byBjaGVjayBhIGxpc3Qgb2YgbWV0cmljcyAobnVtZXJpYyB2YWx1ZXMpIHVzaW5nIFJlYWN0IGFuZCBSZWR1eC4gQnVpbHQgd2l0aCBSZWFjdCwgUmVkdXggVG9vbGtpdCwgQVBJLCBTYXNzIGFuZCBKYXZhU2NyaXB0LicsXG4gIH0sXG5dO1xuXG4vLyBDcmVhdGUgQ2FyZCBJdGVtcyBEeW5hbWljYWxseVxuY29uc3QgZ3JpZEl0ZW0gPSBbXTtcbmNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gW107XG5jb25zdCBoMyA9IFtdO1xuY29uc3QgdWwgPSBbXTtcbmNvbnN0IGxpMSA9IFtdO1xuY29uc3QgbGkyID0gW107XG5jb25zdCBsaTMgPSBbXTtcbmNvbnN0IGxpNCA9IFtdO1xuY29uc3QgYnV0dG9uMSA9IFtdO1xuY29uc3QgYnV0dG9uMiA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNhcmRPYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgZ3JpZEl0ZW1baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ3JpZEl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnZ3JpZEl0ZW0nKTtcbiAgZ3JpZEl0ZW1baV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NhcmRPYmpbaV0uaW1nfSlgO1xuXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG5cbiAgaDNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBoM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmgzKTtcbiAgaDNbaV0uYXBwZW5kKGgzdGV4dCk7XG5cbiAgdWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaTFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVswXSk7XG4gIGxpMVtpXS5hcHBlbmQobGkxdGV4dCk7XG5cbiAgbGkyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbMV0pO1xuICBsaTJbaV0uYXBwZW5kKGxpMnRleHQpO1xuXG4gIGxpM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzJdKTtcbiAgbGkzW2ldLmFwcGVuZChsaTN0ZXh0KTtcblxuICBsaTRbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVszXSk7XG4gIGxpNFtpXS5hcHBlbmQobGk0dGV4dCk7XG5cbiAgYnV0dG9uMVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24xdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24xW2ldLmFwcGVuZChidXR0b24xdGV4dCk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24xW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2VlIFByb2plY3QgQnV0dG9uJyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgYnV0dG9uMltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24ydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24yW2ldLmFwcGVuZChidXR0b24ydGV4dCk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24yW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3REZXNrdG9wJyk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIHVsW2ldLmFwcGVuZChsaTFbaV0sIGxpMltpXSwgbGkzW2ldLCBsaTRbaV0pO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5hcHBlbmQoaDNbaV0sIHVsW2ldLCBidXR0b24xW2ldLCBidXR0b24yW2ldKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmQoZ3JpZEl0ZW1baV0pO1xufVxuXG5jb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5CdG4nKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGdsb2JhbChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikge1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIE1vYmlsZSBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWVQcm9qZWN0Jyk7XG5cbi8vIENyZWF0ZSBkaXYgbW9iaWxlTW9kYWwgZHluYW1pY2FsbHlcbmNvbnN0IG1vYmlsZU1vZGFsID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZEl0ZW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgbW9iaWxlTW9kYWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTW9kYWwnKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKG1vYmlsZU1vZGFsW2ldKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1vZGFsKGUpIHtcbiAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2JpbGUnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBtb2JpbGVNb2RhbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nTW9iaWxlJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZ00pO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGxpMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbMF0pO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nWzFdKTtcbiAgY29uc3QgbGkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1syXSk7XG4gIGxpMC5hcHBlbmRDaGlsZChsaTB0ZXh0KTtcbiAgbGkxLmFwcGVuZENoaWxkKGxpMXRleHQpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGkydGV4dCk7XG4gIHVsLmFwcGVuZChsaTAsIGxpMSwgbGkyKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbicpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lck1vYmlsZScpO1xuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bicpO1xuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZUxpbms7XG4gIGNvbnN0IGltZ2ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2ExLnNldEF0dHJpYnV0ZSgnc3JjJywgbGl2ZSk7XG4gIGExLmFwcGVuZENoaWxkKGltZ2ExKTtcblxuICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTIuY2xhc3NMaXN0LmFkZCgnc3JjQnRuJyk7XG4gIGNvbnN0IGxpbmthMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgU291cmNlJyk7XG4gIGEyLmFwcGVuZENoaWxkKGxpbmthMik7XG4gIGEyLmhyZWYgPSBjYXJkT2JqW2ldLnNvdXJjZUxpbms7XG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuXG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYxLmFwcGVuZENoaWxkKHVsKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChwKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMSk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICBtb2JpbGVNb2RhbFtpXS5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9iaWxlTW9kYWwpO1xufSk7XG5cbi8vIERlc2t0b3AgTW9kYWxcbmNvbnN0IHNlZVByb2plY3REZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3REZXNrdG9wJyk7XG5jb25zdCBkZXNrdG9wTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcE1vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5EZXNrdG9wTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgZGVza3RvcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VEZXNrdG9wJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXYxLnJlbW92ZSgpO1xuICB9XG5cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nRGVza3RvcCcpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZE9ialtpXS5pbWdEKTtcblxuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjMuY2xhc3NMaXN0LmFkZCgnZGVza3RvcE1vZGFsSGVhZGxpbmUnKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lRGVza3RvcCcpO1xuICBoMi5pbm5lckhUTUwgPSBjYXJkT2JqW2ldLm5hbWU7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBsaTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IGxpMHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzBdKTtcbiAgY29uc3QgbGkxdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbMV0pO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFsyXSk7XG4gIGNvbnN0IGxpM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzNdKTtcbiAgY29uc3QgbGk0dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbNF0pO1xuICBjb25zdCBsaTV0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFs1XSk7XG4gIGxpMC5hcHBlbmRDaGlsZChsaTB0ZXh0KTtcbiAgbGkxLmFwcGVuZENoaWxkKGxpMXRleHQpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGkydGV4dCk7XG4gIGxpMy5hcHBlbmRDaGlsZChsaTN0ZXh0KTtcbiAgbGk0LmFwcGVuZENoaWxkKGxpNHRleHQpO1xuICBsaTUuYXBwZW5kQ2hpbGQobGk1dGV4dCk7XG4gIHVsLmFwcGVuZChsaTAsIGxpMSwgbGkyLCBsaTMsIGxpNCwgbGk1KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbkRlc2t0b3AnKTtcbiAgcC5pbm5lclRleHQgPSBjYXJkT2JqW2ldLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXJEZXNrdG9wJyk7XG5cbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmNsYXNzTGlzdC5hZGQoJ2xpdmVCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2ExID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBMaXZlJyk7XG4gIGExLmFwcGVuZENoaWxkKGxpbmthMSk7XG4gIGExLmhyZWYgPSBjYXJkT2JqW2ldLmxpdmVMaW5rO1xuXG4gIGNvbnN0IGltZ2ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2ExLnNldEF0dHJpYnV0ZSgnc3JjJywgbGl2ZSk7XG4gIGExLmFwcGVuZENoaWxkKGltZ2ExKTtcblxuICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTIuY2xhc3NMaXN0LmFkZCgnc3JjQnRuRGVza3RvcCcpO1xuXG4gIGNvbnN0IGxpbmthMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgU291cmNlJyk7XG4gIGEyLmFwcGVuZENoaWxkKGxpbmthMik7XG4gIGEyLmhyZWYgPSBjYXJkT2JqW2ldLnNvdXJjZUxpbms7XG5cbiAgY29uc3QgaW1nYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTIuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICBhMi5hcHBlbmRDaGlsZChpbWdhMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMik7XG4gIGRpdjMuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjMpO1xuICBkaXYxLmFwcGVuZENoaWxkKHVsKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChwKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMSk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGRpdjIpO1xuICBkZXNrdG9wTW9kYWwuYXBwZW5kQ2hpbGQoZGl2MSk7XG59XG5cbnNlZVByb2plY3REZXNrdG9wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5EZXNrdG9wTW9kYWwpO1xufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIE1vYmlsZVxuY29uc3QgZm9ybU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtTW9iaWxlJyk7XG5jb25zdCBuYW1lSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0TW9iaWxlJyk7XG5jb25zdCBlbWFpbElucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXRNb2JpbGUnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlSW5wdXRNb2JpbGUnKTtcbmNvbnN0IHN1Ym1pdEJ0bk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5Nb2JpbGUnKTtcbmxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxubGV0IGZvcm1PYmogPSB7XG4gIGZ1bGxOYW1lTW9iaWxlOiAnJyxcbiAgZW1haWxNb2JpbGU6ICcnLFxuICBtZXNzYWdlTW9iaWxlOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxuICBlbWFpbERlc2t0b3A6ICcnLFxuICBtZXNzYWdlRGVza3RvcDogJycsXG59O1xuXG5mdW5jdGlvbiBzdG9yZUlubFMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteURhdGEnLCBKU09OLnN0cmluZ2lmeShmb3JtT2JqKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb24oKSB7XG4gIGNvbnN0IHN0ciA9IGVtYWlsSW5wdXRNb2JpbGUudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KCdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlJyk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbigpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBzdWJtaXRCdG5Nb2JpbGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZC4gXFxuIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBtZS4nKTtcbiAgICBzdWJtaXRCdG5Nb2JpbGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtTW9iaWxlLnN1Ym1pdCgpO1xuICB9XG59KTtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIC0gRGVza3RvcFxuY29uc3QgZm9ybURlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybURlc2t0b3AnKTtcbmNvbnN0IG5hbWVJbnB1dERlc2t0b3AxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dERlc2t0b3AxJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMicpO1xuY29uc3QgZW1haWxJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxJbnB1dERlc2t0b3AnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0RGVza3RvcCcpO1xuY29uc3Qgc3VibWl0QnRuRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5EZXNrdG9wJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25EZXNrdG9wKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0RGVza3RvcC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHJlZ0V4ID0gL1tBLVpdL2c7XG4gIGlmIChyZWdFeC50ZXN0KHN0cikpIHtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnNldEN1c3RvbVZhbGlkaXR5KCdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlLicpO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHN0b3JlSW5sUygpO1xuICB9IGVsc2Uge1xuICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGb3JtVmFsaWQ7XG59XG5cbmZvcm1EZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbkRlc2t0b3AoKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eSgnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicpO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtRGVza3RvcC5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIExvY2FsIFN0b3JhZ2UgLSBNb2JpbGUgJiBEZXNrdG9wXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybU9iaik7XG5mdW5jdGlvbiBzdG9yZUl0ZW0oZSkge1xuICBjb25zdCBrZXlOdW0gPSBrZXlzLmluZGV4T2YoZS50YXJnZXQubmFtZSk7XG4gIGZvcm1PYmpba2V5c1trZXlOdW1dXSA9IGUudGFyZ2V0LnZhbHVlO1xufVxuXG5uYW1lSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5tZXNzYWdlSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5cbmZ1bmN0aW9uIHBsYWNlSXRlbXMoKSB7XG4gIG5hbWVJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmouZnVsbE5hbWVNb2JpbGU7XG4gIGVtYWlsSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmVtYWlsTW9iaWxlO1xuICBtZXNzYWdlSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VNb2JpbGU7XG4gIG5hbWVJbnB1dERlc2t0b3AxLnZhbHVlID0gZm9ybU9iai5maXJzdE5hbWU7XG4gIG5hbWVJbnB1dERlc2t0b3AyLnZhbHVlID0gZm9ybU9iai5sYXN0TmFtZTtcbiAgZW1haWxJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLmVtYWlsRGVza3RvcDtcbiAgbWVzc2FnZUlucHV0RGVza3RvcC52YWx1ZSA9IGZvcm1PYmoubWVzc2FnZURlc2t0b3A7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiByZXRyaWV2ZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSkge1xuICAgIGZvcm1PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSk7XG4gICAgcGxhY2VJdGVtcygpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9