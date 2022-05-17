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
const mock_awc_namespaceObject = __webpack_require__.p + "0425efaaadf635a2100d.png";
;// CONCATENATED MODULE: ./src/assets/img/awc2022/app_screenshot_awc.png
const app_screenshot_awc_namespaceObject = __webpack_require__.p + "961632337550c90799eb.png";
;// CONCATENATED MODULE: ./src/assets/img/awesome_books/mock_awb.png
const mock_awb_namespaceObject = __webpack_require__.p + "a6e7278e383c53abeb58.png";
;// CONCATENATED MODULE: ./src/assets/img/awesome_books/app_screenshot_awb.png
const app_screenshot_awb_namespaceObject = __webpack_require__.p + "3ac87fe0bdbf38e6e330.png";
;// CONCATENATED MODULE: ./src/assets/img/to-do-list/mock_tdl.png
const mock_tdl_namespaceObject = __webpack_require__.p + "77186f1b7b444d9622d3.png";
;// CONCATENATED MODULE: ./src/assets/img/to-do-list/app_screenshot_tdl.png
const app_screenshot_tdl_namespaceObject = __webpack_require__.p + "7bb7b7ab773953a1c351.png";
;// CONCATENATED MODULE: ./src/assets/img/leaderboard/mock_ldb.png
const mock_ldb_namespaceObject = __webpack_require__.p + "5db2153d0e4a3f9d38bc.png";
;// CONCATENATED MODULE: ./src/assets/img/leaderboard/app_screenshot_ldb.png
const app_screenshot_ldb_namespaceObject = __webpack_require__.p + "a2a714a38adca883643d.png";
;// CONCATENATED MODULE: ./src/index.js













const gridContainer = document.querySelector('.gridContainer');

// Project Data
const cardObj = [
  {
    h3: 'AWC 2022',
    img: app_screenshot_awc_namespaceObject,
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
    h3: 'Awesome Books',
    img: app_screenshot_awb_namespaceObject,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: mock_awb_namespaceObject,
    imgD: mock_awb_namespaceObject,
    name: 'Awesome Books App',
    lang: ['HTML', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/awesome-books-ES6/',
    sourceLink: 'https://github.com/mavericks-db/awesome-books-ES6',
    description: 'This is an educational project to make a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practice the ES6 syntax.',
  },
  {
    h3: 'To-Do List',
    img: app_screenshot_tdl_namespaceObject,
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
    img: app_screenshot_ldb_namespaceObject,
    li: ['Webpack', 'API', 'Sass', 'JavaScript'],
    imgM: mock_ldb_namespaceObject,
    imgD: mock_ldb_namespaceObject,
    name: 'Leaderboard App',
    lang: ['Webpack', 'Sass', 'JavaScript'],
    langDesktop: ['GitHub', 'Webpack', 'API', 'Sass', 'JavaScript', 'Linters'],
    liveLink: 'https://mavericks-db.github.io/leaderboard/dist/index.html',
    sourceLink: 'https://github.com/mavericks-db/leaderboard',
    description: 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.',
  },
  {
    h3: 'Multi-Post Stories Gain+Glory',
    img: './assets/desktop-details04.png',
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: './assets/projectImage04.png',
    imgD: './assets/desktop-details04.png',
    name: 'Keeping track of hundreds of components',
    lang: ['Ruby on rails', 'css', 'JavScript'],
    langDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://github.com/mavericks-db',
    sourceLink: 'https://github.com/mavericks-db',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    h3: 'Multi-Post Stories Gain+Glory',
    img: './assets/desktop-details05.png',
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: './assets/projectImage05.png',
    imgD: './assets/desktop-details05.png',
    name: 'Keeping track of hundreds of components',
    lang: ['Ruby on rails', 'css', 'JavScript'],
    langDesktop: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'https://github.com/mavericks-db',
    sourceLink: 'https://github.com/mavericks-db',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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

for (let i = 0; i < 6; i += 1) {
  gridItem[i] = document.createElement('div');
  gridItem[i].classList.add('gridItem');
  gridItem[i].style.backgroundImage = `url(${cardObj[i].img})`;
  gridItem[i].style.backgroundSize = 'contain';
  gridItem[i].style.backgroundRepeat = 'no-repeat';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix5QkFBSTtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwyQkFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vYXNzZXRzL2Nsb3NlLW1vYmlsZU1vZGFsLnN2Zyc7XG5pbXBvcnQgbGl2ZSBmcm9tICcuL2Fzc2V0cy9pY29uLWxpdmUucG5nJztcbmltcG9ydCBzb3VyY2UgZnJvbSAnLi9hc3NldHMvaWNvbi1zb3VyY2UucG5nJztcbmltcG9ydCBtb2NrQXdjIGZyb20gJy4vYXNzZXRzL2ltZy9hd2MyMDIyL21vY2tfYXdjLnBuZyc7XG5pbXBvcnQgYXdjIGZyb20gJy4vYXNzZXRzL2ltZy9hd2MyMDIyL2FwcF9zY3JlZW5zaG90X2F3Yy5wbmcnO1xuaW1wb3J0IG1vY2tBd2IgZnJvbSAnLi9hc3NldHMvaW1nL2F3ZXNvbWVfYm9va3MvbW9ja19hd2IucG5nJztcbmltcG9ydCBhd2IgZnJvbSAnLi9hc3NldHMvaW1nL2F3ZXNvbWVfYm9va3MvYXBwX3NjcmVlbnNob3RfYXdiLnBuZyc7XG5pbXBvcnQgbW9ja1RkbCBmcm9tICcuL2Fzc2V0cy9pbWcvdG8tZG8tbGlzdC9tb2NrX3RkbC5wbmcnO1xuaW1wb3J0IHRkbCBmcm9tICcuL2Fzc2V0cy9pbWcvdG8tZG8tbGlzdC9hcHBfc2NyZWVuc2hvdF90ZGwucG5nJztcbmltcG9ydCBtb2NrTGRiIGZyb20gJy4vYXNzZXRzL2ltZy9sZWFkZXJib2FyZC9tb2NrX2xkYi5wbmcnO1xuaW1wb3J0IGxkYiBmcm9tICcuL2Fzc2V0cy9pbWcvbGVhZGVyYm9hcmQvYXBwX3NjcmVlbnNob3RfbGRiLnBuZyc7XG5cbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZENvbnRhaW5lcicpO1xuXG4vLyBQcm9qZWN0IERhdGFcbmNvbnN0IGNhcmRPYmogPSBbXG4gIHtcbiAgICBoMzogJ0FXQyAyMDIyJyxcbiAgICBpbWc6IGF3YyxcbiAgICBsaTogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgaW1nTTogbW9ja0F3YyxcbiAgICBpbWdEOiBtb2NrQXdjLFxuICAgIG5hbWU6ICdBc2lhIFdlYiBDb25mZXJlbmNlIDIwMjInLFxuICAgIGxhbmc6IFsnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydHaXRIdWInLCAnVlMgQ29kZScsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vY2Fwc3RvbmUwMS8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2NhcHN0b25lMDEnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWljcm92ZXJzZSBGaXJzdCBDYXBzdG9uZSBQcm9qZWN0OiBUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHdlYnNpdGUgZm9yIGEgd2ViIGNvbmZlcmVuY2UgZXZlbnQgd2l0aCBob21lIHBhZ2UgYW5kIGFib3V0IHBhZ2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnQXdlc29tZSBCb29rcycsXG4gICAgaW1nOiBhd2IsXG4gICAgbGk6IFsnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGltZ006IG1vY2tBd2IsXG4gICAgaW1nRDogbW9ja0F3YixcbiAgICBuYW1lOiAnQXdlc29tZSBCb29rcyBBcHAnLFxuICAgIGxhbmc6IFsnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydHaXRIdWInLCAnVlMgQ29kZScsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vYXdlc29tZS1ib29rcy1FUzYvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9hd2Vzb21lLWJvb2tzLUVTNicsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHNpbXBsZSB3ZWJzaXRlIHRoYXQgZGlzcGxheXMgYSBsaXN0IG9mIGJvb2tzIGFuZCBhbGxvd3MgeW91IHRvIGFkZCBhbmQgcmVtb3ZlIGJvb2tzIGZyb20gdGhhdCBsaXN0LiBUaGUgZ29hbCBpcyB0byBtYWtlIGl0IG1vcmUgb3JnYW5pemVkIGJ5IHVzaW5nIG1vZHVsZXMgYW5kIHByYWN0aWNlIHRoZSBFUzYgc3ludGF4LicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ1RvLURvIExpc3QnLFxuICAgIGltZzogdGRsLFxuICAgIGxpOiBbJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBpbWdNOiBtb2NrVGRsLFxuICAgIGltZ0Q6IG1vY2tUZGwsXG4gICAgbmFtZTogJ1RvLURvIExpc3QgQXBwJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnR2l0SHViJywgJ1dlYnBhY2snLCAnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9tYXZlcmlja3MtZGIuZ2l0aHViLmlvL3RvZG8tbGlzdC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL3RvZG8tbGlzdCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gbWFrZSBhIHRvb2wgdGhhdCBoZWxwcyB0byBvcmdhbml6ZSB5b3VyIGRheS4gSXQgc2ltcGx5IGxpc3RzIHRoZSB0aGluZ3MgdGhhdCB5b3UgbmVlZCB0byBkbyBhbmQgYWxsb3dzIHlvdSB0byBtYXJrIHRoZW0gYXMgY29tcGxldGUuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTGVhZGVyYm9hcmQnLFxuICAgIGltZzogbGRiLFxuICAgIGxpOiBbJ1dlYnBhY2snLCAnQVBJJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGltZ006IG1vY2tMZGIsXG4gICAgaW1nRDogbW9ja0xkYixcbiAgICBuYW1lOiAnTGVhZGVyYm9hcmQgQXBwJyxcbiAgICBsYW5nOiBbJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnR2l0SHViJywgJ1dlYnBhY2snLCAnQVBJJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vbGVhZGVyYm9hcmQvZGlzdC9pbmRleC5odG1sJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9sZWFkZXJib2FyZCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFuIGVkdWNhdGlvbmFsIHByb2plY3QgdG8gY3JlYXRlIGEgd2Vic2l0ZSB3aGljaCBkaXNwbGF5cyBzY29yZXMgc3VibWl0dGVkIGJ5IGRpZmZlcmVudCBwbGF5ZXJzLiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gc3VibWl0IHlvdXIgc2NvcmUuIEFsbCBkYXRhIGlzIHByZXNlcnZlZCB0aGFua3MgdG8gdGhlIGV4dGVybmFsIExlYWRlcmJvYXJkIEFQSSBTZXJ2aWNlLicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBpbWc6ICcuL2Fzc2V0cy9kZXNrdG9wLWRldGFpbHMwNC5wbmcnLFxuICAgIGxpOiBbJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBpbWdNOiAnLi9hc3NldHMvcHJvamVjdEltYWdlMDQucG5nJyxcbiAgICBpbWdEOiAnLi9hc3NldHMvZGVza3RvcC1kZXRhaWxzMDQucG5nJyxcbiAgICBuYW1lOiAnS2VlcGluZyB0cmFjayBvZiBodW5kcmVkcyBvZiBjb21wb25lbnRzJyxcbiAgICBsYW5nOiBbJ1J1Ynkgb24gcmFpbHMnLCAnY3NzJywgJ0phdlNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0NvZGVraXQnLCAnR2l0SHViJywgJ0phdmFTY3JpcHQnLCAnQm9vdHN0cmFwJywgJ1Rlcm1pbmFsJywgJ0NvZGVwZW4nXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGInLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgMTk2MHMgd2l0aCB0aGUgcmVsZWFMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnTXVsdGktUG9zdCBTdG9yaWVzIEdhaW4rR2xvcnknLFxuICAgIGltZzogJy4vYXNzZXRzL2Rlc2t0b3AtZGV0YWlsczA1LnBuZycsXG4gICAgbGk6IFsnSFRNTCcsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGltZ006ICcuL2Fzc2V0cy9wcm9qZWN0SW1hZ2UwNS5wbmcnLFxuICAgIGltZ0Q6ICcuL2Fzc2V0cy9kZXNrdG9wLWRldGFpbHMwNS5wbmcnLFxuICAgIG5hbWU6ICdLZWVwaW5nIHRyYWNrIG9mIGh1bmRyZWRzIG9mIGNvbXBvbmVudHMnLFxuICAgIGxhbmc6IFsnUnVieSBvbiByYWlscycsICdjc3MnLCAnSmF2U2NyaXB0J10sXG4gICAgbGFuZ0Rlc2t0b3A6IFsnQ29kZWtpdCcsICdHaXRIdWInLCAnSmF2YVNjcmlwdCcsICdCb290c3RyYXAnLCAnVGVybWluYWwnLCAnQ29kZXBlbiddLFxuICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYicsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGInLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYUxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeVxcJ3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgMTk2MHMgd2l0aCB0aGUgcmVsZWEnLFxuICB9LFxuXTtcblxuLy8gQ3JlYXRlIENhcmQgSXRlbXMgRHluYW1pY2FsbHlcbmNvbnN0IGdyaWRJdGVtID0gW107XG5jb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IFtdO1xuY29uc3QgaDMgPSBbXTtcbmNvbnN0IHVsID0gW107XG5jb25zdCBsaTEgPSBbXTtcbmNvbnN0IGxpMiA9IFtdO1xuY29uc3QgbGkzID0gW107XG5jb25zdCBsaTQgPSBbXTtcbmNvbnN0IGJ1dHRvbjEgPSBbXTtcbmNvbnN0IGJ1dHRvbjIgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgZ3JpZEl0ZW1baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ3JpZEl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnZ3JpZEl0ZW0nKTtcbiAgZ3JpZEl0ZW1baV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NhcmRPYmpbaV0uaW1nfSlgO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgZ3JpZEl0ZW1baV0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuXG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG5cbiAgaDNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBoM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmgzKTtcbiAgaDNbaV0uYXBwZW5kKGgzdGV4dCk7XG5cbiAgdWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBsaTFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVswXSk7XG4gIGxpMVtpXS5hcHBlbmQobGkxdGV4dCk7XG5cbiAgbGkyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbMV0pO1xuICBsaTJbaV0uYXBwZW5kKGxpMnRleHQpO1xuXG4gIGxpM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzJdKTtcbiAgbGkzW2ldLmFwcGVuZChsaTN0ZXh0KTtcblxuICBsaTRbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTR0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVszXSk7XG4gIGxpNFtpXS5hcHBlbmQobGk0dGV4dCk7XG5cbiAgYnV0dG9uMVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24xdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24xW2ldLmFwcGVuZChidXR0b24xdGV4dCk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24xW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3QnKTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2VlIFByb2plY3QgQnV0dG9uJyk7XG4gIGJ1dHRvbjFbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgYnV0dG9uMltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBidXR0b24ydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgUHJvamVjdCcpO1xuICBidXR0b24yW2ldLmFwcGVuZChidXR0b24ydGV4dCk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBidXR0b24yW2ldLmNsYXNzTGlzdC5hZGQoJ3NlZVByb2plY3REZXNrdG9wJyk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1NlZSBQcm9qZWN0IEJ1dHRvbicpO1xuICBidXR0b24yW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG4gIHVsW2ldLmFwcGVuZChsaTFbaV0sIGxpMltpXSwgbGkzW2ldLCBsaTRbaV0pO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lcltpXS5hcHBlbmQoaDNbaV0sIHVsW2ldLCBidXR0b24xW2ldLCBidXR0b24yW2ldKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmQoZ3JpZEl0ZW1baV0pO1xufVxuXG5jb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5CdG4nKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJyk7XG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGdsb2JhbChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbENvbnRhaW5lcikge1xuICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcbm1vZGFsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIE1vYmlsZSBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWVQcm9qZWN0Jyk7XG5cbi8vIENyZWF0ZSBkaXYgbW9iaWxlTW9kYWwgZHluYW1pY2FsbHlcbmNvbnN0IG1vYmlsZU1vZGFsID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZEl0ZW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgbW9iaWxlTW9kYWxbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9iaWxlTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnbW9iaWxlTW9kYWwnKTtcbiAgZ3JpZEl0ZW1baV0uYXBwZW5kKG1vYmlsZU1vZGFsW2ldKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vYmlsZU1vZGFsKGUpIHtcbiAgY29uc3QgaSA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZCgnbW9iaWxlTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VNb2JpbGUnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBtb2JpbGVNb2RhbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nTW9iaWxlJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZ00pO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGxpMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbMF0pO1xuICBjb25zdCBsaTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nWzFdKTtcbiAgY29uc3QgbGkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1syXSk7XG4gIGxpMC5hcHBlbmRDaGlsZChsaTB0ZXh0KTtcbiAgbGkxLmFwcGVuZENoaWxkKGxpMXRleHQpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGkydGV4dCk7XG4gIHVsLmFwcGVuZChsaTAsIGxpMSwgbGkyKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbicpO1xuICBwLmlubmVyVGV4dCA9IGNhcmRPYmpbaV0uZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lck1vYmlsZScpO1xuICBjb25zdCBhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTEuY2xhc3NMaXN0LmFkZCgnbGl2ZUJ0bicpO1xuICBjb25zdCBsaW5rYTEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIExpdmUnKTtcbiAgYTEuYXBwZW5kQ2hpbGQobGlua2ExKTtcbiAgYTEuaHJlZiA9IGNhcmRPYmpbaV0ubGl2ZUxpbms7XG4gIGNvbnN0IGltZ2ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2ExLnNldEF0dHJpYnV0ZSgnc3JjJywgbGl2ZSk7XG4gIGExLmFwcGVuZENoaWxkKGltZ2ExKTtcblxuICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTIuY2xhc3NMaXN0LmFkZCgnc3JjQnRuJyk7XG4gIGNvbnN0IGxpbmthMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgU291cmNlJyk7XG4gIGEyLmFwcGVuZENoaWxkKGxpbmthMik7XG4gIGEyLmhyZWYgPSBjYXJkT2JqW2ldLnNvdXJjZUxpbms7XG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuXG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYxLmFwcGVuZENoaWxkKHVsKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChwKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMSk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICBtb2JpbGVNb2RhbFtpXS5hcHBlbmRDaGlsZChkaXYxKTtcbn1cblxuc2VlUHJvamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9iaWxlTW9kYWwpO1xufSk7XG5cbi8vIERlc2t0b3AgTW9kYWxcbmNvbnN0IHNlZVByb2plY3REZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3REZXNrdG9wJyk7XG5jb25zdCBkZXNrdG9wTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVza3RvcE1vZGFsJyk7XG5cbmZ1bmN0aW9uIG9wZW5EZXNrdG9wTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgZGVza3RvcE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTUNDb250YWluZXInKTtcblxuICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZzEuY2xhc3NMaXN0LmFkZCgnY2xvc2VEZXNrdG9wJyk7XG4gIGltZzEuc2V0QXR0cmlidXRlKCdzcmMnLCBjbG9zZSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNb2RhbCgpIHtcbiAgICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaXYxLnJlbW92ZSgpO1xuICB9XG5cbiAgaW1nMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9iaWxlTW9kYWwpO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SW1nRGVza3RvcCcpO1xuICBpbWcyLnNldEF0dHJpYnV0ZSgnc3JjJywgY2FyZE9ialtpXS5pbWdEKTtcblxuICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjMuY2xhc3NMaXN0LmFkZCgnZGVza3RvcE1vZGFsSGVhZGxpbmUnKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lRGVza3RvcCcpO1xuICBoMi5pbm5lckhUTUwgPSBjYXJkT2JqW2ldLm5hbWU7XG5cbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBsaTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFswXSk7XG4gIGNvbnN0IGxpMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzFdKTtcbiAgY29uc3QgbGkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbMl0pO1xuICBjb25zdCBsaTN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFszXSk7XG4gIGNvbnN0IGxpNHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzRdKTtcbiAgY29uc3QgbGk1dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbNV0pO1xuICBsaTAuYXBwZW5kQ2hpbGQobGkwdGV4dCk7XG4gIGxpMS5hcHBlbmRDaGlsZChsaTF0ZXh0KTtcbiAgbGkyLmFwcGVuZENoaWxkKGxpMnRleHQpO1xuICBsaTMuYXBwZW5kQ2hpbGQobGkzdGV4dCk7XG4gIGxpNC5hcHBlbmRDaGlsZChsaTR0ZXh0KTtcbiAgbGk1LmFwcGVuZENoaWxkKGxpNXRleHQpO1xuICB1bC5hcHBlbmQobGkwLCBsaTEsIGxpMiwgbGkzLCBsaTQsIGxpNSk7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVzY3JpcHRpb25EZXNrdG9wJyk7XG4gIHAuaW5uZXJUZXh0ID0gY2FyZE9ialtpXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyRGVza3RvcCcpO1xuXG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMS5jbGFzc0xpc3QuYWRkKCdsaXZlQnRuRGVza3RvcCcpO1xuXG4gIGNvbnN0IGxpbmthMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgTGl2ZScpO1xuICBhMS5hcHBlbmRDaGlsZChsaW5rYTEpO1xuICBhMS5ocmVmID0gY2FyZE9ialtpXS5saXZlTGluaztcblxuICBjb25zdCBpbWdhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdhMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpdmUpO1xuICBhMS5hcHBlbmRDaGlsZChpbWdhMSk7XG5cbiAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEyLmNsYXNzTGlzdC5hZGQoJ3NyY0J0bkRlc2t0b3AnKTtcblxuICBjb25zdCBsaW5rYTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2VlIFNvdXJjZScpO1xuICBhMi5hcHBlbmRDaGlsZChsaW5rYTIpO1xuICBhMi5ocmVmID0gY2FyZE9ialtpXS5zb3VyY2VMaW5rO1xuXG4gIGNvbnN0IGltZ2EyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2EyLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgYTIuYXBwZW5kQ2hpbGQoaW1nYTIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGltZzEpO1xuICBkaXYxLmFwcGVuZENoaWxkKGltZzIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGgyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChkaXYzKTtcbiAgZGl2MS5hcHBlbmRDaGlsZCh1bCk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQocCk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTEpO1xuICBkaXYyLmFwcGVuZENoaWxkKGEyKTtcbiAgZGl2My5hcHBlbmRDaGlsZChkaXYyKTtcbiAgZGVza3RvcE1vZGFsLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0RGVza3RvcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRGVza3RvcE1vZGFsKTtcbn0pO1xuXG4vLyBGb3JtIFZhbGlkYXRpb24gLSBNb2JpbGVcbmNvbnN0IGZvcm1Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybU1vYmlsZScpO1xuY29uc3QgbmFtZUlucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dE1vYmlsZScpO1xuY29uc3QgZW1haWxJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbWFpbElucHV0TW9iaWxlJyk7XG5jb25zdCBtZXNzYWdlSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0TW9iaWxlJyk7XG5jb25zdCBzdWJtaXRCdG5Nb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuTW9iaWxlJyk7XG5sZXQgaXNGb3JtVmFsaWQgPSBmYWxzZTtcblxuLy8gTG9jYWwgU3RvcmFnZSAtIE1vYmlsZSAmIERlc2t0b3BcbmxldCBmb3JtT2JqID0ge1xuICBmdWxsTmFtZU1vYmlsZTogJycsXG4gIGVtYWlsTW9iaWxlOiAnJyxcbiAgbWVzc2FnZU1vYmlsZTogJycsXG4gIGZpcnN0TmFtZTogJycsXG4gIGxhc3ROYW1lOiAnJyxcbiAgZW1haWxEZXNrdG9wOiAnJyxcbiAgbWVzc2FnZURlc2t0b3A6ICcnLFxufTtcblxuZnVuY3Rpb24gc3RvcmVJbmxTKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlEYXRhJywgSlNPTi5zdHJpbmdpZnkoZm9ybU9iaikpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0aW9uKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0TW9iaWxlLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcmVnRXggPSAvW0EtWl0vZztcbiAgaWYgKHJlZ0V4LnRlc3Qoc3RyKSkge1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5zZXRDdXN0b21WYWxpZGl0eSgnU29ycnksIHRoaXMgZm9ybSBoYXMgbm90IGJlZW4gc3VibWl0dGVkLiBUaGUgY29udGVudCBvZiB0aGUgZW1haWwgZmllbGQgaGFzIHRvIGJlIGluIGxvd2VyIGNhc2UuIFxcbiBQbGVhc2UgY2hlY2sgeW91ciBpbnB1dHMgYW5kIHJlbG9hZCB0aGUgcGFnZScpO1xuICAgIHN1Ym1pdEJ0bk1vYmlsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgc3RvcmVJbmxTKCk7XG4gIH0gZWxzZSB7XG4gICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBpc0Zvcm1WYWxpZDtcbn1cblxuZm9ybU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb24oKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KCdUaGUgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWQuIFxcbiBUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgbWUuJyk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybU1vYmlsZS5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIERlc2t0b3BcbmNvbnN0IGZvcm1EZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1EZXNrdG9wJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMScpO1xuY29uc3QgbmFtZUlucHV0RGVza3RvcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0RGVza3RvcDInKTtcbmNvbnN0IGVtYWlsSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXREZXNrdG9wJyk7XG5jb25zdCBtZXNzYWdlSW5wdXREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2VJbnB1dERlc2t0b3AnKTtcbmNvbnN0IHN1Ym1pdEJ0bkRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuRGVza3RvcCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRGVza3RvcCgpIHtcbiAgY29uc3Qgc3RyID0gZW1haWxJbnB1dERlc2t0b3AudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eSgnU29ycnksIHRoaXMgZm9ybSBoYXMgbm90IGJlZW4gc3VibWl0dGVkLiBUaGUgY29udGVudCBvZiB0aGUgZW1haWwgZmllbGQgaGFzIHRvIGJlIGluIGxvd2VyIGNhc2UuIFxcbiBQbGVhc2UgY2hlY2sgeW91ciBpbnB1dHMgYW5kIHJlbG9hZCB0aGUgcGFnZS4nKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtRGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHZhbGlkYXRpb25EZXNrdG9wKCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3Auc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZC4gXFxuIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBtZS4nKTtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgZm9ybURlc2t0b3Auc3VibWl0KCk7XG4gIH1cbn0pO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZvcm1PYmopO1xuZnVuY3Rpb24gc3RvcmVJdGVtKGUpIHtcbiAgY29uc3Qga2V5TnVtID0ga2V5cy5pbmRleE9mKGUudGFyZ2V0Lm5hbWUpO1xuICBmb3JtT2JqW2tleXNba2V5TnVtXV0gPSBlLnRhcmdldC52YWx1ZTtcbn1cblxubmFtZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm5hbWVJbnB1dERlc2t0b3AyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbmVtYWlsSW5wdXREZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc3RvcmVJdGVtKTtcbm1lc3NhZ2VJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuXG5mdW5jdGlvbiBwbGFjZUl0ZW1zKCkge1xuICBuYW1lSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmZ1bGxOYW1lTW9iaWxlO1xuICBlbWFpbElucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5lbWFpbE1vYmlsZTtcbiAgbWVzc2FnZUlucHV0TW9iaWxlLnZhbHVlID0gZm9ybU9iai5tZXNzYWdlTW9iaWxlO1xuICBuYW1lSW5wdXREZXNrdG9wMS52YWx1ZSA9IGZvcm1PYmouZmlyc3ROYW1lO1xuICBuYW1lSW5wdXREZXNrdG9wMi52YWx1ZSA9IGZvcm1PYmoubGFzdE5hbWU7XG4gIGVtYWlsSW5wdXREZXNrdG9wLnZhbHVlID0gZm9ybU9iai5lbWFpbERlc2t0b3A7XG4gIG1lc3NhZ2VJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VEZXNrdG9wO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gcmV0cmlldmUoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpIHtcbiAgICBmb3JtT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlEYXRhJykpO1xuICAgIHBsYWNlSXRlbXMoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==