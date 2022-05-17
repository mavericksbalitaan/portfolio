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
;// CONCATENATED MODULE: ./src/assets/img/primeshows/mock_api.png
const mock_api_namespaceObject = __webpack_require__.p + "47d8c1453728e99c9c7a.png";
;// CONCATENATED MODULE: ./src/assets/img/primeshows/app_screenshot_api.png
const app_screenshot_api_namespaceObject = __webpack_require__.p + "2d5195e8547ceb1c1dd9.png";
;// CONCATENATED MODULE: ./src/assets/desktop-details05.png
const desktop_details05_namespaceObject = __webpack_require__.p + "834d2a6ec7124bae50a3.png";
;// CONCATENATED MODULE: ./src/assets/projectImage05.png
const projectImage05_namespaceObject = __webpack_require__.p + "30c3db2d5a3ce67ae262.png";
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
    img: app_screenshot_api_namespaceObject,
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
    h3: 'Multi-Post Stories Gain+Glory',
    img: desktop_details05_namespaceObject,
    li: ['HTML', 'Sass', 'JavaScript', 'Linters'],
    imgM: projectImage05_namespaceObject,
    imgD: desktop_details05_namespaceObject,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsaUNBQUs7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHlCQUFJO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDJCQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9hc3NldHMvY2xvc2UtbW9iaWxlTW9kYWwuc3ZnJztcbmltcG9ydCBsaXZlIGZyb20gJy4vYXNzZXRzL2ljb24tbGl2ZS5wbmcnO1xuaW1wb3J0IHNvdXJjZSBmcm9tICcuL2Fzc2V0cy9pY29uLXNvdXJjZS5wbmcnO1xuaW1wb3J0IG1vY2tBd2MgZnJvbSAnLi9hc3NldHMvaW1nL2F3YzIwMjIvbW9ja19hd2MucG5nJztcbmltcG9ydCBhd2MgZnJvbSAnLi9hc3NldHMvaW1nL2F3YzIwMjIvYXBwX3NjcmVlbnNob3RfYXdjLnBuZyc7XG5pbXBvcnQgbW9ja0F3YiBmcm9tICcuL2Fzc2V0cy9pbWcvYXdlc29tZV9ib29rcy9tb2NrX2F3Yi5wbmcnO1xuaW1wb3J0IGF3YiBmcm9tICcuL2Fzc2V0cy9pbWcvYXdlc29tZV9ib29rcy9hcHBfc2NyZWVuc2hvdF9hd2IucG5nJztcbmltcG9ydCBtb2NrVGRsIGZyb20gJy4vYXNzZXRzL2ltZy90by1kby1saXN0L21vY2tfdGRsLnBuZyc7XG5pbXBvcnQgdGRsIGZyb20gJy4vYXNzZXRzL2ltZy90by1kby1saXN0L2FwcF9zY3JlZW5zaG90X3RkbC5wbmcnO1xuaW1wb3J0IG1vY2tMZGIgZnJvbSAnLi9hc3NldHMvaW1nL2xlYWRlcmJvYXJkL21vY2tfbGRiLnBuZyc7XG5pbXBvcnQgbGRiIGZyb20gJy4vYXNzZXRzL2ltZy9sZWFkZXJib2FyZC9hcHBfc2NyZWVuc2hvdF9sZGIucG5nJztcbmltcG9ydCBtb2NrQXBpIGZyb20gJy4vYXNzZXRzL2ltZy9wcmltZXNob3dzL21vY2tfYXBpLnBuZyc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXNzZXRzL2ltZy9wcmltZXNob3dzL2FwcF9zY3JlZW5zaG90X2FwaS5wbmcnO1xuaW1wb3J0IHNhbXBsZSBmcm9tICcuL2Fzc2V0cy9kZXNrdG9wLWRldGFpbHMwNS5wbmcnO1xuaW1wb3J0IHNhbXBsZTIgZnJvbSAnLi9hc3NldHMvcHJvamVjdEltYWdlMDUucG5nJztcblxuY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkQ29udGFpbmVyJyk7XG5cbi8vIFByb2plY3QgRGF0YVxuY29uc3QgY2FyZE9iaiA9IFtcbiAge1xuICAgIGgzOiAnQVdDIDIwMjInLFxuICAgIGltZzogYXdjLFxuICAgIGxpOiBbJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBpbWdNOiBtb2NrQXdjLFxuICAgIGltZ0Q6IG1vY2tBd2MsXG4gICAgbmFtZTogJ0FzaWEgV2ViIENvbmZlcmVuY2UgMjAyMicsXG4gICAgbGFuZzogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0dpdEh1YicsICdWUyBDb2RlJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9jYXBzdG9uZTAxLycsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvY2Fwc3RvbmUwMScsXG4gICAgZGVzY3JpcHRpb246ICdNaWNyb3ZlcnNlIEZpcnN0IENhcHN0b25lIFByb2plY3Q6IFRoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgd2Vic2l0ZSBmb3IgYSB3ZWIgY29uZmVyZW5jZSBldmVudCB3aXRoIGhvbWUgcGFnZSBhbmQgYWJvdXQgcGFnZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdBd2Vzb21lIEJvb2tzJyxcbiAgICBpbWc6IGF3YixcbiAgICBsaTogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgaW1nTTogbW9ja0F3YixcbiAgICBpbWdEOiBtb2NrQXdiLFxuICAgIG5hbWU6ICdBd2Vzb21lIEJvb2tzIEFwcCcsXG4gICAgbGFuZzogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0dpdEh1YicsICdWUyBDb2RlJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9hd2Vzb21lLWJvb2tzLUVTNi8nLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2F3ZXNvbWUtYm9va3MtRVM2JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgc2ltcGxlIHdlYnNpdGUgdGhhdCBkaXNwbGF5cyBhIGxpc3Qgb2YgYm9va3MgYW5kIGFsbG93cyB5b3UgdG8gYWRkIGFuZCByZW1vdmUgYm9va3MgZnJvbSB0aGF0IGxpc3QuIFRoZSBnb2FsIGlzIHRvIG1ha2UgaXQgbW9yZSBvcmdhbml6ZWQgYnkgdXNpbmcgbW9kdWxlcyBhbmQgcHJhY3RpY2UgdGhlIEVTNiBzeW50YXguJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnVG8tRG8gTGlzdCcsXG4gICAgaW1nOiB0ZGwsXG4gICAgbGk6IFsnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnLCAnTGludGVycyddLFxuICAgIGltZ006IG1vY2tUZGwsXG4gICAgaW1nRDogbW9ja1RkbCxcbiAgICBuYW1lOiAnVG8tRG8gTGlzdCBBcHAnLFxuICAgIGxhbmc6IFsnV2VicGFjaycsICdTYXNzJywgJ0phdmFTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydHaXRIdWInLCAnV2VicGFjaycsICdIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL21hdmVyaWNrcy1kYi5naXRodWIuaW8vdG9kby1saXN0L2Rpc3QvaW5kZXguaHRtbCcsXG4gICAgc291cmNlTGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXZlcmlja3MtZGIvdG9kby1saXN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBtYWtlIGEgdG9vbCB0aGF0IGhlbHBzIHRvIG9yZ2FuaXplIHlvdXIgZGF5LiBJdCBzaW1wbHkgbGlzdHMgdGhlIHRoaW5ncyB0aGF0IHlvdSBuZWVkIHRvIGRvIGFuZCBhbGxvd3MgeW91IHRvIG1hcmsgdGhlbSBhcyBjb21wbGV0ZS4nLFxuICB9LFxuICB7XG4gICAgaDM6ICdMZWFkZXJib2FyZCcsXG4gICAgaW1nOiBsZGIsXG4gICAgbGk6IFsnQVBJJywgJ1dlYnBhY2snLCAnU2FzcycsICdKYXZhU2NyaXB0J10sXG4gICAgaW1nTTogbW9ja0xkYixcbiAgICBpbWdEOiBtb2NrTGRiLFxuICAgIG5hbWU6ICdMZWFkZXJib2FyZCBBcHAnLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9sZWFkZXJib2FyZC9kaXN0L2luZGV4Lmh0bWwnLFxuICAgIHNvdXJjZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiL2xlYWRlcmJvYXJkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYW4gZWR1Y2F0aW9uYWwgcHJvamVjdCB0byBjcmVhdGUgYSB3ZWJzaXRlIHdoaWNoIGRpc3BsYXlzIHNjb3JlcyBzdWJtaXR0ZWQgYnkgZGlmZmVyZW50IHBsYXllcnMuIEl0IGFsc28gYWxsb3dzIHlvdSB0byBzdWJtaXQgeW91ciBzY29yZS4gQWxsIGRhdGEgaXMgcHJlc2VydmVkIHRoYW5rcyB0byB0aGUgZXh0ZXJuYWwgTGVhZGVyYm9hcmQgQVBJIFNlcnZpY2UuJyxcbiAgfSxcbiAge1xuICAgIGgzOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGltZzogYXBpLFxuICAgIGxpOiBbJ0FQSScsICdXZWJwYWNrJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCddLFxuICAgIGltZ006IG1vY2tBcGksXG4gICAgaW1nRDogbW9ja0FwaSxcbiAgICBuYW1lOiAnUHJpbWUgU2hvd3MgSEQnLFxuICAgIGxhbmc6IFsnQVBJJywgJ1dlYnBhY2snLCAnSmF2YVNjcmlwdCddLFxuICAgIGxhbmdEZXNrdG9wOiBbJ0FQSScsICdXZWJwYWNrJywgJ0hUTUwnLCAnU2FzcycsICdKYXZhU2NyaXB0JywgJ0xpbnRlcnMnXSxcbiAgICBsaXZlTGluazogJ2h0dHBzOi8vbWF2ZXJpY2tzLWRiLmdpdGh1Yi5pby9jYXBzdG9uZTAyL2Rpc3QvJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYi9jYXBzdG9uZTAyJyxcbiAgICBkZXNjcmlwdGlvbjogJ01pY3JvdmVyc2UgU2Vjb25kIENhcHN0b25lIFByb2plY3Q6IFRoaXMgZWR1Y2F0aW9uYWwgcHJvamVjdCBpcyB0byBidWlsZCBvdXIgb3duIHdlYiBhcHBsaWNhdGlvbiBiYXNlZCBvbiBhbiBleHRlcm5hbCBBUEkuIFdlIHNlbGVjdGVkIGFuIEFQSSB0aGF0IHByb3ZpZGVzIGRhdGEgYWJvdXQgYSB0b3BpYyB0aGF0IHdlIGxpa2UgYW5kIGJ1aWx0IHRoZSB3ZWIgYXBwIGFyb3VuZCBpdC4gVGhlIHdlYiBhcHAgd2lsbCBoYXZlIDIgb3IgMyB1c2VyIGludGVyZmFjZXMgKGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiBvdXIgdGVhbSkuIEJ1aWx0IHdpdGggQVBJLCBXZWJwYWNrLCBIVE1MLCBTYXNzIGFuZCBKYXZhU2NyaXB0LicsXG4gIH0sXG4gIHtcbiAgICBoMzogJ011bHRpLVBvc3QgU3RvcmllcyBHYWluK0dsb3J5JyxcbiAgICBpbWc6IHNhbXBsZSxcbiAgICBsaTogWydIVE1MJywgJ1Nhc3MnLCAnSmF2YVNjcmlwdCcsICdMaW50ZXJzJ10sXG4gICAgaW1nTTogc2FtcGxlMixcbiAgICBpbWdEOiBzYW1wbGUsXG4gICAgbmFtZTogJ0tlZXBpbmcgdHJhY2sgb2YgaHVuZHJlZHMgb2YgY29tcG9uZW50cycsXG4gICAgbGFuZzogWydSdWJ5IG9uIHJhaWxzJywgJ2NzcycsICdKYXZTY3JpcHQnXSxcbiAgICBsYW5nRGVza3RvcDogWydDb2Rla2l0JywgJ0dpdEh1YicsICdKYXZhU2NyaXB0JywgJ0Jvb3RzdHJhcCcsICdUZXJtaW5hbCcsICdDb2RlcGVuJ10sXG4gICAgbGl2ZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbWF2ZXJpY2tzLWRiJyxcbiAgICBzb3VyY2VMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL21hdmVyaWNrcy1kYicsXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcXCdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IDE5NjBzIHdpdGggdGhlIHJlbGVhTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCAxOTYwcyB3aXRoIHRoZSByZWxlYScsXG4gIH0sXG5dO1xuXG4vLyBDcmVhdGUgQ2FyZCBJdGVtcyBEeW5hbWljYWxseVxuY29uc3QgZ3JpZEl0ZW0gPSBbXTtcbmNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gW107XG5jb25zdCBoMyA9IFtdO1xuY29uc3QgdWwgPSBbXTtcbmNvbnN0IGxpMSA9IFtdO1xuY29uc3QgbGkyID0gW107XG5jb25zdCBsaTMgPSBbXTtcbmNvbnN0IGxpNCA9IFtdO1xuY29uc3QgYnV0dG9uMSA9IFtdO1xuY29uc3QgYnV0dG9uMiA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICBncmlkSXRlbVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkSXRlbVtpXS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y2FyZE9ialtpXS5pbWd9KWA7XG4gIGdyaWRJdGVtW2ldLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICBncmlkSXRlbVtpXS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcblxuICBoM1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGgzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0uaDMpO1xuICBoM1tpXS5hcHBlbmQoaDN0ZXh0KTtcblxuICB1bFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxpMVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzBdKTtcbiAgbGkxW2ldLmFwcGVuZChsaTF0ZXh0KTtcblxuICBsaTJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5saVsxXSk7XG4gIGxpMltpXS5hcHBlbmQobGkydGV4dCk7XG5cbiAgbGkzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkzdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGlbMl0pO1xuICBsaTNbaV0uYXBwZW5kKGxpM3RleHQpO1xuXG4gIGxpNFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxpWzNdKTtcbiAgbGk0W2ldLmFwcGVuZChsaTR0ZXh0KTtcblxuICBidXR0b24xW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbjF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBQcm9qZWN0Jyk7XG4gIGJ1dHRvbjFbaV0uYXBwZW5kKGJ1dHRvbjF0ZXh0KTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbjFbaV0uY2xhc3NMaXN0LmFkZCgnc2VlUHJvamVjdCcpO1xuICBidXR0b24xW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdTZWUgUHJvamVjdCBCdXR0b24nKTtcbiAgYnV0dG9uMVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICBidXR0b24yW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGJ1dHRvbjJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBQcm9qZWN0Jyk7XG4gIGJ1dHRvbjJbaV0uYXBwZW5kKGJ1dHRvbjJ0ZXh0KTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGJ1dHRvbjJbaV0uY2xhc3NMaXN0LmFkZCgnc2VlUHJvamVjdERlc2t0b3AnKTtcbiAgYnV0dG9uMltpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnU2VlIFByb2plY3QgQnV0dG9uJyk7XG4gIGJ1dHRvbjJbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgdWxbaV0uYXBwZW5kKGxpMVtpXSwgbGkyW2ldLCBsaTNbaV0sIGxpNFtpXSk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyW2ldLmFwcGVuZChoM1tpXSwgdWxbaV0sIGJ1dHRvbjFbaV0sIGJ1dHRvbjJbaV0pO1xuICBncmlkSXRlbVtpXS5hcHBlbmQoZGVzY3JpcHRpb25Db250YWluZXJbaV0pO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZChncmlkSXRlbVtpXSk7XG59XG5cbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbkJ0bicpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKTtcbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gZ2xvYmFsKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xubW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gTW9iaWxlIE1vZGFsXG5jb25zdCBzZWVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlZVByb2plY3QnKTtcblxuLy8gQ3JlYXRlIGRpdiBtb2JpbGVNb2RhbCBkeW5hbWljYWxseVxuY29uc3QgbW9iaWxlTW9kYWwgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkSXRlbS5sZW5ndGg7IGkgKz0gMSkge1xuICBtb2JpbGVNb2RhbFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2JpbGVNb2RhbFtpXS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNb2RhbCcpO1xuICBncmlkSXRlbVtpXS5hcHBlbmQobW9iaWxlTW9kYWxbaV0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9iaWxlTW9kYWwoZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgbW9iaWxlTW9kYWxbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2MS5jbGFzc0xpc3QuYWRkKCdtb2JpbGVNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZU1vYmlsZScpO1xuICBpbWcxLnNldEF0dHJpYnV0ZSgnc3JjJywgY2xvc2UpO1xuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIG1vYmlsZU1vZGFsW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGl2MS5yZW1vdmUoKTtcbiAgfVxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdNb2JpbGUnKTtcbiAgaW1nMi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhcmRPYmpbaV0uaW1nTSk7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgaDIuaW5uZXJIVE1MID0gY2FyZE9ialtpXS5uYW1lO1xuXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgbGkwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGkwdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ1swXSk7XG4gIGNvbnN0IGxpMXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdbMV0pO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nWzJdKTtcbiAgbGkwLmFwcGVuZENoaWxkKGxpMHRleHQpO1xuICBsaTEuYXBwZW5kQ2hpbGQobGkxdGV4dCk7XG4gIGxpMi5hcHBlbmRDaGlsZChsaTJ0ZXh0KTtcbiAgdWwuYXBwZW5kKGxpMCwgbGkxLCBsaTIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdERlc2NyaXB0aW9uJyk7XG4gIHAuaW5uZXJUZXh0ID0gY2FyZE9ialtpXS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdjIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyTW9iaWxlJyk7XG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMS5jbGFzc0xpc3QuYWRkKCdsaXZlQnRuJyk7XG4gIGNvbnN0IGxpbmthMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgTGl2ZScpO1xuICBhMS5hcHBlbmRDaGlsZChsaW5rYTEpO1xuICBhMS5ocmVmID0gY2FyZE9ialtpXS5saXZlTGluaztcbiAgY29uc3QgaW1nYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTEuc2V0QXR0cmlidXRlKCdzcmMnLCBsaXZlKTtcbiAgYTEuYXBwZW5kQ2hpbGQoaW1nYTEpO1xuXG4gIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhMi5jbGFzc0xpc3QuYWRkKCdzcmNCdG4nKTtcbiAgY29uc3QgbGlua2EyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBTb3VyY2UnKTtcbiAgYTIuYXBwZW5kQ2hpbGQobGlua2EyKTtcbiAgYTIuaHJlZiA9IGNhcmRPYmpbaV0uc291cmNlTGluaztcbiAgY29uc3QgaW1nYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTIuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICBhMi5hcHBlbmRDaGlsZChpbWdhMik7XG5cbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChpbWcyKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChoMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQodWwpO1xuICBkaXYxLmFwcGVuZENoaWxkKHApO1xuICBkaXYyLmFwcGVuZENoaWxkKGExKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIG1vYmlsZU1vZGFsW2ldLmFwcGVuZENoaWxkKGRpdjEpO1xufVxuXG5zZWVQcm9qZWN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2JpbGVNb2RhbCk7XG59KTtcblxuLy8gRGVza3RvcCBNb2RhbFxuY29uc3Qgc2VlUHJvamVjdERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VlUHJvamVjdERlc2t0b3AnKTtcbmNvbnN0IGRlc2t0b3BNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wTW9kYWwnKTtcblxuZnVuY3Rpb24gb3BlbkRlc2t0b3BNb2RhbChlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBkZXNrdG9wTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3BNQ0NvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nMS5jbGFzc0xpc3QuYWRkKCdjbG9zZURlc2t0b3AnKTtcbiAgaW1nMS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNsb3NlKTtcblxuICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1vZGFsKCkge1xuICAgIGRlc2t0b3BNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpdjEucmVtb3ZlKCk7XG4gIH1cblxuICBpbWcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2JpbGVNb2RhbCk7XG5cbiAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbWdEZXNrdG9wJyk7XG4gIGltZzIuc2V0QXR0cmlidXRlKCdzcmMnLCBjYXJkT2JqW2ldLmltZ0QpO1xuXG4gIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2My5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wTW9kYWxIZWFkbGluZScpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVEZXNrdG9wJyk7XG4gIGgyLmlubmVySFRNTCA9IGNhcmRPYmpbaV0ubmFtZTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGxpMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzBdKTtcbiAgY29uc3QgbGkxdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbMV0pO1xuICBjb25zdCBsaTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFsyXSk7XG4gIGNvbnN0IGxpM3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXJkT2JqW2ldLmxhbmdEZXNrdG9wWzNdKTtcbiAgY29uc3QgbGk0dGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcmRPYmpbaV0ubGFuZ0Rlc2t0b3BbNF0pO1xuICBjb25zdCBsaTV0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FyZE9ialtpXS5sYW5nRGVza3RvcFs1XSk7XG4gIGxpMC5hcHBlbmRDaGlsZChsaTB0ZXh0KTtcbiAgbGkxLmFwcGVuZENoaWxkKGxpMXRleHQpO1xuICBsaTIuYXBwZW5kQ2hpbGQobGkydGV4dCk7XG4gIGxpMy5hcHBlbmRDaGlsZChsaTN0ZXh0KTtcbiAgbGk0LmFwcGVuZENoaWxkKGxpNHRleHQpO1xuICBsaTUuYXBwZW5kQ2hpbGQobGk1dGV4dCk7XG4gIHVsLmFwcGVuZChsaTAsIGxpMSwgbGkyLCBsaTMsIGxpNCwgbGk1KTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3REZXNjcmlwdGlvbkRlc2t0b3AnKTtcbiAgcC5pbm5lclRleHQgPSBjYXJkT2JqW2ldLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXJEZXNrdG9wJyk7XG5cbiAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGExLmNsYXNzTGlzdC5hZGQoJ2xpdmVCdG5EZXNrdG9wJyk7XG5cbiAgY29uc3QgbGlua2ExID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlZSBMaXZlJyk7XG4gIGExLmFwcGVuZENoaWxkKGxpbmthMSk7XG4gIGExLmhyZWYgPSBjYXJkT2JqW2ldLmxpdmVMaW5rO1xuXG4gIGNvbnN0IGltZ2ExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ2ExLnNldEF0dHJpYnV0ZSgnc3JjJywgbGl2ZSk7XG4gIGExLmFwcGVuZENoaWxkKGltZ2ExKTtcblxuICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYTIuY2xhc3NMaXN0LmFkZCgnc3JjQnRuRGVza3RvcCcpO1xuXG4gIGNvbnN0IGxpbmthMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTZWUgU291cmNlJyk7XG4gIGEyLmFwcGVuZENoaWxkKGxpbmthMik7XG4gIGEyLmhyZWYgPSBjYXJkT2JqW2ldLnNvdXJjZUxpbms7XG5cbiAgY29uc3QgaW1nYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nYTIuc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICBhMi5hcHBlbmRDaGlsZChpbWdhMik7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGRpdjEuYXBwZW5kQ2hpbGQoaW1nMik7XG4gIGRpdjMuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYxLmFwcGVuZENoaWxkKGRpdjMpO1xuICBkaXYxLmFwcGVuZENoaWxkKHVsKTtcbiAgZGl2MS5hcHBlbmRDaGlsZChwKTtcbiAgZGl2Mi5hcHBlbmRDaGlsZChhMSk7XG4gIGRpdjIuYXBwZW5kQ2hpbGQoYTIpO1xuICBkaXYzLmFwcGVuZENoaWxkKGRpdjIpO1xuICBkZXNrdG9wTW9kYWwuYXBwZW5kQ2hpbGQoZGl2MSk7XG59XG5cbnNlZVByb2plY3REZXNrdG9wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5EZXNrdG9wTW9kYWwpO1xufSk7XG5cbi8vIEZvcm0gVmFsaWRhdGlvbiAtIE1vYmlsZVxuY29uc3QgZm9ybU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtTW9iaWxlJyk7XG5jb25zdCBuYW1lSW5wdXRNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZUlucHV0TW9iaWxlJyk7XG5jb25zdCBlbWFpbElucHV0TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVtYWlsSW5wdXRNb2JpbGUnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dE1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlSW5wdXRNb2JpbGUnKTtcbmNvbnN0IHN1Ym1pdEJ0bk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5Nb2JpbGUnKTtcbmxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuXG4vLyBMb2NhbCBTdG9yYWdlIC0gTW9iaWxlICYgRGVza3RvcFxubGV0IGZvcm1PYmogPSB7XG4gIGZ1bGxOYW1lTW9iaWxlOiAnJyxcbiAgZW1haWxNb2JpbGU6ICcnLFxuICBtZXNzYWdlTW9iaWxlOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxuICBlbWFpbERlc2t0b3A6ICcnLFxuICBtZXNzYWdlRGVza3RvcDogJycsXG59O1xuXG5mdW5jdGlvbiBzdG9yZUlubFMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteURhdGEnLCBKU09OLnN0cmluZ2lmeShmb3JtT2JqKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb24oKSB7XG4gIGNvbnN0IHN0ciA9IGVtYWlsSW5wdXRNb2JpbGUudmFsdWUudHJpbSgpO1xuICBjb25zdCByZWdFeCA9IC9bQS1aXS9nO1xuICBpZiAocmVnRXgudGVzdChzdHIpKSB7XG4gICAgc3VibWl0QnRuTW9iaWxlLnNldEN1c3RvbVZhbGlkaXR5KCdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlJyk7XG4gICAgc3VibWl0QnRuTW9iaWxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICBzdG9yZUlubFMoKTtcbiAgfSBlbHNlIHtcbiAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRm9ybVZhbGlkO1xufVxuXG5mb3JtTW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbigpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBzdWJtaXRCdG5Nb2JpbGUuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZC4gXFxuIFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBtZS4nKTtcbiAgICBzdWJtaXRCdG5Nb2JpbGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtTW9iaWxlLnN1Ym1pdCgpO1xuICB9XG59KTtcblxuLy8gRm9ybSBWYWxpZGF0aW9uIC0gRGVza3RvcFxuY29uc3QgZm9ybURlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybURlc2t0b3AnKTtcbmNvbnN0IG5hbWVJbnB1dERlc2t0b3AxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWVJbnB1dERlc2t0b3AxJyk7XG5jb25zdCBuYW1lSW5wdXREZXNrdG9wMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lSW5wdXREZXNrdG9wMicpO1xuY29uc3QgZW1haWxJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1haWxJbnB1dERlc2t0b3AnKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZUlucHV0RGVza3RvcCcpO1xuY29uc3Qgc3VibWl0QnRuRGVza3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG5EZXNrdG9wJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25EZXNrdG9wKCkge1xuICBjb25zdCBzdHIgPSBlbWFpbElucHV0RGVza3RvcC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHJlZ0V4ID0gL1tBLVpdL2c7XG4gIGlmIChyZWdFeC50ZXN0KHN0cikpIHtcbiAgICBzdWJtaXRCdG5EZXNrdG9wLnNldEN1c3RvbVZhbGlkaXR5KCdTb3JyeSwgdGhpcyBmb3JtIGhhcyBub3QgYmVlbiBzdWJtaXR0ZWQuIFRoZSBjb250ZW50IG9mIHRoZSBlbWFpbCBmaWVsZCBoYXMgdG8gYmUgaW4gbG93ZXIgY2FzZS4gXFxuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0cyBhbmQgcmVsb2FkIHRoZSBwYWdlLicpO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHN0b3JlSW5sUygpO1xuICB9IGVsc2Uge1xuICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGb3JtVmFsaWQ7XG59XG5cbmZvcm1EZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdmFsaWRhdGlvbkRlc2t0b3AoKTtcbiAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgc3VibWl0QnRuRGVza3RvcC5zZXRDdXN0b21WYWxpZGl0eSgnVGhlIGZvcm0gaGFzIGJlZW4gc3VibWl0dGVkLiBcXG4gVGhhbmsgeW91IGZvciBjb250YWN0aW5nIG1lLicpO1xuICAgIHN1Ym1pdEJ0bkRlc2t0b3AucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBmb3JtRGVza3RvcC5zdWJtaXQoKTtcbiAgfVxufSk7XG5cbi8vIExvY2FsIFN0b3JhZ2UgLSBNb2JpbGUgJiBEZXNrdG9wXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybU9iaik7XG5mdW5jdGlvbiBzdG9yZUl0ZW0oZSkge1xuICBjb25zdCBrZXlOdW0gPSBrZXlzLmluZGV4T2YoZS50YXJnZXQubmFtZSk7XG4gIGZvcm1PYmpba2V5c1trZXlOdW1dXSA9IGUudGFyZ2V0LnZhbHVlO1xufVxuXG5uYW1lSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dE1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5tZXNzYWdlSW5wdXRNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubmFtZUlucHV0RGVza3RvcDIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xuZW1haWxJbnB1dERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzdG9yZUl0ZW0pO1xubWVzc2FnZUlucHV0RGVza3RvcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHN0b3JlSXRlbSk7XG5cbmZ1bmN0aW9uIHBsYWNlSXRlbXMoKSB7XG4gIG5hbWVJbnB1dE1vYmlsZS52YWx1ZSA9IGZvcm1PYmouZnVsbE5hbWVNb2JpbGU7XG4gIGVtYWlsSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLmVtYWlsTW9iaWxlO1xuICBtZXNzYWdlSW5wdXRNb2JpbGUudmFsdWUgPSBmb3JtT2JqLm1lc3NhZ2VNb2JpbGU7XG4gIG5hbWVJbnB1dERlc2t0b3AxLnZhbHVlID0gZm9ybU9iai5maXJzdE5hbWU7XG4gIG5hbWVJbnB1dERlc2t0b3AyLnZhbHVlID0gZm9ybU9iai5sYXN0TmFtZTtcbiAgZW1haWxJbnB1dERlc2t0b3AudmFsdWUgPSBmb3JtT2JqLmVtYWlsRGVza3RvcDtcbiAgbWVzc2FnZUlucHV0RGVza3RvcC52YWx1ZSA9IGZvcm1PYmoubWVzc2FnZURlc2t0b3A7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiByZXRyaWV2ZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSkge1xuICAgIGZvcm1PYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteURhdGEnKSk7XG4gICAgcGxhY2VJdGVtcygpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9