const express=require('express')
const bodyParser=require('body-parser')
const app =express()
const verifyToken=require('./atividade2Middleware')
const axios = require('axios').default

const PORT = 6884
app.use(express.json())
app.listen(PORT,()=>{
 try {
   console.log(`${new Date()}`);
   
 } catch (error) {
  console.log(`${error}`);
 } 
})
app.get('/btc/price',verifyToken,async(req,res)=>{
 try {
   const fetch = await axios({
     method: 'get',
     headers:{"authorization":"86567349784e"},
     url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
   })
   /* const json = await fetch.json() */
   
   res.status(200).json(fetch.data)
 } catch (error) {
   
   console.log(error);
 }
})