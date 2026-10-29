const express = require('express')
require('dotenv').config()
const { conexao } = require('./config/database')

const app = express()

conexao()

const porta = process.env.PORTA

app.listen(porta,() => {
  console.log(`Servidor rodando na porta ${porta}`)
})