const content = document.querySelector('#content');

const createListItem = (itemText, extraClass = '') => {
  const li = document.createElement('li');
  li.className = `${extraClass} py-3 px-3`;
  li.innerHTML = itemText;
  return li;
};

const displaySection = (sectionClass) => {
  const homeSection = document.querySelector('.homePage');
  homeSection.classList.toggle('d-none', true);

  const menuSection = document.querySelector('.menuPage');
  menuSection.classList.toggle('d-none', true);

  const contactSection = document.querySelector('.contactPage');
  contactSection.classList.toggle('d-none', true);

  const section = document.querySelector(`.${sectionClass}`);
  section.classList.toggle('d-none', false);
};

const createClickEvent = (linkClass, pageClass) => {
  const link4 = document.querySelector(`.${linkClass}`);

  link4.addEventListener('click', () => {
    const link1 = document.querySelector('.homeLink');
    const link2 = document.querySelector('.menuLink');
    const link3 = document.querySelector('.contactLink');
    link1.classList.toggle('highlight', false);
    link2.classList.toggle('highlight', false);
    link3.classList.toggle('highlight', false);
    link4.classList.toggle('highlight', true);
    displaySection(pageClass);
  });
};

const headerCaller = () => {
  const header = document.createElement('header');
  const ul = document.createElement('ul');
  header.classList.add('header', 'd-flex', 'justify-content-center');
  ul.className = 'LinksList d-flex p-0 m-0';

  const homeDiv = createListItem('Home', 'homeLink highlight');
  const menuDiv = createListItem('Menu', 'menuLink');
  const contactDiv = createListItem('Contact', 'contactLink');

  ul.innerHTML += homeDiv.outerHTML + menuDiv.outerHTML + contactDiv.outerHTML;
  header.innerHTML += ul.outerHTML;
  content.appendChild(header);

  createClickEvent('homeLink', 'homePage');
  createClickEvent('menuLink', 'menuPage');
  createClickEvent('contactLink', 'contactPage');
};

export default headerCaller;