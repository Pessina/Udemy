const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({hi: 'theredas'})
})

const PORT = process.env.PORT
app.listen(5002)
