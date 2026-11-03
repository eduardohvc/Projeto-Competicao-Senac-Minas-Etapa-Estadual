const controller = require('../controllers/controllerAtividade.js')
const express = require('express')

const roteador = express.Router()

roteador.post('/', controller.createAtividade)

roteador.get('/', controller.getAtividade)

roteador.put('/:id', controller.updateAtividade)

// roteador.delete('/:id', controller.deleteAtividade)

module.exports = roteador