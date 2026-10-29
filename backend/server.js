const express = require('express')
require('dotenv').config()

const app = express()

const porta = process.env.PORTA

app.listen(porta,() => {
  console.log(`Servidor rodando na porta ${porta}`)
})