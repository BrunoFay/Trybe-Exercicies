const dragonDamage = (dragon) => {
  const damage = Math.floor(Math.random() * (dragon['strength'] - 15))
  return damage
};

const warriorDamage = (warrior) => {
  const damage = Math.floor(Math.random() * ((warrior['strength'] * warrior['weaponDmg']) - warrior['strength']))
  return damage
};
const mageDamage = (mage) => { const damage = Math.floor(Math.random() * ((mage['intelligence'] * 2) - mage['intelligence'])) 
return damage};
const mana =() => (mage.mana < 15)? console.log('nao possui mana suficiente'): mage.mana - 15;

const magiaGastaPorAtaque = (mage) => { ({ dano: mageDamage, manaGasta: mana }) }


const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: magiaGastaPorAtaque,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: warriorDamage,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: dragonDamage()
};

const battleMembers = { mage, warrior, dragon };


console.log(dragon.damage.dragonDamage);

/* const gameActions = {
  // Crie as HOFs neste objeto.
  const warriorAtackDragon = () => 
}; */
