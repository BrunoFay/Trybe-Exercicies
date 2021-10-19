
const fetch = require('node-fetch');

const getSuperHero = () => {
    const result = fetch('https://www.superheroapi.com/api.php/4192484924171229/720')
    .then((response) => response.json())
    .then((hero) => hero.name);
    return result;
};

getSuperHero(); // Wonder Woman






// test com catch 


const getSuperHero = () => {
    const result = fetch("https://www.superheroapi.com/api.php/4192484924171229/720")
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');
    return result;
};




// test com erro

const getSuperHero = () => {
    const result = fetch('https://www.urlalterada.com') // linha alterada
    .then((response) => response.json())
    .then((hero) => hero)
    .catch(() => 'erro000000000000');
    return result;
};

module.exports = getSuperHero;