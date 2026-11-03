const controller = require('../controllers/controllerParticipante.js')
const express = require('express')

const roteador = express.Router()

roteador.post('/', controller.createParticipante)

roteador.get('/', controller.getParticipante)

roteador.put('/:id', controller.updateParticipante)

// roteador.delete('/:id', controller.deleteParticipante)

module.exports = roteador