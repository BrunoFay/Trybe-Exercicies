const button = document.createElement('button');
const span = document.createElement('span')
button.innerHTML = 'botão';
button.id = 'button';
span.id = 'span';
document.body.appendChild(span);
document.body.appendChild(button);
const catchButton = document.getElementById('button');
let catchSpan = document.querySelector('#span');
let contador = 0;
catchButton.addEventListener('click',() => {catchSpan.innerHTML = ++contador ;})