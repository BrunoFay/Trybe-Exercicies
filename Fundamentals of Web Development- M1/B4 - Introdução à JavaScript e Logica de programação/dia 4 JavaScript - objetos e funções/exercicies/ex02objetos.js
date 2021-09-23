let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info["recorrente"]= "sim";

  /* info.recorrente= "sim" tbm cria uma nova chave dentro do objeto */
  
  for(let cont in info){
      console.log(cont +": ",info[cont]);

  }