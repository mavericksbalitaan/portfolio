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
const mobileModal = document.querySelectorAll('.mobileModal');

const description0 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

const projectObj = {
  image: [
    './assets/projectImage00.png',
    './assets/projectImage01.png',
    './assets/projectImage02.png',
    './assets/projectImage03.png',
    './assets/projectImage04.png',
    './assets/projectImage05.png',
  ],
  imageDesktop: [
    './assets/desktop-details00.png',
    './assets/desktop-details01.png',
    './assets/desktop-details02.png',
    './assets/desktop-details03.png',
    './assets/desktop-details04.png',
    './assets/desktop-details05.png',
  ],
  name: [
    'Keeping track of hundreds of components',
    'Keeping track of hundreds of components',
    'Keeping track of hundreds of components',
    'Keeping track of hundreds of components',
    'Keeping track of hundreds of components',
    'Keeping track of hundreds of components',
  ],
  lang: ['Ruby on rails', 'css', 'JavScript'],
  langDesktop: [
    'Codekit',
    'GitHub',
    'JavaScript',
    'Bootstrap',
    'Terminal',
    'Codepen',
  ],
  description: [
    description0,
    description0,
    description0,
    description0,
    description0,
    description0,
  ],
  liveLink: [
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
  ],
  sourceLink: [
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
    'https://github.com/mavericks-db',
  ],
};

function openMobileModal(e) {
  const i = e.target.dataset.index;
  mobileModal[i].style.display = 'block';
  const div1 = document.createElement('div');
  div1.classList.add('mobileMCContainer');

  const img1 = document.createElement('img');
  img1.classList.add('closeMobile');
  img1.setAttribute('src', './assets/close-mobileModal.svg');
  function closeMobileModal() {
    mobileModal[i].style.display = 'none';
    div1.remove();
  }
  img1.addEventListener('click', closeMobileModal);

  const img2 = document.createElement('img');
  img2.classList.add('projectImgMobile');
  img2.setAttribute('src', projectObj.image[i]);
  const h2 = document.createElement('h2');
  h2.classList.add('projectName');
  h2.innerHTML = projectObj.name[i];

  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li0text = document.createTextNode(projectObj.lang[0]);
  const li1text = document.createTextNode(projectObj.lang[1]);
  const li2text = document.createTextNode(projectObj.lang[2]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  ul.append(li0, li1, li2);

  const p = document.createElement('p');
  p.classList.add('projectDescription');
  p.innerText = projectObj.description[i];

  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerMobile');
  const a1 = document.createElement('a');
  a1.classList.add('liveBtn');
  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = projectObj.liveLink[i];
  const imga1 = document.createElement('img');
  imga1.setAttribute('src', './assets/icon-live.png');
  a1.appendChild(imga1);

  const a2 = document.createElement('a');
  a2.classList.add('srcBtn');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = projectObj.sourceLink[i];
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', './assets/icon-source.png');
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
  img1.setAttribute('src', './assets/close-mobileModal.svg');
  function closeMobileModal() {
    desktopModal.style.display = 'none';
    div1.remove();
  }
  img1.addEventListener('click', closeMobileModal);
  const img2 = document.createElement('img');
  img2.classList.add('projectImgDesktop');
  img2.setAttribute('src', projectObj.imageDesktop[i]);
  const div3 = document.createElement('div');
  div3.classList.add('desktopModalHeadline');
  const h2 = document.createElement('h2');
  h2.classList.add('projectNameDesktop');
  h2.innerHTML = projectObj.name[i];
  const ul = document.createElement('ul');
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li0text = document.createTextNode(projectObj.langDesktop[0]);
  const li1text = document.createTextNode(projectObj.langDesktop[1]);
  const li2text = document.createTextNode(projectObj.langDesktop[2]);
  const li3text = document.createTextNode(projectObj.langDesktop[3]);
  const li4text = document.createTextNode(projectObj.langDesktop[4]);
  const li5text = document.createTextNode(projectObj.langDesktop[5]);
  li0.appendChild(li0text);
  li1.appendChild(li1text);
  li2.appendChild(li2text);
  li3.appendChild(li3text);
  li4.appendChild(li4text);
  li5.appendChild(li5text);
  ul.append(li0, li1, li2, li3, li4, li5);
  const p = document.createElement('p');
  p.classList.add('projectDescriptionDesktop');
  p.innerText = projectObj.description[i];
  const div2 = document.createElement('div');
  div2.classList.add('buttonContainerDesktop');
  const a1 = document.createElement('a');
  a1.classList.add('liveBtnDesktop');
  const linka1 = document.createTextNode('See Live');
  a1.appendChild(linka1);
  a1.href = projectObj.liveLink[i];
  const imga1 = document.createElement('img');
  imga1.setAttribute('src', './assets/icon-live.png');
  a1.appendChild(imga1);
  const a2 = document.createElement('a');
  a2.classList.add('srcBtnDesktop');
  const linka2 = document.createTextNode('See Source');
  a2.appendChild(linka2);
  a2.href = projectObj.sourceLink[i];
  const imga2 = document.createElement('img');
  imga2.setAttribute('src', './assets/icon-source.png');
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
