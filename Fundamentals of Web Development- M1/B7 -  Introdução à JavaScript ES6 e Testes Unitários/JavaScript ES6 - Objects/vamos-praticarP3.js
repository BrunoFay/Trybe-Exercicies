const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(coolestTvShow[property]);
  // }
  
  console.log(Object.values(coolestTvShow));
  
  // [
  //   'BoJack Horseman',
  //   'adult animation',
  //   'Raphael Bob-Waksberg',
  //   'Princess Carolyn',
  //   'Princess Carolyn always lands on her feet.'
  //    6
  // ]





// pode criar um array onde uma string é quebrada e cada letra é transformada em uma posição do array

    console.log(Object.values('bruno'));










    const student = {
      Html: 'Muito Bom',
      Css: 'Bom',
      JavaScript: 'Ótimo',
      SoftSkill: 'Ótimo',
    };
    
    const listSkillsValuesWithFor = (student) => {
      const skills = [];
      for(skill in student) {
        skills.push(student[skill]);
      }
    
      return skills;
    };
   

    
    // função que extrai os valores de um objeto   I M P O R T A N T E

    const listSkillsValuesWithValues = (student) => Object.values(student);
    
    // Sem Object.values
    console.log(listSkillsValuesWithFor(student));
    
    // Com Object.values
    console.log(listSkillsValuesWithValues(student));













