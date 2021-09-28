const catchPokemon = document.getElementById('pokemon');
const catchAtack = document.getElementById('atk');
const catchLvl = document.getElementById('lvl');
const catchDefence = document.getElementById('def');
const catchButton = document.getElementById('print');
;

const pokemons = [];
function pokedex(nome,ata,def,lvl) {
    const pokemon = {}
    if(lvl > 1 && lvl < 50 && def > 1 && def < 400 && ata > 1 && ata < 345 ){
        pokemon.Nome = nome;
        pokemon.lvl = lvl;
        pokemon.Ataque = ata;
        pokemon.Defesa = def;
        
    }
    return pokemon;
}
function printPokemon() {
   creatSection.innerHTML =  pokedex(catchPokemon.value,catchAtack.value,catchDefence.value,catchLvl.value)
    
}
catchButton.addEventListener('click',printPokemon())

function printPokemon() { return `${Object.values(pokedex('lugia',200,350,45))[0]} - ${Object.values(pokedex('lugia',200,350,45))[1]} - ${Object.values(pokedex('lugia',200,350,45))[2]} - ${Object.values(pokedex('lugia',200,350,45))[3]}`}
console.log(printPokemon());
