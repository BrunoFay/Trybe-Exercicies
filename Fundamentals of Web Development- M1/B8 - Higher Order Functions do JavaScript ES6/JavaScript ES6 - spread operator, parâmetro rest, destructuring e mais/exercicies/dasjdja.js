
          

          
const adultos = [
    {
      id: false,
      peso: 100,
      altura: 1.85
    },
    {
      id:{adb:123},
      peso: 90,
      altura: 1.72
    },
    {
      id:undefined,
      peso: 79,
      altura: 1.99
    },
    {
      id:null,
      peso:88,
      altura:199,
    },
    {},
    {
      id:'false',
      peso:88,
      altura:199,
    },
    {
      id:0,
      peso:88,
      altura:199,
    },
    {
      id:[],
      peso:88,
      altura:199,
    },
  ]
  
  // IMC = Índice de Massa Corporal
  
  const adultFiltred = adultos.filter(({id})=> (typeof(id) == 'string' || typeof(id) == 'number'))
console.log(adultFiltred);
  
          