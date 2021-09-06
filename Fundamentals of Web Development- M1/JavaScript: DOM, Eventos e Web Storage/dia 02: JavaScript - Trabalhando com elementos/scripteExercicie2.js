/* Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;  */
let body = document.querySelector("body")
let titleH1 = document.createElement("h1")
titleH1.className = "title"
titleH1.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(titleH1);

/* Adicione a tag main com a classe main-content como filho da tag body ;  */

let tagMain = document.createElement("main")
tagMain.className = "main-content";
document.body.appendChild(tagMain);
/* Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;  */
tagMain.style.backgroundColor = "green"

/* Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;  */

let tagSection = document.createElement("section");
let main = document.querySelector("main")
tagSection.className = "center-content ";
tagMain.appendChild(tagSection);

/* Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;  */

let tagParagraph = document.createElement("p");
tagParagraph.innerText = "A personalidade de Advogado é muito rara, representando menos de um por cento da população, mas esta deixa sua marca no mundo. Eles têm um sentido inato de idealismo e moralidade, mas o que a distingue da personalidade idealista é a sua determinação e firmeza – Os Advogados não são sonhadores ociosos, mas pessoas capazes de tomar medidas concretas para realizar seus objetivos e fazer um impacto positivo e duradouro."
tagSection.appendChild(tagParagraph);

/* Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;  */

let tagSectionLeft = document.createElement("section");
tagSectionLeft.className = "left-content";
tagMain.appendChild(tagSectionLeft);

/* Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;  */


let tagSectionRight = document.createElement("section");
tagSectionRight.className = "right-content";
/* Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;  */
tagSectionRight.style.marginRight = "auto"
tagMain.appendChild(tagSectionRight);

/* Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;  */

let image = document.createElement("img");
image.className = "small-image";
image.src = "https://picsum.photos/200"
tagSectionLeft.appendChild(image);


/* Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;  */
let arrayNumbersList = ["um","dois","tres","quatro","cinco","seis","sete","oito","nove","dez",] 

let numbersList= document.createElement("ul")
numbersList.id= "list"
tagSectionRight.appendChild(numbersList)

function lista1A10 (array) {
    for (let index = 0; index < array.length; index++) {
        let numbers = array[index];
        let creatLi = document.createElement("li");
        creatLi.innerText = numbers;
        numbersList.appendChild(creatLi);
        
    }
    return
}
lista1A10(arrayNumbersList);

/* Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2. 
Adicione a classe description nas 3 tags h3 criadas; */
function titleH3 (numeroDeTitulos) {
    for (let index = 0; index < numeroDeTitulos; index++) {
        let titles = numeroDeTitulos[index];
        let creatH3 = document.createElement("h3");
        creatH3.className = "describe"
        tagMain.appendChild(creatH3);

    }    
    return
}
titleH3(3);

/* Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ; 
 */
function removing(father,remove) {
    
    father.removeChild(remove);
    return;
}
removing(tagMain,tagSectionLeft);

/* Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.  */