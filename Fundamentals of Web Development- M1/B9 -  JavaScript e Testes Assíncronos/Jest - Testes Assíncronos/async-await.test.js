const getSuperHero = require('./async-await');

 test('Verifica se o nome do herói é Wonder Woman', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});


//test com erro

test('Testa se o resultado é um falso positivo, com async/await', async () => {
    const hero = await getSuperHero();
    expect(hero).toBe('V de Vingança');
  });



  // test com erro no link

  test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
    const error = await getSuperHero();
    expect(error).toMatch('erro');
  });