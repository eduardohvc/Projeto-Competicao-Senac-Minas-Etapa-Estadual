const express = require('express')
require('dotenv').config()
const { conexao } = require('./config/database')
const cors = require('cors')
const routeAtividade = require('./routes/routeAtividade.js')
const routeParticipante = require('./routes/routeParticipante.js')
const routeInscricao = require('./routes/routeInscricao.js')
// const { Atividade, Participante, Inscricao } = require('./models/Index')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

conexao()

app.use('/api/atividade', routeAtividade)
app.use('/api/participante', routeParticipante)
app.use('/api/inscricao', routeInscricao)

const porta = process.env.PORTA

app.listen(porta,() => {
  console.log(`Servidor rodando na porta ${porta}`)
})