let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let info2 = {
    personagem: 'tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
  };
  let personagens= info.personagem + "e "+ info2.personagem;
  let origens = info.origem + "e " + info2.origem;
  let recorrente= (info.recorrente = "sim")+ " e "+ (info2.recorrente ="sim");

  console.log(personagens);
  console.log(origens);
  console.log("ambos recorrentes? "+ recorrente);
