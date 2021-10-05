const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let acertos = 0;
let erros = 0;
let sRespostas = 0;

function verivadorDeNotas(certas, rEstudantes,func){

}

function checaNotas (arr1,arr2) {
    for (let index = 0; index < arr1.length; index++) {
        for (let index1 = 0 ; index1 < arr2.length; index1++) {
        }
        if(arr1[index] === arr2[index1]){
            acertos +=1
            index +=1
        }
        else if(arr2[index1] === 'N.A'){
            sRespostas += 1;
    
        }
        else{
            erros += 1;
        }
        
        
    }
    
}
checaNotas(RIGHT_ANSWERS,STUDENT_ANSWERS)
console.log(acertos);
console.log(erros);