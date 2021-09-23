/* Crie um irmão para elementoOndeVoceEsta .  */
let acessandoIrmao= document.querySelector("#pai");
let irmaoDoElementoOndeVoceEsta = document.createElement("section");
acessandoIrmao.appendChild(irmaoDoElementoOndeVoceEsta);

/* Crie um filho para elementoOndeVoceEsta .  */
let acessandoElemento = document.querySelector("#elementoOndeVoceEsta");
let filhoDoElementoOndeVoceEsta = document.createElement("section");
acessandoElemento.appendChild(filhoDoElementoOndeVoceEsta);
 
/* Crie um filho para primeiroFilhoDoFilho .  */
let acessandoPrimerioFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoDoPrimeiroFilho = document.createElement("section");
filhoDoPrimeiroFilho.className =("filhoDoPrimeiroFilho");
acessandoPrimerioFilho.appendChild(filhoDoPrimeiroFilho);

/* A partir desse filho criado, acesse terceiroFilho .  */

document.querySelector(".filhoDoPrimeiroFilho").nextElementSibling;