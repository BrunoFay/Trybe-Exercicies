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
        dayNumbList.className = "holiday";
           
       }
       else if(dezDaysList[index] == 4 || dezDaysList[index] == 11 || dezDaysList[index] == 18){
        dayNumbList.className = "friday";
           
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