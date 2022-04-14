const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 3030
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'esta vivo!' })
})
app.listen(PORT, () => { console.log(`server online in port ${PORT}`); })
