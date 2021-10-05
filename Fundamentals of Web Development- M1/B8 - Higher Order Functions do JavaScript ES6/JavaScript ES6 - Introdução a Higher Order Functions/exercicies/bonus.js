/* const dragonDamage = (dragon) => {
  const damage = Math.floor(Math.random() * (dragon['strength'] - 15))
  return damage
}; */


/* 
const mageDamage = mage => {
  const damage = Math.floor(Math.random() *
    ((mage['intelligence'] * 2) - mage['intelligence']))
  return damage
}; */

/* const mana = () => (mage['mana'] < 15) ? console.log('nao possui mana suficiente') : mage['mana'] - 15;

const magiaGastaPorAtaque = (mage) => { ({ dano: mageDamage, manaGasta: mana }) } */



const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: () => { ({ dano: () =>  Math.floor(Math.random() *
    ((mage['intelligence'] * 2) - mage['intelligence'])), 
    manaGasta: () => (mage['mana'] < 15) ? console.log('nao possui mana suficiente') : mage['mana'] - 15 }) },
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength))
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage:() => Math.floor(Math.random() * (dragon['strength'] - 15))
};

const battleMembers = { mage, warrior, dragon };





const damage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength));
console.log(dragon.damage());

/* const gameActions = {
  // Crie as HOFs neste objeto.
  const warriorAtackDragon = () =>
}; */
