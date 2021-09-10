const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const webpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;


// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
function selectElement(event) {
    const techElement = document.querySelector('.tech');
    // 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
     input.value = '';

    
}
 firstLi.addEventListener("click", selectElement);
 secondLi.addEventListener("click",selectElement)
 thirdLi.addEventListener("click",selectElement)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event){const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  });
/*   A propriedade event.target pode ser usada para implementar a delegação de eventos.
 */
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

 webpage.addEventListener('dblclick', function() {
    location.replace('https://github.com/BrunoFay')
  });
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
webpage.addEventListener("mouseover",function () {
    webpage.style.color = "gold"
    webpage.style.fontSize = "xx-large" })
webpage.addEventListener("mouseout",function () {
    webpage.style.color = "white"
    webpage.style.fontSize = ""
    })        

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.


/* funçoes para mudar a cor de fundo de forma aleatoria */
function changeColorRandom(params) {
  let r =Math.floor(Math.random()*255)
  let g =Math.floor(Math.random()*255)
  let b =Math.floor(Math.random()*255)
  params.style.backgroundColor =`rgb(${r},${g},${b})`

}
let body= document.querySelector("body")
function godSaveTheQueen() {
  changeColorRandom (firstLi)
  changeColorRandom (secondLi)
  changeColorRandom (thirdLi)
  changeColorRandom (body)
  
}
/* função que controla o intervalo de tempo para chamar uma função Timeout é depois de o tempo passado, executa a função setInterval repete a função a cada 3 segundos*/ 
setInterval(godSaveTheQueen,5000)

