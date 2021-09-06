//Acesse o elemento elementoOndeVoceEsta . 
document.querySelector("#elementoOndeVoceEsta")
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "red";
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 
document.querySelector("#elementoOndeVoceEsta").firstChild. innerText = "teste escrita";
//Acesse o primeiroFilho a partir de pai . 
document.querySelector("#pai").firstElementChild;
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta . 
document.querySelector("#elementoOndeVoceEsta").firstElementChild;
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta . 
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta . 
document.querySelector("#elementoOndeVoceEsta").nextElementSibling.nextElementSibling;
//Agora acesse o terceiroFilho a partir de pai . 
document.querySelector("#pai").lastElementChild.previousElementSibling

/* ------------------------------------------------------------------------------------ */
