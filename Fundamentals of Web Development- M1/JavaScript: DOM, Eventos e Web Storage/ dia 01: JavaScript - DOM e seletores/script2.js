  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
       
       
       function backGroundColor(classe,posi,cor) {
           let backGColor = document.getElementsByClassName(classe)[posi].style.backgroundColor = cor
         return backGColor;  
       }
       backGroundColor("main-content",0,"rgb(76,164,109)");
       
       function paragraph(tagName,posi) {
        let tag = document.getElementsByTagName(tagName)[posi].innerText = "pretendo estar trabalhando no minimo como pleno e ganhando um bom dinheiro e tendo uma saude mental muito boa";
      return tag;
  }
  paragraph("p",1);
  
  function textBackGroundColor(classe,cor) {
      let textBackGColor= document.getElementsByClassName(classe)[0].style.backgroundColor = cor;
      return textBackGColor;
  }
  textBackGroundColor("center-content","white");
  
  function textCorector(classe,posi) {
      let headText =document.getElementsByClassName(classe)[0].innerText = "Exercício 5.1 - JavaScript";
      return headText;
  }
  textCorector("title","Exercício 5.1 - JavaScript");
 
  function upperCase(tag,posi) {
    let yell = document.getElementsByTagName(tag)[posi].style.textTransform = "uppercase"
             return yell;
}
upperCase("p",0);

function viewParagraphs(tag) {
    let allParagraphs= document.getElementsByTagName(tag);
for (let index = 0; index < tag.length; index+=1) {
    console.log(allParagraphs[index].innerHTML);
}
    
}viewParagraphs("p")
