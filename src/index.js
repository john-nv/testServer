require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORTSERVER
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096
})

console.log(privateKey)

const token = jwt.sign({userId: 1234, roles: ['admin']}, privateKey, {
  algorithm: 'RS256',
  expiresIn: '1 days'
})
console.log(token)

jwt.verify(token, publicKey, (err, decode)=>{
  console.log('decode', decode)
})

app.get('/', (req, res) => {
  res.send(publicKey)
  
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})