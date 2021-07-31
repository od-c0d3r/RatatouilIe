import * as common from './common';

const content = document.querySelector('#content');
const section = common.createSection('menuPage');

const menuItem = (title, price, imgLink) => {
  const article = document.createElement('article');
  article.className = 'd-flex justify-content-between w-100';

  const infoDiv = document.createElement('div');
  const h3 = common.createHeader(title);
  const p = common.createParag(price);
  infoDiv.append(h3, p);

  const imageDiv = document.createElement('div');
  imageDiv.className = 'cropped';
  const img = document.createElement('img');
  img.className = 'img-fluid';
  img.src = imgLink;
  imageDiv.appendChild(img);

  article.append(infoDiv, imageDiv);
  return article;
};

const menuCaller = () => {
  const head1 = common.createHeader('Entrée', 'headHighlight w-100 px-2');
  const item1 = menuItem('Fritura romana mista', '12 €', '/imgs/fritto-misto-alla-romana.jpg');
  const item2 = menuItem('Tagliere di Norcia', '11 €', '/imgs/tagliere-castelluccio.jpg');

  const head2 = common.createHeader('Plat', 'headHighlight w-100 px-2');
  const item3 = menuItem('Fritura romana mista', '11 €', '/imgs/risotto-a-la-crema-di-scampi.jpg');
  const item4 = menuItem('Ratatouille', '22 €', '/imgs/ratatouille.jpg');

  const head3 = common.createHeader('Dessert', 'headHighlight w-100 px-2');
  const item5 = menuItem('Tiramisu maison', '6 €', '/imgs/tiramisu.png');
  const item6 = menuItem('Pizza Nutella et orange', '8 €', '/imgs/chocolate-orange-fruit-pizza.jpg');
  const item7 = menuItem('Trio di fromaggi', '7 €', '/imgs/trio-di-formaggio.jpg');

  section.classList.add('d-none');
  section.append(head1, item1, item2, head2, item3, item4, head3, item5, item6, item7);
  content.appendChild(section);
};

export default menuCaller;