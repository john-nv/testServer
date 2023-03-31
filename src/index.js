require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORTSERVER

app.get('/', (req, res) => {
  res.send('test server')
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})