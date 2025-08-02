const div = document.createElement('div');
// console.log(div);
div.className = 'main';
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute('title', 'DOM ');
div.style.backgroundColor = 'green';
div.style.padding = '12px';
// div.innerText = "Learning Javascript"
const addText = document.createTextNode('Learning Javascript');
div.appendChild(addText);
document.body.appendChild(div);
