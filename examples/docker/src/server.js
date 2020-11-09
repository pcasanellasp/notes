const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./database')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})