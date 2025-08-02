function addLanguage(langName) {
  const li = document.createElement('li');
  li.innerHTML = `${langName}`;
  document.querySelector('.language').appendChild(li);
}
addLanguage('python');
addLanguage('CPP');

function addOptiLanguage(langName) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName));
  document.querySelector('.language').appendChild(li);
}
addOptiLanguage('Java');
//   Edit
const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML="Ruby"
const newli = document.createElement('li');
newli.textContent = 'Ruby';
secondLang.replaceWith(newli);

//  Edit
const firstLang = document.querySelector('li:first-child');
firstLang.outerHTML = '<li>Typescript</li>';

//    remove
const lastLang = document.querySelector('li:last-child');
console.log(lastLang);
lastLang.remove();
