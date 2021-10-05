const newEmployees = (fullName) => {
    const employees = {
      id1: fullName('pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: fullName('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: fullName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;

  };
  const fullName = (fullName)=>{ 
  const email =`${fullName.toLowerCase().replace(' ','_')}@trybe.com`;
  return {fullName,email}
  }
  console.log(newEmployees(fullName));
  