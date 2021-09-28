const catchPokemon = document.getElementById('pokemon');
const catchAtack = document.getElementById('atk');
const catchLvl = document.getElementById('lvl');
const catchDefence = document.getElementById('def');
const catchButton = document.getElementById('print');
const catchSection = document.getElementById('printPokemons')
const catchBulbasaur = document.getElementById('bulbasaur')
const catchIvysaur = document.getElementById('ivysaur')
const catchVenusaur = document.getElementById('venusaur')
const catchSquartle = document.getElementById('squartle')
const catchWartotle = document.getElementById('wartotle')
const catchBlastoise = document.getElementById('blastoise')
const catchCharmander = document.getElementById('charmander')
const catchCharmeleon = document.getElementById('charmeleon')
const catchCharizard = document.getElementById('charizard')
const pokemons = [];

function pokedex(nome,ata,def,lvl) {
    const pokemon = {}
    if(lvl >= 1 && lvl < 50 && def >= 1 && def < 400 && ata >= 1 && ata < 345 ){
        pokemon.Nome = nome;
        pokemon.lvl = lvl;
        pokemon.Ataque = ata;
        pokemon.Defesa = def;
        
        
    }
    pokemons.push(pokemon)
    
}
function selectPokemon() {
    const fase1 = (pokemon) =>{if(pokemon == 'bulbasaur'){
        catchBulbasaur.classList.remove('fase1')
        catchBulbasaur.classList.add('faseSelected')     
    }
    else if (pokemon == 'squartle') {
        catchSquartle.classList.remove('fase1')
        catchSquartle.classList.add('faseSelected') 
    }
    else if (pokemon == 'charmander'){
        catchCharmander.classList.remove('fase1')
        catchCharmander.classList.add('faseSelected')
    }}
    const fase2 = (pokemon,lvl)=>{if (pokemon == 'bulbasaur' && lvl >= 16 ) {
        catchBulbasaur.classList.toggle('fase1','faseSelected')
        catchIvysaur.classList.toggle('fase2')
        catchIvysaur.classList.add('faseSelected')
    }
else if (pokemon == 'squartle' && lvl >= 16 ) {
    catchSquartle.classList.toggle('fase1','faseSelected')
    catchWartotle.classList.toggle('fase2')
    catchWartotle.classList.add('faseSelected')
}
else if (pokemon == 'charmander' && lvl >= 16 ) {
    catchCharmander.classList.toggle('fase1','faseSelected')
    catchCharmeleon.classList.toggle('fase2')
    catchCharmeleon.classList.add('faseSelected') 
}}
    const fase3 = (pokemon,lvl)=>{if (pokemon == 'bulbasaur' && lvl >= 36) {
        catchIvysaur.classList.toggle('fase2','faseSelected')
        catchVenusaur.classList.toggle('fase3')
        catchVenusaur.classList.add('faseSelected')
    }
    else if (pokemon == 'squartle' && lvl >= 36) {
        catchWartotle.classList.toggle('fase2','faseSelected')
        catchBlastoise.classList.toggle('fase3')
        catchBlastoise.classList.add('faseSelected')
    }
    else if (pokemon == 'charmander' && lvl >= 36) {
        catchCharmeleon.classList.toggle('fase2','faseSelected')
        catchCharizard.classList.toggle('fase3')
        catchCharizard.classList.add('faseSelected')
    }}
    fase1(catchPokemon.value);
    fase2(catchPokemon.value,catchLvl.value)
    fase3(catchPokemon.value,catchLvl.value)
}

function printPokemon() {
     catchSection.innerHTML =  `Nome :  ${pokemons[0].Nome},
                                Level:  ${pokemons[0].lvl},
                                Ataque: ${pokemons[0].Ataque},
                                Defesa: ${pokemons[0].Defesa}`

     
}

catchButton.addEventListener('click',function stopDefAction(evt) {
    evt.preventDefault();
    pokedex(catchPokemon.value,catchAtack.value,catchDefence.value,catchLvl.value);
    printPokemon();
    selectPokemon();
    //catchSection.innerHTML= ''
})

/* function printPokemon() { return `${Object.values(pokedex('lugia',200,350,45))[0]} - ${Object.values(pokedex('lugia',200,350,45))[1]} - ${Object.values(pokedex('lugia',200,350,45))[2]} - ${Object.values(pokedex('lugia',200,350,45))[3]}`}
//console.log(printPokemon()); */