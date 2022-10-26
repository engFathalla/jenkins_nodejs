const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hello World from DevOps ITI 3 month from webhook 2022 ')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
