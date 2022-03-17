const axios = require('axios')
async function fetch(token) {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json',{
      headers:{authorization:token}});
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
module.exports=fetch

