const salarioBruto = 4500;
let ins;

    if (salarioBruto <= 1556.94){
    ins = salarioBruto * 0.08
}
else if(salarioBruto >=1556.95 && salarioBruto <= 2594.92){
    ins = salarioBruto*0.09
}
else if (salarioBruto >=2594.93 && salarioBruto <=5189.82){
    ins = salarioBruto *0.11
}
else {
    ins = 570.88
}

let salarioBase = salarioBruto - ins;
let ir;
 
if (salarioBase <= 1903.98){
    ir = salarioBase;
}
else if (salarioBase >=1903.99 && salarioBase <= 2826.65){
    ir = (salarioBase* 0.075) -142.80;
}
else if(salarioBase >=2826.66 && salarioBase <= 3751.05){
    ir = (salarioBase*0.15)- 354.80;
}
else if (salarioBase >=3751.06  && salarioBase <= 4664.68){
    ir = (salarioBase *0.225) -636.13;
}
else{
    ir = (salarioBase*0.275) -869.36;
}
const salarioFinal= salarioBruto - ir;
const salarioFinalTrybe = salarioFinal - (salarioFinal* 0.17);
console.log(salarioFinalTrybe);