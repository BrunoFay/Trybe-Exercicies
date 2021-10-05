const sorteio = () => Math.floor(Math.random() * 6);


const resultadoSorteio = (aposta, numeroSorteado) =>{
 return (aposta === numeroSorteado() )? ` o numero sorteado foi ${numeroSorteado() }, parabens, vc ganhou` :  `o numero sorteado foi ${numeroSorteado()}, infelizmente vc perdeu`;
}
console.log(resultadoSorteio(2,sorteio));
