const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos'
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

 /*  function addNightTurn(object,key,value) {
      Object.assign(object,object);
      object[key] = value 
      return object
  } */
//ex 01
  function addNightTurn(object,key,value) {
   return object[key]=value
}
  //console.log(addNightTurn(lesson2,'turno','noite'));
  
//ex 02

const printPropertiesObject= object=> Object.keys(object);
//console.log(printPropertiesObject(lesson3));
      
// ex 03
const objectSize = object => Object.entries(object).length;
//console.log(objectSize(lesson1));  

//ex 04 
const printValuesObject = object => Object.values(object);
//console.log(printValuesObject(lesson3));

//ex 05
 const allLessons = Object.assign({},{lesson1,lesson2,lesson3});

//console.log(allLessons);

//ex 06
const numberOfStudantes = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes 
+ allLessons.lesson3.numeroEstudantes;
//console.log(numberOfStudantes());

//ex 07
const catchObjectValue = (object,position) => Object.values(object)[position];
//console.log(catchObjectValue(lesson1,0));

//ex 08
const verifyPair = (object,key,value) => (object[key] == value) ?'true':'false';
//console.log((object.key == value)?'true':'false');

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false