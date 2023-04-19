import { langArr } from './lang-data.js';
const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправлення на url з індикатором мови
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['title'][hash];
  // document.querySelector('.name-mob').innerHTML = langArr['name-mob'][hash];
  for (let key in langArr) {
    // let elem = document.querySelector('.lng-' + key);
    let elemAll = document.querySelectorAll('.lng-' + key);

    // if (elem) {
    //   elem.innerHTML = langArr[key][hash];
    // }
    if (elemAll.length > 0) {
      elemAll.forEach(el => (el.innerHTML = langArr[key][hash]));
    }
  }
}

changeLanguage();
