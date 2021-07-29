const createSection = (clasaName) => {
  const section = document.createElement('section');
  section.className = `page ${clasaName} d-flex flex-column justify-content-center align-items-center mb-4 pt-3 px-3 highlight`;
  return section;
};

const createHeader = (headerText, cssClass = '') => {
  const h2 = document.createElement('h2');
  h2.className = cssClass;
  h2.innerHTML = headerText;
  return h2;
};

const createParag = (text) => {
  const p = document.createElement('p');
  p.innerHTML = text;
  return p;
};

const createPre = (text) => {
  const pre = document.createElement('pre');
  pre.innerHTML = text;
  return pre;
};

export {
  createSection, createHeader, createParag, createPre,
};