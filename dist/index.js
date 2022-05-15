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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/close-mobileModal.svg */ \"./src/assets/close-mobileModal.svg\");\n/* harmony import */ var _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-live.png */ \"./src/assets/icon-live.png\");\n/* harmony import */ var _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icon-source.png */ \"./src/assets/icon-source.png\");\n/* harmony import */ var _assets_img_awc2022_all_devices_black_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/awc2022/all-devices-black.png */ \"./src/assets/img/awc2022/all-devices-black.png\");\n/* harmony import */ var _assets_img_awc2022_app_screenshot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/awc2022/app_screenshot.png */ \"./src/assets/img/awc2022/app_screenshot.png\");\n/* harmony import */ var _assets_img_awesome_books_all_devices_black_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/awesome_books/all-devices-black.png */ \"./src/assets/img/awesome_books/all-devices-black.png\");\n/* harmony import */ var _assets_img_awesome_books_app_screenshot_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/awesome_books/app_screenshot.png */ \"./src/assets/img/awesome_books/app_screenshot.png\");\n/* harmony import */ var _assets_img_to_do_list_all_devices_black_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/to-do-list/all-devices-black.png */ \"./src/assets/img/to-do-list/all-devices-black.png\");\n/* harmony import */ var _assets_img_to_do_list_app_screenshot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/to-do-list/app_screenshot.png */ \"./src/assets/img/to-do-list/app_screenshot.png\");\n/* harmony import */ var _assets_img_leaderboard_all_devices_black_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/leaderboard/all-devices-black.png */ \"./src/assets/img/leaderboard/all-devices-black.png\");\n/* harmony import */ var _assets_img_leaderboard_app_screenshot_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/leaderboard/app_screenshot.png */ \"./src/assets/img/leaderboard/app_screenshot.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst gridContainer = document.querySelector('.gridContainer');\n\nconst cardObj = {\n  h3: ['AWC 2022', 'Awesome Books', 'To-Do List', 'Leaderboard', 'Multi-Post Stories Gain+Glory', 'Multi-Post Stories Gain+Glory'],\n  img: [_assets_img_awc2022_app_screenshot_png__WEBPACK_IMPORTED_MODULE_5__, _assets_img_awesome_books_app_screenshot_png__WEBPACK_IMPORTED_MODULE_7__, _assets_img_to_do_list_app_screenshot_png__WEBPACK_IMPORTED_MODULE_9__, _assets_img_leaderboard_app_screenshot_png__WEBPACK_IMPORTED_MODULE_11__, './assets/desktop-details04.png', './assets/desktop-details05.png'],\n  li1: ['HTML', 'HTML', 'HTML', 'HTML', 'Ruby on rails', 'Ruby on rails'],\n  li2: ['Sass', 'Sass', 'Sass', 'Sass', 'CSS', 'CSS'],\n  li3: ['JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript'],\n  li4: ['Linters', 'Linters', 'Linters', 'API', 'HTML', 'HTML'],\n};\n// Create Card Items Dynamically\nconst gridItem = [];\nconst descriptionContainer = [];\nconst h3 = [];\nconst ul = [];\nconst li1 = [];\nconst li2 = [];\nconst li3 = [];\nconst li4 = [];\nconst button1 = [];\nconst button2 = [];\n\nfor (let i = 0; i < 6; i += 1) {\n  gridItem[i] = document.createElement('div');\n  gridItem[i].classList.add('gridItem');\n  gridItem[i].style.backgroundImage = `url(${cardObj.img[i]})`;\n  gridItem[i].style.backgroundSize = 'contain';\n  gridItem[i].style.backgroundRepeat = 'no-repeat';\n\n  descriptionContainer[i] = document.createElement('div');\n  descriptionContainer[i].classList.add('descriptionContainer');\n\n  h3[i] = document.createElement('h3');\n  const h3text = document.createTextNode(cardObj.h3[i]);\n  h3[i].append(h3text);\n\n  ul[i] = document.createElement('ul');\n  li1[i] = document.createElement('li');\n  const li1text = document.createTextNode(cardObj.li1[i]);\n  li1[i].append(li1text);\n\n  li2[i] = document.createElement('li');\n  const li2text = document.createTextNode(cardObj.li2[i]);\n  li2[i].append(li2text);\n\n  li3[i] = document.createElement('li');\n  const li3text = document.createTextNode(cardObj.li3[i]);\n  li3[i].append(li3text);\n\n  li4[i] = document.createElement('li');\n  const li4text = document.createTextNode(cardObj.li4[i]);\n  li4[i].append(li4text);\n\n  button1[i] = document.createElement('button');\n  const button1text = document.createTextNode('See Project');\n  button1[i].append(button1text);\n  button1[i].setAttribute('type', 'button');\n  button1[i].classList.add('seeProject');\n  button1[i].setAttribute('aria-label', 'See Project Button');\n  button1[i].setAttribute('data-index', i);\n\n  button2[i] = document.createElement('button');\n  const button2text = document.createTextNode('See Project');\n  button2[i].append(button2text);\n  button2[i].setAttribute('type', 'button');\n  button2[i].classList.add('seeProjectDesktop');\n  button2[i].setAttribute('aria-label', 'See Project Button');\n  button2[i].setAttribute('data-index', i);\n\n  ul[i].append(li1[i], li2[i], li3[i], li4[i]);\n  descriptionContainer[i].append(h3[i], ul[i], button1[i], button2[i]);\n  gridItem[i].append(descriptionContainer[i]);\n  gridContainer.append(gridItem[i]);\n}\n\nconst openBtn = document.querySelector('.openBtn');\nconst closeBtn = document.querySelector('.closeBtn');\nconst modalContainer = document.querySelector('.modalContainer');\n\nfunction openModal() {\n  modalContainer.style.display = 'block';\n}\n\nfunction closeModal() {\n  modalContainer.style.display = 'none';\n}\n\nwindow.onclick = function global(event) {\n  if (event.target === modalContainer) {\n    modalContainer.style.display = 'none';\n  }\n};\n\nopenBtn.addEventListener('click', openModal);\ncloseBtn.addEventListener('click', closeModal);\nmodalContainer.addEventListener('click', closeModal);\n\n// Mobile Modal\nconst seeProject = document.querySelectorAll('.seeProject');\n\n// Create div mobileModal dynamically\nconst mobileModal = [];\n\nfor (let i = 0; i < gridItem.length; i += 1) {\n  mobileModal[i] = document.createElement('div');\n  mobileModal[i].classList.add('mobileModal');\n  gridItem[i].append(mobileModal[i]);\n}\n\nconst description0 = 'Microverse First Capstone Project: This is an educational project to make a website for a web conference event with home page and about page.';\nconst description1 = 'This is an educational project to make a simple website that displays a list of books and allows you to add and remove books from that list. The goal is to make it more organized by using modules and practice the ES6 syntax.';\nconst description2 = 'This is an educational project to make a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.';\nconst description3 = 'This is an educational project to create a website which displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API Service.';\nconst description5 = \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea\";\n\nconst projectObj = {\n  image: [\n    _assets_img_awc2022_all_devices_black_png__WEBPACK_IMPORTED_MODULE_4__,\n    _assets_img_awesome_books_all_devices_black_png__WEBPACK_IMPORTED_MODULE_6__,\n    _assets_img_to_do_list_all_devices_black_png__WEBPACK_IMPORTED_MODULE_8__,\n    _assets_img_leaderboard_all_devices_black_png__WEBPACK_IMPORTED_MODULE_10__,\n    './assets/projectImage04.png',\n    './assets/projectImage05.png',\n  ],\n  imageDesktop: [\n    _assets_img_awc2022_all_devices_black_png__WEBPACK_IMPORTED_MODULE_4__,\n    _assets_img_awesome_books_all_devices_black_png__WEBPACK_IMPORTED_MODULE_6__,\n    _assets_img_to_do_list_all_devices_black_png__WEBPACK_IMPORTED_MODULE_8__,\n    _assets_img_leaderboard_all_devices_black_png__WEBPACK_IMPORTED_MODULE_10__,\n    './assets/desktop-details04.png',\n    './assets/desktop-details05.png',\n  ],\n  name: [\n    'Asia Web Conference 2022',\n    'Awesome Books',\n    'To-Do List',\n    'Leaderboard App',\n    'Keeping track of hundreds of components',\n    'Keeping track of hundreds of components',\n  ],\n  lang: [\n    ['HTML', 'Sass', 'JavaScript'],\n    ['HTML', 'Sass', 'JavaScript'],\n    ['HTML', 'Sass', 'JavaScript'],\n    ['HTML', 'Sass', 'JavaScript'],\n    ['Ruby on rails', 'css', 'JavScript'],\n    ['Ruby on rails', 'css', 'JavScript'],\n  ],\n  langDesktop: [\n    ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],\n    ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],\n    ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],\n    ['GitHub', 'VS Code', 'HTML', 'Sass', 'JavaScript', 'Linters'],\n    ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],\n    ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],\n  ],\n  description: [\n    description0,\n    description1,\n    description2,\n    description3,\n    description5,\n    description5,\n  ],\n  liveLink: [\n    'https://mavericks-db.github.io/capstone01/',\n    'https://mavericks-db.github.io/awesome-books-ES6/',\n    'https://mavericks-db.github.io/todo-list/dist/index.html',\n    'https://mavericks-db.github.io/leaderboard/dist/index.html',\n    'https://github.com/mavericks-db',\n    'https://github.com/mavericks-db',\n  ],\n  sourceLink: [\n    'https://github.com/mavericks-db/capstone01',\n    'https://github.com/mavericks-db/awesome-books-ES6',\n    'https://github.com/mavericks-db/todo-list',\n    'https://github.com/mavericks-db/leaderboard',\n    'https://github.com/mavericks-db',\n    'https://github.com/mavericks-db',\n  ],\n};\n\nfunction openMobileModal(e) {\n  const i = e.target.dataset.index;\n  mobileModal[i].style.display = 'block';\n  const div1 = document.createElement('div');\n  div1.classList.add('mobileMCContainer');\n\n  const img1 = document.createElement('img');\n  img1.classList.add('closeMobile');\n  img1.setAttribute('src', _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__);\n  function closeMobileModal() {\n    mobileModal[i].style.display = 'none';\n    div1.remove();\n  }\n  img1.addEventListener('click', closeMobileModal);\n\n  const img2 = document.createElement('img');\n  img2.classList.add('projectImgMobile');\n  img2.setAttribute('src', projectObj.image[i]);\n  const h2 = document.createElement('h2');\n  h2.classList.add('projectName');\n  h2.innerHTML = projectObj.name[i];\n\n  const ul = document.createElement('ul');\n  const li0 = document.createElement('li');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li0text = document.createTextNode(projectObj.lang[i][0]);\n  const li1text = document.createTextNode(projectObj.lang[i][1]);\n  const li2text = document.createTextNode(projectObj.lang[i][2]);\n  li0.appendChild(li0text);\n  li1.appendChild(li1text);\n  li2.appendChild(li2text);\n  ul.append(li0, li1, li2);\n\n  const p = document.createElement('p');\n  p.classList.add('projectDescription');\n  p.innerText = projectObj.description[i];\n\n  const div2 = document.createElement('div');\n  div2.classList.add('buttonContainerMobile');\n  const a1 = document.createElement('a');\n  a1.classList.add('liveBtn');\n  const linka1 = document.createTextNode('See Live');\n  a1.appendChild(linka1);\n  a1.href = projectObj.liveLink[i];\n  const imga1 = document.createElement('img');\n  imga1.setAttribute('src', _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__);\n  a1.appendChild(imga1);\n\n  const a2 = document.createElement('a');\n  a2.classList.add('srcBtn');\n  const linka2 = document.createTextNode('See Source');\n  a2.appendChild(linka2);\n  a2.href = projectObj.sourceLink[i];\n  const imga2 = document.createElement('img');\n  imga2.setAttribute('src', _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__);\n  a2.appendChild(imga2);\n\n  div1.appendChild(img1);\n  div1.appendChild(img2);\n  div1.appendChild(h2);\n  div1.appendChild(ul);\n  div1.appendChild(p);\n  div2.appendChild(a1);\n  div2.appendChild(a2);\n  div1.appendChild(div2);\n  mobileModal[i].appendChild(div1);\n}\n\nseeProject.forEach((element) => {\n  element.addEventListener('click', openMobileModal);\n});\n\n// Desktop Modal\nconst seeProjectDesktop = document.querySelectorAll('.seeProjectDesktop');\nconst desktopModal = document.querySelector('.desktopModal');\n\nfunction openDesktopModal(e) {\n  const i = e.target.dataset.index;\n  desktopModal.style.display = 'block';\n\n  const div1 = document.createElement('div');\n  div1.classList.add('desktopMCContainer');\n\n  const img1 = document.createElement('img');\n  img1.classList.add('closeDesktop');\n  img1.setAttribute('src', _assets_close_mobileModal_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n  function closeMobileModal() {\n    desktopModal.style.display = 'none';\n    div1.remove();\n  }\n\n  img1.addEventListener('click', closeMobileModal);\n\n  const img2 = document.createElement('img');\n  img2.classList.add('projectImgDesktop');\n  img2.setAttribute('src', projectObj.imageDesktop[i]);\n\n  const div3 = document.createElement('div');\n  div3.classList.add('desktopModalHeadline');\n\n  const h2 = document.createElement('h2');\n  h2.classList.add('projectNameDesktop');\n  h2.innerHTML = projectObj.name[i];\n\n  const ul = document.createElement('ul');\n  const li0 = document.createElement('li');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  const li4 = document.createElement('li');\n  const li5 = document.createElement('li');\n  const li0text = document.createTextNode(projectObj.langDesktop[i][0]);\n  const li1text = document.createTextNode(projectObj.langDesktop[i][1]);\n  const li2text = document.createTextNode(projectObj.langDesktop[i][2]);\n  const li3text = document.createTextNode(projectObj.langDesktop[i][3]);\n  const li4text = document.createTextNode(projectObj.langDesktop[i][4]);\n  const li5text = document.createTextNode(projectObj.langDesktop[i][5]);\n  li0.appendChild(li0text);\n  li1.appendChild(li1text);\n  li2.appendChild(li2text);\n  li3.appendChild(li3text);\n  li4.appendChild(li4text);\n  li5.appendChild(li5text);\n  ul.append(li0, li1, li2, li3, li4, li5);\n\n  const p = document.createElement('p');\n  p.classList.add('projectDescriptionDesktop');\n  p.innerText = projectObj.description[i];\n\n  const div2 = document.createElement('div');\n  div2.classList.add('buttonContainerDesktop');\n\n  const a1 = document.createElement('a');\n  a1.classList.add('liveBtnDesktop');\n\n  const linka1 = document.createTextNode('See Live');\n  a1.appendChild(linka1);\n  a1.href = projectObj.liveLink[i];\n\n  const imga1 = document.createElement('img');\n  imga1.setAttribute('src', _assets_icon_live_png__WEBPACK_IMPORTED_MODULE_2__);\n  a1.appendChild(imga1);\n\n  const a2 = document.createElement('a');\n  a2.classList.add('srcBtnDesktop');\n\n  const linka2 = document.createTextNode('See Source');\n  a2.appendChild(linka2);\n  a2.href = projectObj.sourceLink[i];\n\n  const imga2 = document.createElement('img');\n  imga2.setAttribute('src', _assets_icon_source_png__WEBPACK_IMPORTED_MODULE_3__);\n  a2.appendChild(imga2);\n  div1.appendChild(img1);\n  div1.appendChild(img2);\n  div3.appendChild(h2);\n  div1.appendChild(div3);\n  div1.appendChild(ul);\n  div1.appendChild(p);\n  div2.appendChild(a1);\n  div2.appendChild(a2);\n  div3.appendChild(div2);\n  desktopModal.appendChild(div1);\n}\n\nseeProjectDesktop.forEach((element) => {\n  element.addEventListener('click', openDesktopModal);\n});\n\n// Form Validation - Mobile\nconst formMobile = document.querySelector('.formMobile');\nconst nameInputMobile = document.querySelector('.nameInputMobile');\nconst emailInputMobile = document.querySelector('.emailInputMobile');\nconst messageInputMobile = document.querySelector('.messageInputMobile');\nconst submitBtnMobile = document.querySelector('.submitBtnMobile');\nlet isFormValid = false;\n\n// Local Storage - Mobile & Desktop\nlet formObj = {\n  fullNameMobile: '',\n  emailMobile: '',\n  messageMobile: '',\n  firstName: '',\n  lastName: '',\n  emailDesktop: '',\n  messageDesktop: '',\n};\n\nfunction storeInlS() {\n  localStorage.setItem('myData', JSON.stringify(formObj));\n}\n\nfunction validation() {\n  const str = emailInputMobile.value.trim();\n  const regEx = /[A-Z]/g;\n  if (regEx.test(str)) {\n    submitBtnMobile.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \\n Please check your inputs and reload the page');\n    submitBtnMobile.reportValidity();\n    isFormValid = false;\n    storeInlS();\n  } else {\n    isFormValid = true;\n  }\n  return isFormValid;\n}\n\nformMobile.addEventListener('submit', (e) => {\n  e.preventDefault();\n  validation();\n  if (isFormValid) {\n    submitBtnMobile.setCustomValidity('The form has been submitted. \\n Thank you for contacting me.');\n    submitBtnMobile.reportValidity();\n    formMobile.submit();\n  }\n});\n\n// Form Validation - Desktop\nconst formDesktop = document.querySelector('.formDesktop');\nconst nameInputDesktop1 = document.querySelector('.nameInputDesktop1');\nconst nameInputDesktop2 = document.querySelector('.nameInputDesktop2');\nconst emailInputDesktop = document.querySelector('.emailInputDesktop');\nconst messageInputDesktop = document.querySelector('.messageInputDesktop');\nconst submitBtnDesktop = document.querySelector('.submitBtnDesktop');\n\nfunction validationDesktop() {\n  const str = emailInputDesktop.value.trim();\n  const regEx = /[A-Z]/g;\n  if (regEx.test(str)) {\n    submitBtnDesktop.setCustomValidity('Sorry, this form has not been submitted. The content of the email field has to be in lower case. \\n Please check your inputs and reload the page.');\n    submitBtnDesktop.reportValidity();\n    isFormValid = false;\n    storeInlS();\n  } else {\n    isFormValid = true;\n  }\n  return isFormValid;\n}\n\nformDesktop.addEventListener('submit', (e) => {\n  e.preventDefault();\n  validationDesktop();\n  if (isFormValid) {\n    submitBtnDesktop.setCustomValidity('The form has been submitted. \\n Thank you for contacting me.');\n    submitBtnDesktop.reportValidity();\n    formDesktop.submit();\n  }\n});\n\n// Local Storage - Mobile & Desktop\nconst keys = Object.keys(formObj);\nfunction storeItem(e) {\n  const keyNum = keys.indexOf(e.target.name);\n  formObj[keys[keyNum]] = e.target.value;\n}\n\nnameInputMobile.addEventListener('input', storeItem);\nemailInputMobile.addEventListener('input', storeItem);\nmessageInputMobile.addEventListener('input', storeItem);\nnameInputDesktop1.addEventListener('input', storeItem);\nnameInputDesktop2.addEventListener('input', storeItem);\nemailInputDesktop.addEventListener('input', storeItem);\nmessageInputDesktop.addEventListener('input', storeItem);\n\nfunction placeItems() {\n  nameInputMobile.value = formObj.fullNameMobile;\n  emailInputMobile.value = formObj.emailMobile;\n  messageInputMobile.value = formObj.messageMobile;\n  nameInputDesktop1.value = formObj.firstName;\n  nameInputDesktop2.value = formObj.lastName;\n  emailInputDesktop.value = formObj.emailDesktop;\n  messageInputDesktop.value = formObj.messageDesktop;\n}\n\nwindow.onload = function retrieve() {\n  if (localStorage.getItem('myData')) {\n    formObj = JSON.parse(localStorage.getItem('myData'));\n    placeItems();\n  } else {\n    localStorage.clear();\n  }\n};\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/assets/close-mobileModal.svg":
/*!******************************************!*\
  !*** ./src/assets/close-mobileModal.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c733c95100e5d68036e3.svg\";\n\n//# sourceURL=webpack://portfolio/./src/assets/close-mobileModal.svg?");

/***/ }),

/***/ "./src/assets/icon-live.png":
/*!**********************************!*\
  !*** ./src/assets/icon-live.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2a0741608e07a437198.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/icon-live.png?");

/***/ }),

/***/ "./src/assets/icon-source.png":
/*!************************************!*\
  !*** ./src/assets/icon-source.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b41840c8f3fb646da1cf.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/icon-source.png?");

/***/ }),

/***/ "./src/assets/img/awc2022/all-devices-black.png":
/*!******************************************************!*\
  !*** ./src/assets/img/awc2022/all-devices-black.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0425efaaadf635a2100d.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/awc2022/all-devices-black.png?");

/***/ }),

/***/ "./src/assets/img/awc2022/app_screenshot.png":
/*!***************************************************!*\
  !*** ./src/assets/img/awc2022/app_screenshot.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"961632337550c90799eb.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/awc2022/app_screenshot.png?");

/***/ }),

/***/ "./src/assets/img/awesome_books/all-devices-black.png":
/*!************************************************************!*\
  !*** ./src/assets/img/awesome_books/all-devices-black.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6e7278e383c53abeb58.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/awesome_books/all-devices-black.png?");

/***/ }),

/***/ "./src/assets/img/awesome_books/app_screenshot.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/awesome_books/app_screenshot.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ac87fe0bdbf38e6e330.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/awesome_books/app_screenshot.png?");

/***/ }),

/***/ "./src/assets/img/leaderboard/all-devices-black.png":
/*!**********************************************************!*\
  !*** ./src/assets/img/leaderboard/all-devices-black.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5db2153d0e4a3f9d38bc.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/leaderboard/all-devices-black.png?");

/***/ }),

/***/ "./src/assets/img/leaderboard/app_screenshot.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/leaderboard/app_screenshot.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2a714a38adca883643d.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/leaderboard/app_screenshot.png?");

/***/ }),

/***/ "./src/assets/img/to-do-list/all-devices-black.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/to-do-list/all-devices-black.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77186f1b7b444d9622d3.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/to-do-list/all-devices-black.png?");

/***/ }),

/***/ "./src/assets/img/to-do-list/app_screenshot.png":
/*!******************************************************!*\
  !*** ./src/assets/img/to-do-list/app_screenshot.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7bb7b7ab773953a1c351.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/img/to-do-list/app_screenshot.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;