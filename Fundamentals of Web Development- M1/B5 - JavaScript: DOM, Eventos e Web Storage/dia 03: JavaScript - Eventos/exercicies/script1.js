function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
/* exercicio 1 */
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDays = document.querySelector("#days");
    //criei uma variavel e armazenei o id days nela, depois fiz um for para percorrer todos os elementos do array e condicionei os feriados para acrescentar a classe holiday
    for (let index = 0; index < dezDaysList.length; index += 1) {
       const daysNumbers = dezDaysList[index];
       // criei o li colocando a classe day dentro dele com o for
       const dayNumbList = document.createElement('li');
       if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
        dayNumbList.className = "day holiday";
           
       }
       else if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18){
        dayNumbList.className = " day friday";
           
        }
        else if(dezDaysList[index] == 25){
            dayNumbList.className = "day holiday friday";
            
            
         }
         else{
            dayNumbList.className = "day";
         }
        dayNumbList.innerHTML = daysNumbers
        
        // acrescentei o conteudo do array dentro das innerHTML e adicionei o li como filho da ul
       dezDays.appendChild(dayNumbList);
    }
      
  }
  createDays();
/* exercicio 2 */
  function buttonHoliday(name) {
    let buttonHoliday = document.createElement("button");
    buttonHoliday.type = "button"
    buttonHoliday.id = "btn-holiday";
    buttonHoliday.classList.add("btn-add")
    buttonHoliday.innerHTML = name
    let dadButtonHoliday = document.querySelector(".buttons-container")
    dadButtonHoliday.appendChild(buttonHoliday);
  }
  buttonHoliday("Feriados");
  
  /* exercicio 3 */
  
  function holidayProperties() {
    let eventButtonHoliday =document.querySelector("#btn-holiday");
    let feriados = document.querySelectorAll(".holiday")
    let newColor = "gold"
    let backColor = "rgb(238,238,238)" 
    
    eventButtonHoliday.addEventListener("click",function(){
      
      for (let index = 0; index < feriados.length; index += 1) {
        if (feriados[index].style.backgroundColor === newColor) {
          feriados[index].style.backgroundColor = backColor;
        } else {
          feriados[index].style.backgroundColor = newColor;
        }
      }
   })
  }
  holidayProperties()
  
  /* exercicio 4 */

  function buttonFriday(name) {
    let buttonFriday = document.createElement("button");
    buttonFriday.type = "button"
    buttonFriday.id = "btn-friday" ;
    buttonFriday.classList.add("btn-add")
    buttonFriday.innerHTML = name
    let dadButtonFriday = document.querySelector(".buttons-container")
    dadButtonFriday.appendChild(buttonFriday);
  }
  buttonFriday("Sexta-feira")

  /* exercicio 5  */
  function fridayProperties(fridayDays) {
    let eventButtonFriday =document.querySelector("#btn-friday");
    let fridays = document.querySelectorAll(".friday")
    let sextou = "SEXTOU o/"
   
    
    eventButtonFriday.addEventListener("click",function(){
      
      for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML == sextou) {
          fridays[index].innerText = fridayDays[index]

        } else {
          fridays[index].innerHTML = sextou;
         /*  fridays[index].style.color = "gold" cor amarela*/
        }
      }
   })
  }
  let  daysFriday = [4,11,18,25]
  fridayProperties(daysFriday)

  /* exercicio 6 */
  let dayClass = document.querySelectorAll(".day")
  function zoomIn(event) {
    let daysId = document.querySelector("#days")
    daysId.addEventListener("mouseover",function (event) {
      for (let index = 0; index < dayClass.length; index++) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
      
    
        
      }
    })
    console.log("test");
  }
  zoomIn()
  function zoomOut(event) {
    let daysId = document.querySelector("#days")
    daysId.addEventListener("mouseout",function (event) {
      for (let index = 0; index < dayClass.length; index++) {
        event.target.style.fontSize = '22px';
        event.target.style.fontWeight = '500'; 
      }
    })
    
  }
  zoomOut()

  /* exercicio 7 */

  function personalT(params) {
    
    let creatT= document.createElement("span")    
    creatT.innerHTML = params
    let dadCreatT= document.querySelector(".my-tasks")
    dadCreatT.appendChild(creatT)
  }
  personalT("cozinhar")

  /* exercicio 8 */
/*  let collorT = "purple" */
let divElement = document.createElement("div")
  function pensonalTBackColor() {
   divElement.classList.add("task")
   let dadDivElement = document.querySelector(".my-tasks") 
    dadDivElement.appendChild(divElement)
  }
  pensonalTBackColor()
  /* bonus */
  function changeColorRandom(params) {
    let r =Math.floor(Math.random()*255)
    let g =Math.floor(Math.random()*255)
    let b =Math.floor(Math.random()*255)
    params.style.backgroundColor =`rgb(${r},${g},${b})`
  
  }
  changeColorRandom(divElement)
  /* exercicio 9 */

  function selectElement() {
    let divPersonalTB = document.querySelector(".task")
    divPersonalTB.addEventListener("click",function () {
      if(divPersonalTB.className == "task"){
        divPersonalTB.className = "task selected "
      }
      else{
        divPersonalTB.className = "task"
      }
    })
    
  }
  selectElement()

  /* exercicio 10 */
  
  function setDayColor() {
//     capturar as duas classes, selecionada e nao selecionada, para fazer a condição     
    let selectedTask = document.getElementsByClassName('task selected');
    let taskDiv = document.querySelector('.task');
    let days = document.querySelector('#days');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
//       event.target usado para ver qual a cor de fonte do elemento que esta sendo clicado
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let elementColor = selectedTask[0].style.backgroundColor;
        event.target.style.color = elementColor;
      } else if(eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

function creatCompromissos() {
let divTextImput = document.querySelector(".input-container")
let textImput = document.querySelector("#task-input")
let button = document.getElementsByClassName("btn-add")[2]

button.addEventListener("click",function (event) {
  if(textImput.innerHTML == null ){
    window.alert("verifique a barra")
  }
  else{
  let creatList = document.createElement("ul")
  let creatElementList = document.createElement("li")
  divTextImput.appendChild(creatList)
  creatList.appendChild(creatElementList)
  creatElementList.innerHTML= textImput.event.target.innerHTML
  }
})

}
creatCompromissos()