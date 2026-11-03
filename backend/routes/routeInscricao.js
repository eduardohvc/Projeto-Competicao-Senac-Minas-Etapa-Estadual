const controller = require('../controllers/controllerInscricao.js')
const express = require('express')

const roteador = express.Router()

roteador.post('/', controller.createInscricao)

roteador.get('/', controller.getInscricao)

roteador.put('/:id', controller.updateInscricao)

roteador.delete('/:id', controller.deleteInscricao)

module.exports = roteador