import * as common from './common';

const content = document.querySelector('#content');
const section = common.createSection('contactPage');

const contactCaller = () => {
  const phoneHeader = common.createHeader('#Phone', 'headHighlight w-100 px-2');
  const phoneP = common.createParag('+33 1 40 19 04 10');

  const resHeader = common.createHeader('#Reservations', 'headHighlight w-100 px-2');
  const a = document.createElement('a');
  a.href = 'http://thefork.fr';
  a.innerHTML = 'thefork.fr';
  const resP = common.createParag(a.outerHTML);

  section.classList.add('d-none');
  section.append(phoneHeader, phoneP, resHeader, resP);
  content.appendChild(section);
};

export default contactCaller;