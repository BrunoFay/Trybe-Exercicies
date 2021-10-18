// apiScript.js     
const API_URL = 'https://api.coincap.io/v2/assets';
const catchUl = document.querySelector('#coins-list')
const fetchCoin = async () => {
    return await fetch(API_URL)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => console.log(error))

}
const setCoins = async () => {
    const coins = await fetchCoin()
    coins.forEach((element,index) => { if (index < 10){
        const coinLi = document.createElement('li');
        coinLi.innerText = `${element.name} : $ ${Number(element.priceUsd).toFixed(3)} `;
        catchUl.appendChild(coinLi)
    }
    return coins
    })
}

window.onload = () => setCoins();